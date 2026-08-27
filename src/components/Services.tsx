import { services } from "@/lib/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              What I do
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Four things, done properly.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              No bloated retainers and no services invented to pad an invoice.
              This is the work that actually moves the needle for a local
              business.
            </p>
          </div>
        </Reveal>

        <Reveal stagger className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-line bg-surface/40 p-7 transition-colors hover:border-muted/50 sm:p-9"
            >
              <div className="mb-5 font-mono text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                {s.title}
              </h3>
              <p className="mb-6 text-[15px] leading-relaxed text-muted">
                {s.body}
              </p>
              <ul className="flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-line bg-ink px-3 py-1.5 font-mono text-[11px] text-muted"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-25"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
