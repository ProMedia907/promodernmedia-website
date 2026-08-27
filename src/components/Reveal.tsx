"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

/**
 * Fades content in on scroll.
 *
 * The hidden state is applied on the client before paint rather than baked
 * into the SSR markup, so with JS disabled or GSAP failing to load the page
 * still renders fully visible instead of blank.
 */

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stagger direct children instead of animating the block as one unit. */
  stagger?: boolean;
  delay?: number;
};

export default function Reveal({
  children,
  className,
  stagger = false,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const targets = stagger
      ? (Array.from(el.children) as HTMLElement[])
      : [el];
    if (targets.length === 0) return;

    // Hide before first paint.
    for (const t of targets) {
      t.style.opacity = "0";
      t.style.willChange = "transform, opacity";
    }

    const show = () => {
      for (const t of targets) {
        t.style.opacity = "";
        t.style.transform = "";
        t.style.willChange = "";
      }
    };

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      try {
        const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          gsap.fromTo(
            targets,
            { y: 26, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              delay,
              ease: "power3.out",
              stagger: stagger ? 0.09 : 0,
              clearProps: "willChange",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
          );
        }, el);
      } catch {
        // Animation is decoration; never let it cost us the content.
        show();
      }
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
      show();
    };
  }, [stagger, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
