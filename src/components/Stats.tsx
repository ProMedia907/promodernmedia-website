import { stats } from "@/lib/site";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="border-y border-line bg-surface/35 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              The cost of doing nothing
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Your website is quietly costing you customers.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Not dramatically. Not all at once. Just a steady leak of people
              who found you, took one look, and went back to Google.
            </p>
          </div>
        </Reveal>

        <Reveal stagger className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.figure} className="flex flex-col bg-ink p-7 sm:p-8">
              <div className="font-mono text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
                {s.figure}
              </div>
              <div className="mt-3 text-[15px] font-medium leading-snug text-bone">
                {s.label}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {s.note}
              </p>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] text-muted/70 underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                {s.source}
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
