import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden pt-32 sm:pt-40 lg:pt-48"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:text-xs">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Web design for UK local business
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="max-w-4xl text-balance text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[5.2rem]">
            Your competitor isn&rsquo;t better.
            <span className="block text-muted">
              Their website just makes them look it.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            I design and build sites for trades, clinics and independents that
            load fast, look expensive, and turn the people already searching for
            you into booked work.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#before-after"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              See the difference
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-line px-7 py-4 text-base font-semibold text-bone transition-colors hover:border-muted hover:bg-surface"
            >
              See pricing
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-7 font-mono text-xs text-muted sm:text-[13px]">
            {[
              "No templates",
              "Live in under a week",
              "You own it outright",
              "Fixed price, quoted up front",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-accent">&#43;</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
