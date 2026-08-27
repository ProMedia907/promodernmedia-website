"use client";

import Image from "next/image";
import { useState } from "react";
import type { Review } from "@/lib/site";
import Stars from "./Stars";

const INITIAL = 6;

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

function Avatar({ review }: { review: Review }) {
  if (review.photoUri) {
    return (
      <Image
        src={review.photoUri}
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-full object-cover"
        unoptimized
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-mono text-[11px] text-muted"
    >
      {initials(review.name)}
    </span>
  );
}

export default function ReviewGrid({ reviews }: { reviews: Review[] }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? reviews : reviews.slice(0, INITIAL);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((r) => (
          <figure
            key={`${r.name}-${r.body.slice(0, 24)}`}
            className="flex flex-col rounded-xl border border-line bg-ink p-6"
          >
            <Stars value={r.rating} size={14} />
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-bone">
              {r.body}
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <Avatar review={r} />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-bone">
                  {r.href ? (
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="transition-colors hover:text-accent"
                    >
                      {r.name}
                    </a>
                  ) : (
                    r.name
                  )}
                </span>
                <span className="block truncate font-mono text-[11px] text-muted">
                  {r.meta}
                </span>
              </span>
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
            {expanded ? "Show fewer" : `Read all ${reviews.length} reviews`}
          </button>
        </div>
      ) : null}
    </>
  );
}
