# Deploying to Vercel with a GoDaddy domain

Written 28 August 2026. DNS values were checked against Vercel's docs on that
date — but **always copy the exact values Vercel shows you in the dashboard**
rather than the examples here. See the warning under step 4.

---

## Before you start

- [ ] The GitHub repo is pushed (it is: `ProMedia907/promodernmedia-website`)
- [ ] You have bought the domain at GoDaddy
- [ ] You have decided the exact domain — see "Pick the name first" below

## Pick the name first

Several near-identical names are in play, and the domain is the one that
matters most because it goes on business cards and invoices:

| Thing | Current value |
|---|---|
| Brand on the site | ProModernMedia |
| GitHub account | ProMedia907 |
| Other GitHub account | ProMordernMedia (misspelt) |
| Email | ProMedia04@outlook.com |
| Placeholder domain in code | promodernmedia.co.uk |

Pick one and be consistent. `.co.uk` reads as a UK local business, which suits
who you sell to; `.com` is worth owning too if it is cheap, pointed at the same
place.

---

## 1. Import the project into Vercel

1. Sign in at [vercel.com](https://vercel.com) **with GitHub**, using the
   account that owns the repo (`ProMedia907`).
2. **Add New → Project → Import** `promodernmedia-website`.
3. Vercel detects Next.js on its own. **Change nothing** — the defaults are
   correct:
   - Framework: Next.js
   - Build command: `next build`
   - Output directory: `.next`
   - Install command: `npm install`
4. Click **Deploy**.

The first build takes about two minutes. You will get a working URL like
`promodernmedia-website.vercel.app`. **Open it and check the site before you
touch DNS** — if something is wrong, fix it here rather than while the domain
is half-pointed.

> **Note:** this project builds fully static. If the build fails complaining
> about missing devDependencies, check you have not set `NODE_ENV=production`
> in Vercel's environment variables — that makes npm skip them. Vercel handles
> `NODE_ENV` itself; do not set it.

## 2. Set environment variables

In **Settings → Environment Variables**, add:

| Name | Value | Environments |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.co.uk` | Production |

No trailing slash. This drives canonical URLs, `sitemap.xml`, `robots.txt` and
the social share card. Until it is set, all of those point at the placeholder
`promodernmedia.co.uk`.

Optional, only when you have them:

| Name | Purpose |
|---|---|
| `GOOGLE_PLACES_API_KEY` | Live Google reviews |
| `GOOGLE_PLACE_ID` | Live Google reviews |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Posts the contact form instead of using mailto |

**Environment variables only apply to new builds.** After adding them, go to
**Deployments** and redeploy the latest one, or the site keeps the old values.

## 3. Add the domain in Vercel

**Settings → Domains → Add Domain.** Enter your apex domain
(`yourdomain.co.uk`, no `www`). Vercel will offer to add `www` as well —
accept, so both work and one redirects to the other.

Vercel then shows you the exact DNS records to create. **Leave this page open.**

## 4. Point GoDaddy at Vercel

> **Read the values off the Vercel page, not from this document.**
> The apex A record is usually `76.76.21.21`, but the `www` CNAME is now
> **unique per project** — something like `d1d4fc829fe7bc7c.vercel-dns-017.com`.
> The old universal `cname.vercel-dns.com` is outdated. If you type an example
> value from a blog post, `www` will not resolve.

In GoDaddy: **My Products → your domain → DNS → Manage DNS**.

You are **editing GoDaddy's existing parked records, not adding new ones.** A
fresh GoDaddy domain already has an `A` record on `@` pointing at a GoDaddy
parking page, and usually a `CNAME` on `www`. Two records on the same name
conflict, and the site will resolve intermittently — which looks like a
Vercel problem but is not.

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | the IP Vercel shows (typically `76.76.21.21`) | 600 seconds |
| CNAME | `www` | **the unique target Vercel shows you** | 600 seconds |

Then, in the same GoDaddy screens:

- [ ] **Delete any other `A` or `CNAME` record on `@` or `www`.** Only one of
      each should remain.
- [ ] **Turn off Domain Forwarding.** GoDaddy often enables it by default and
      it silently overrides your DNS. It is under the domain's settings, not
      the DNS records list.
- [ ] Leave `MX` records alone if you have email on this domain. Changing the
      `A` record does not affect email; deleting `MX` records does.

TTL of 600 seconds means mistakes are cheap to fix. Raise it to an hour once
everything works.

### Alternative: hand DNS to Vercel

Instead of records, you can change GoDaddy's nameservers to Vercel's. It is
tidier long-term, but it moves **all** DNS to Vercel, so any existing email or
subdomain records must be recreated there first. For a single site with no
custom email, the A/CNAME route above is simpler and safer.

## 5. Wait, then verify

GoDaddy usually propagates in minutes, occasionally up to an hour. Vercel's
Domains page flips to **Valid Configuration** on its own, and issues an SSL
certificate automatically — you do not buy one from GoDaddy.

Check all four:

- [ ] `https://yourdomain.co.uk` loads
- [ ] `https://www.yourdomain.co.uk` loads or redirects
- [ ] The padlock shows a valid certificate
- [ ] `https://yourdomain.co.uk/sitemap.xml` shows **your** domain, not
      `promodernmedia.co.uk`. If it still shows the placeholder,
      `NEXT_PUBLIC_SITE_URL` is unset or you have not redeployed since setting
      it.

## 6. Do not skip these before telling anyone the address

- [ ] **Replace the sample reviews.** `REVIEWS_ARE_SAMPLE` is `true` in
      `src/lib/site.ts`, so a banner reading "these are not real customers" is
      live on the page. Fake reviews are a banned practice under the UK
      Digital Markets, Competition and Consumers Act 2024.
- [ ] **Put your trading address in `/privacy`.** There is a visible orange
      placeholder. UK GDPR requires the controller's real identity.
- [ ] **Check the demo case studies.** They describe design intent, not client
      results, which is accurate while you have no clients. Do not add outcome
      claims you cannot evidence.

## 7. Worth doing soon after

- **Get an email on the domain.** `ProMedia04@outlook.com` on a web design
  business card undercuts the pitch. `hello@yourdomain.co.uk` costs a few
  pounds a month and takes ten minutes. Update `site.email` in
  `src/lib/site.ts` and the privacy page when you do.
- **Google Search Console.** Add the property and submit
  `https://yourdomain.co.uk/sitemap.xml`.
- **Google Business Profile.** Needed for the local SEO you sell, and it is
  where real reviews will come from for the reviews section.

---

## Deploying changes afterwards

Push to `main` and Vercel rebuilds automatically:

```bash
git add -A
git commit -m "Your message"
git push
```

Pull requests get their own preview URL, so you can look at a change before it
reaches the live site.
