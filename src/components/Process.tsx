import { processSteps } from "@/lib/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              How it works
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              From first call to live in under a week.
            </h2>
          </div>
        </Reveal>

        <Reveal stagger className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="bg-ink p-7 sm:p-8">
              <div className="mb-6 font-mono text-sm text-accent">
                {step.step}
              </div>
              <h3 className="mb-3 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
