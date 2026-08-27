import { tiers } from "@/lib/site";
import BreakEven from "./BreakEven";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-y border-line bg-ink-2 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Pricing
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Two ways to pay. No surprises in either.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Quoted up front and fixed for the project. Spread it as a build
              fee plus a monthly, or buy the whole thing outright and be done.
            </p>
          </div>
        </Reveal>

        <Reveal
          stagger
          className="mx-auto grid max-w-4xl items-stretch gap-5 md:grid-cols-2"
        >
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex h-full flex-col rounded-xl border p-7 sm:p-8 ${
                tier.featured
                  ? "border-accent/60 bg-surface shadow-[0_0_60px_-20px_var(--color-accent)]"
                  : "border-line bg-surface/40"
              }`}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                  Most popular
                </span>
              ) : null}

              <h3 className="text-lg font-semibold tracking-tight">
                {tier.name}
              </h3>

              <div className="mt-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {tier.cadence}
                  </span>
                </div>

                {tier.then ? (
                  <div className="mt-3 flex items-baseline gap-2 border-t border-line pt-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted">
                      then
                    </span>
                    <span className="text-2xl font-semibold tracking-tight text-bone">
                      {tier.then.price}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {tier.then.cadence}
                    </span>
                  </div>
                ) : null}
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                {tier.summary}
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-bone">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={tier.featured ? "var(--color-accent)" : "currentColor"}
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`mt-1 shrink-0 ${
                        tier.featured ? "" : "text-muted"
                      }`}
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  tier.featured
                    ? "bg-accent text-white"
                    : "border border-line bg-ink text-bone hover:border-muted"
                }`}
              >
                {tier.cta}
              </a>

              {/* Fixed height keeps the CTAs aligned across cards whose
                  footnotes wrap to different line counts. */}
              <p className="mt-4 min-h-8 text-center font-mono text-[10px] leading-relaxed text-muted">
                {tier.footnote}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <BreakEven />
        </Reveal>
      </div>
    </section>
  );
}
