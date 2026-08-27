"use client";

import { useState } from "react";
import { site, tiers } from "@/lib/site";

/**
 * With no NEXT_PUBLIC_FORM_ENDPOINT set, this composes a mailto: so the form
 * is genuinely functional on day one with no backend. Set the env var to a
 * form service (Formspree, Basin, a route handler) to post properly instead.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const business = String(data.get("business") ?? "");
    const plan = String(data.get("plan") ?? "");
    const message = String(data.get("message") ?? "");

    if (!ENDPOINT) {
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business}`,
        `Interested in: ${plan}`,
        "",
        message,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Website enquiry from ${name || "a new client"}`
      )}&body=${encodeURIComponent(body)}`;
      setSent(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSent(true);
      form.reset();
    } catch {
      setError(
        `Something went wrong sending that. Email me directly at ${site.email}.`
      );
    } finally {
      setSending(false);
    }
  }

  const field =
    "w-full rounded-lg border border-line bg-ink px-4 py-3 text-[15px] text-bone placeholder:text-muted/60 outline-none transition-colors focus:border-accent";

  return (
    <section id="contact" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Start here
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Tell me what your website isn&rsquo;t doing.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Send a few lines about the business and I will come back with an
              honest read on whether a rebuild is worth it, and what it would
              cost. No obligation and no sales sequence.
            </p>

            <div className="mt-9 space-y-3 border-t border-line pt-8">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-[15px] text-bone transition-colors hover:text-accent"
              >
                <span className="w-12 shrink-0 font-mono text-xs text-muted">
                  Email
                </span>
                {site.email}
              </a>
              <div className="flex items-center gap-3 text-[15px] text-muted">
                <span className="w-12 shrink-0 font-mono text-xs text-muted">
                  Based
                </span>
                {site.location}
              </div>
              <div className="flex items-center gap-3 text-[15px] text-muted">
                <span className="w-12 shrink-0 font-mono text-xs text-muted">
                  Reply
                </span>
                Usually within one working day
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-surface/40 p-6 sm:p-8">
            {sent ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight">
                  {ENDPOINT ? "Message sent." : "Your email client is open."}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted">
                  {ENDPOINT
                    ? "I will come back to you within one working day."
                    : `Send the draft and I will reply within one working day. If nothing opened, email ${site.email} directly.`}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-muted"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className={field}
                      placeholder="Dave Whitaker"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-muted"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={field}
                      placeholder="dave@northgatejoinery.co.uk"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-muted"
                  >
                    Business and current website
                  </label>
                  <input
                    id="business"
                    name="business"
                    className={field}
                    placeholder="Northgate Joinery, northgatejoinery.co.uk"
                  />
                </div>

                <div>
                  <label
                    htmlFor="plan"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-muted"
                  >
                    Interested in
                  </label>
                  <select id="plan" name="plan" className={field} defaultValue="">
                    <option value="" disabled>
                      Pick the closest fit
                    </option>
                    {tiers.map((t) => (
                      <option key={t.id} value={`${t.name} (${t.price})`}>
                        {t.name} &mdash; {t.price} {t.cadence}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-muted"
                  >
                    What is going wrong?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`${field} resize-y`}
                    placeholder="We get plenty of calls but the website never brings any in. It was built about ten years ago and looks awful on a phone."
                  />
                </div>

                {error ? (
                  <p role="alert" className="text-sm text-accent">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-full bg-accent px-6 py-4 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send enquiry"}
                </button>
                <p className="text-center font-mono text-[10px] text-muted">
                  No newsletter, no CRM sequence. Just a reply.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
