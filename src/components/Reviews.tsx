"use client";

import { useState } from "react";
import { REVIEWS_ARE_SAMPLE, reviewSummary, reviews } from "@/lib/site";
import Reveal from "./Reveal";

const INITIAL = 6;

function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.4l1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
    </svg>
  );
}

/** Renders a fractional rating precisely, by clipping a filled row over an empty one. */
function Stars({ value, size = 16 }: { value: number; size?: number }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  return (
    <span
      className="relative inline-flex"
      style={{ gap: size * 0.12 }}
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className="text-line"
          {...{ style: { width: size, height: size } }}
        />
      ))}
      <span
        className="absolute inset-0 inline-flex overflow-hidden"
        style={{ width: `${pct}%`, gap: size * 0.12 }}
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className="shrink-0 text-accent"
            {...{ style: { width: size, height: size } }}
          />
        ))}
      </span>
    </span>
  );
}

export default function Reviews() {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? reviews : reviews.slice(0, INITIAL);
  const { average, count } = reviewSummary;

  return (
    <section
      id="reviews"
      className="border-y border-line bg-surface/35 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Reviews
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                What the people who paid for it say.
              </h2>
            </div>

            {/* Aggregate */}
            <div className="flex shrink-0 items-center gap-5 rounded-xl border border-line bg-ink px-6 py-5">
              <div>
                <div className="font-mono text-4xl font-semibold leading-none tracking-tight text-bone">
                  {average.toFixed(1)}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  out of 5
                </div>
              </div>
              <div className="h-12 w-px bg-line" />
              <div>
                <Stars value={average} size={17} />
                <div className="mt-2 text-sm text-muted">
                  Based on{" "}
                  <span className="font-semibold text-bone">{count}</span>{" "}
                  {count === 1 ? "review" : "reviews"}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {REVIEWS_ARE_SAMPLE ? (
          <Reveal>
            <div className="mb-8 flex gap-3 rounded-lg border border-accent/40 bg-accent/[0.07] p-4">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                className="mt-0.5 shrink-0 text-accent"
                aria-hidden="true"
              >
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
                <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
              </svg>
              <p className="text-sm leading-relaxed text-bone">
                <span className="font-semibold">
                  Sample reviews, for layout only.
                </span>{" "}
                <span className="text-muted">
                  These are not real customers. Replace them with genuine
                  reviews and set{" "}
                  <code className="text-muted">REVIEWS_ARE_SAMPLE</code> to{" "}
                  <code className="text-muted">false</code> in{" "}
                  <code className="text-muted">src/lib/site.ts</code> before
                  this site goes live. Publishing invented reviews is illegal
                  in the UK.
                </span>
              </p>
            </div>
          </Reveal>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-xl border border-line bg-ink p-6"
            >
              <Stars value={r.rating} size={14} />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-bone">
                {r.body}
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <div className="text-sm font-semibold text-bone">{r.name}</div>
                <div className="font-mono text-[11px] text-muted">
                  {r.business}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {reviews.length > INITIAL ? (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-bone transition-colors hover:border-muted hover:bg-surface"
            >
              {expanded
                ? "Show fewer"
                : `Read all ${reviews.length} reviews`}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
