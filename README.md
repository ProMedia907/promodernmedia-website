# ProModernMedia

Marketing site for a UK local-business web design studio.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · GSAP 3

```bash
npm install
npm run dev
```

## Where things live

| What | Where |
|---|---|
| **All copy, pricing, reviews, FAQs** | `src/lib/site.ts` |
| Google reviews integration | `src/lib/googleReviews.ts` |
| Sections | `src/components/` |
| Design tokens (colours, fonts) | `src/app/globals.css` |

Almost every text change you will want to make is in `src/lib/site.ts`. You
should not need to touch a component to reword the site.

## Google Business Profile reviews

The reviews section pulls live from a Google Business Profile when configured,
and falls back to sample data with a visible warning when it is not.

```bash
cp .env.example .env.local
```

Then fill in:

- `GOOGLE_PLACES_API_KEY` — a Google Cloud API key with **Places API (New)**
  enabled, restricted to that API. Server-side only; do not prefix it
  `NEXT_PUBLIC_`.
- `GOOGLE_PLACE_ID` — from the
  [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id).

**What you get:** the real star rating and the real total rating count from
your listing, plus the written reviews Google returns (Google returns a
selection, not the full set). The headline figure is whatever Google reports,
so it is always truthful.

**Billing:** requesting the `reviews` field bills at Google's Place Details
Enterprise SKU. Responses are cached for 6 hours, so expect roughly 4 API
calls per day regardless of traffic.

**Failure behaviour:** a missing key, a bad key, or a Google outage logs a
warning server-side and falls back to sample reviews. The page never breaks
and never claims live data it does not have.

## Contact form

With no configuration the form composes a `mailto:` to the address in
`site.ts`, which works with no backend. Set `NEXT_PUBLIC_FORM_ENDPOINT` to a
form service (Formspree, Basin, or your own route handler) to post instead.

## Deploying

See [DEPLOY.md](DEPLOY.md) for Vercel setup and GoDaddy DNS, including the
environment variables the live site needs.

## Before this goes live

- [ ] **Replace the sample reviews.** Connect Google (above) or replace the
      `reviews` array and set `REVIEWS_ARE_SAMPLE = false`. Publishing
      invented reviews is a banned practice under the UK Digital Markets,
      Competition and Consumers Act 2024.
- [ ] **Replace the demonstration builds** in `work` with real case studies as
      clients land. They currently describe design intent, not results, which
      is accurate while there are no clients — do not add outcome claims you
      cannot evidence.
- [ ] **Check the statistics** in `stats` still match their linked sources.
- [ ] **Set the real domain.** Set `NEXT_PUBLIC_SITE_URL` in `.env.local`. It
      falls back to `https://promodernmedia.co.uk`, a placeholder that has
      never been verified as owned. Canonical URLs and the share card point
      there until you change it.

## Notes

- `NODE_ENV` must not be set to `production` in your shell when installing.
  It makes npm skip devDependencies, which silently removes Tailwind,
  TypeScript and ESLint. If a build mysteriously cannot find them, that is
  why: `NODE_ENV=development npm install --include=dev`.
- The before/after slider renders both sites as live markup at a fixed
  1200×750 design size, scaled to fit. It is not screenshots, so it stays
  sharp at any width.

```bash
npm run build
```
