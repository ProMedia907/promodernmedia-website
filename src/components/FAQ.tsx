import { faqs } from "@/lib/site";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Questions
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              The things people ask before saying yes.
            </h2>
          </div>
        </Reveal>

        <Reveal stagger className="divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left text-[17px] font-medium tracking-tight transition-colors hover:text-accent sm:text-lg">
                {faq.q}
                <span
                  aria-hidden="true"
                  className="mt-1.5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
