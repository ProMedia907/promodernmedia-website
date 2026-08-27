import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { site } from "@/lib/site";

/**
 * UK GDPR privacy notice.
 *
 * Written to describe what this site ACTUALLY does, verified against the
 * code: no cookies, no analytics, no tracking, no local storage, and fonts
 * self-hosted by next/font so visitors make no requests to Google for them.
 * If you add analytics, a chat widget, or embeds, this page must be updated.
 *
 * NOT LEGAL ADVICE. Two things must be filled in before launch:
 *   1. The trading address below (UK GDPR requires the controller's identity).
 *   2. Whether you need to pay the ICO data protection fee.
 * Have a solicitor read it if you are unsure.
 */

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles the information you send through this website.`,
};

const UPDATED = "28 August 2026";

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl">
        {heading}
      </h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Privacy
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            What happens to your information.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            The short version: this website sets no cookies, runs no analytics,
            and tracks nobody. The only information it holds is what you
            deliberately type into the enquiry form and send.
          </p>
          <p className="mt-6 font-mono text-xs text-muted">
            Last updated {UPDATED}
          </p>

          <div className="mt-12">
            <Section heading="Who is responsible">
              <p>
                {site.name} is the data controller for information submitted
                through this site.
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-bone underline decoration-line underline-offset-4 hover:text-accent"
                >
                  {site.email}
                </a>
              </p>
              <p className="rounded-lg border border-accent/40 bg-accent/[0.07] p-4 text-bone">
                <strong>Before launch:</strong> replace this line with your
                trading address. UK GDPR requires the controller&rsquo;s
                identity and contact details to be stated.
              </p>
            </Section>

            <Section heading="What is collected">
              <p>
                Only what you enter in the enquiry form and choose to send:
                your name, email address, your business name and website, which
                option you are interested in, and whatever you write in the
                message.
              </p>
              <p>
                Nothing is collected passively. There is no analytics script,
                no advertising pixel, no session recording and no fingerprinting
                on this site.
              </p>
            </Section>

            <Section heading="How the form works">
              <p>
                By default the form does not send anything to a server. It
                opens a draft in your own email program with the details filled
                in, and nothing leaves your device until you press send. At
                that point it is an ordinary email between you and me.
              </p>
              <p>
                If a form service is configured in future, your submission is
                sent to that provider to be passed on by email. This page will
                be updated to name the provider before that happens.
              </p>
            </Section>

            <Section heading="Why, and on what basis">
              <p>
                To reply to your enquiry and, if you decide to go ahead, to
                carry out the work. The lawful basis is taking steps at your
                request before entering into a contract, and legitimate
                interests in responding to people who contact the business.
              </p>
              <p>
                Your details are not used for marketing. You will not be added
                to a mailing list or a CRM sequence, and your information is
                never sold or shared for advertising.
              </p>
            </Section>

            <Section heading="Cookies and tracking">
              <p>
                This site sets no cookies and stores nothing in your browser.
                There is no cookie banner because there is nothing to consent
                to.
              </p>
              <p>
                Typefaces are served from this website&rsquo;s own domain, so
                loading a page makes no request to Google Fonts or any other
                font service.
              </p>
            </Section>

            <Section heading="Other services involved">
              <p>
                Enquiry emails are received and stored in a Microsoft Outlook
                mailbox, so Microsoft processes them as the email provider.
              </p>
              <p>
                The website is served by a hosting provider which, like all web
                hosts, processes technical request data such as IP addresses in
                its server logs for security and reliability.
              </p>
              <p>
                If customer reviews from a Google Business Profile are shown on
                this site, reviewer profile pictures are loaded from
                Google&rsquo;s servers, which means Google can see that your
                browser requested them. Review text and ratings themselves are
                fetched by this website&rsquo;s server, not by your browser.
              </p>
            </Section>

            <Section heading="How long it is kept">
              <p>
                Enquiries that do not lead to work are deleted once the
                conversation has clearly ended. Where work goes ahead, records
                are kept for as long as needed to deliver and support it, and
                afterwards for the period required for tax and accounting
                purposes.
              </p>
            </Section>

            <Section heading="Your rights">
              <p>
                You can ask for a copy of the information held about you, ask
                for it to be corrected or deleted, object to it being used, or
                ask for it to be restricted. Email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-bone underline decoration-line underline-offset-4 hover:text-accent"
                >
                  {site.email}
                </a>{" "}
                and it will be actioned within one month.
              </p>
              <p>
                If you are unhappy with how your information has been handled
                you can complain to the Information Commissioner&rsquo;s
                Office at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone underline decoration-line underline-offset-4 hover:text-accent"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </Section>

            <Section heading="Changes">
              <p>
                If this site starts doing something new with your information,
                this page is updated first and the date at the top changes.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
