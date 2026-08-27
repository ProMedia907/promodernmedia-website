import { about } from "@/lib/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {about.eyebrow}
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                {about.heading}
              </h2>
            </div>
          </Reveal>

          <Reveal stagger>
            {about.body.map((para) => (
              <p
                key={para.slice(0, 24)}
                className="mb-6 text-base leading-relaxed text-muted sm:text-lg"
              >
                {para}
              </p>
            ))}

            <ul className="mt-10 divide-y divide-line border-y border-line">
              {about.points.map((p) => (
                <li
                  key={p.label}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="w-52 shrink-0 text-[15px] font-semibold text-bone">
                    {p.label}
                  </span>
                  <span className="text-[15px] leading-relaxed text-muted">
                    {p.detail}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
