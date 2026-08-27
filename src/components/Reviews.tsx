import { getReviewFeed, isSample } from "@/lib/googleReviews";
import Reveal from "./Reveal";
import ReviewGrid from "./ReviewGrid";
import Stars from "./Stars";

export default async function Reviews() {
  const feed = await getReviewFeed();
  const showSampleWarning = isSample(feed);
  const isLive = feed.source === "google";

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

            <div className="flex shrink-0 items-center gap-5 rounded-xl border border-line bg-ink px-6 py-5">
              <div>
                <div className="font-mono text-4xl font-semibold leading-none tracking-tight text-bone">
                  {feed.average.toFixed(1)}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  out of 5
                </div>
              </div>
              <div className="h-12 w-px bg-line" />
              <div>
                <Stars value={feed.average} size={17} />
                <div className="mt-2 text-sm text-muted">
                  Based on{" "}
                  <span className="font-semibold text-bone">{feed.count}</span>{" "}
                  {feed.count === 1 ? "review" : "reviews"}
                </div>
                {isLive ? (
                  <a
                    href={feed.profileUri}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-1 inline-block font-mono text-[10px] text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent"
                  >
                    Live from Google
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>

        {showSampleWarning ? (
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
                  These are not real customers. Connect a Google Business
                  Profile by setting{" "}
                  <code className="text-muted">GOOGLE_PLACES_API_KEY</code> and{" "}
                  <code className="text-muted">GOOGLE_PLACE_ID</code>, or
                  replace the array in{" "}
                  <code className="text-muted">src/lib/site.ts</code> and set{" "}
                  <code className="text-muted">REVIEWS_ARE_SAMPLE</code> to{" "}
                  <code className="text-muted">false</code>. Publishing
                  invented reviews is illegal in the UK.
                </span>
              </p>
            </div>
          </Reveal>
        ) : null}

        <ReviewGrid reviews={feed.reviews} />

        {isLive ? (
          <p className="mt-8 text-center font-mono text-[11px] text-muted">
            Reviews from Google. Google shows a selection of written reviews;
            the rating and total are for all {feed.count} ratings on the
            listing.
          </p>
        ) : null}
      </div>
    </section>
  );
}
