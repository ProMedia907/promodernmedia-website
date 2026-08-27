import { work } from "@/lib/site";
import Reveal from "./Reveal";
import WorkThumb from "./WorkThumb";

export default function Work() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Demonstration builds
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                What a rebuild actually looks like.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Six kinds of local business, each designed around the one thing
              that business needs a stranger to do within ten seconds.
            </p>
          </div>
        </Reveal>

        <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((project) => (
            <article
              key={project.name}
              className="group cursor-pointer overflow-hidden rounded-xl border border-line bg-surface/40 transition-all duration-300 hover:-translate-y-1 hover:border-muted/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
                  <WorkThumb kind={project.kind} accent={project.accent} />
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-1.5 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ background: project.accent }}
                    aria-hidden="true"
                  />
                </div>
                <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-muted">
                  {project.sector}
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  {project.focus}
                </p>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            These are demonstration builds rather than client projects, so
            there are no invented results attached to them. Real case studies,
            with real numbers, replace them as the work lands.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
