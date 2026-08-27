/**
 * Pulls live reviews from a Google Business Profile via the Places API (New).
 *
 * Server-side only -- it reads a secret API key, so never import this from a
 * component marked "use client".
 *
 * Setup:
 *   1. Enable "Places API (New)" in a Google Cloud project with billing on.
 *   2. Create an API key, restricted to the Places API.
 *   3. Find your Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id
 *   4. Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in .env.local
 *
 * Without those two variables set, this returns null and the site falls back
 * to the sample reviews in site.ts. That is deliberate: the site must never
 * silently present sample data as though it were live.
 *
 * Billing note: requesting `reviews` puts the call in Google's Place Details
 * Enterprise SKU. Responses are cached for REVALIDATE_SECONDS to keep the
 * request count (and the bill) low.
 */

import { REVIEWS_ARE_SAMPLE, type Review, reviews as sampleReviews } from "./site";

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places/";

/** Six hours. Google's terms limit how long Places content may be cached. */
const REVALIDATE_SECONDS = 60 * 60 * 6;

export type ReviewFeed = {
  source: "google" | "sample";
  average: number;
  count: number;
  reviews: Review[];
  /** Link to the Google listing, shown as attribution for live reviews. */
  profileUri?: string;
};

/** Shape of the bits of the Places API response we actually use. */
type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
};

function clampRating(n: number | undefined): Review["rating"] {
  const r = Math.round(n ?? 5);
  if (r <= 1) return 1;
  if (r >= 5) return 5;
  return r as 2 | 3 | 4;
}

function toReview(r: PlacesReview): Review | null {
  const body = (r.text?.text ?? r.originalText?.text ?? "").trim();
  const name = r.authorAttribution?.displayName?.trim();
  // A rating with no written text has nothing to display.
  if (!body || !name) return null;
  return {
    name,
    meta: r.relativePublishTimeDescription ?? "Posted on Google",
    rating: clampRating(r.rating),
    body,
    photoUri: r.authorAttribution?.photoUri,
    href: r.googleMapsUri ?? r.authorAttribution?.uri,
  };
}

function sampleFeed(): ReviewFeed {
  const count = sampleReviews.length;
  const average =
    count === 0
      ? 0
      : Math.round(
          (sampleReviews.reduce((sum, r) => sum + r.rating, 0) / count) * 10
        ) / 10;
  return { source: "sample", average, count, reviews: sampleReviews };
}

/**
 * Returns live Google reviews when configured, otherwise the sample set.
 * Never throws -- a failed fetch degrades to samples rather than breaking
 * the page.
 */
export async function getReviewFeed(): Promise<ReviewFeed> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) return sampleFeed();

  try {
    const res = await fetch(
      `${PLACES_ENDPOINT}${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri",
        },
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );

    if (!res.ok) {
      console.error(
        `[googleReviews] Places API returned ${res.status}. Falling back to sample reviews.`
      );
      return sampleFeed();
    }

    const data = (await res.json()) as PlacesResponse;
    const mapped = (data.reviews ?? [])
      .map(toReview)
      .filter((r): r is Review => r !== null);

    // The aggregate is only trustworthy if Google actually gave us one.
    if (typeof data.rating !== "number" || mapped.length === 0) {
      console.error(
        "[googleReviews] Response had no usable rating or reviews. Falling back to sample reviews."
      );
      return sampleFeed();
    }

    return {
      source: "google",
      average: Math.round(data.rating * 10) / 10,
      // userRatingCount counts ratings without written text too, which is why
      // it is legitimately larger than the handful of reviews returned.
      count: data.userRatingCount ?? mapped.length,
      reviews: mapped,
      profileUri: data.googleMapsUri,
    };
  } catch (err) {
    console.error("[googleReviews] Fetch failed:", err);
    return sampleFeed();
  }
}

/** True when the section is showing placeholder content. */
export function isSample(feed: ReviewFeed): boolean {
  return feed.source === "sample" && REVIEWS_ARE_SAMPLE;
}
