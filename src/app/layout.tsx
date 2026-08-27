import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Display serif, used by the "after" site in the before/after comparison. */
const displaySerif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Web design for UK local business`,
    template: `%s — ${site.name}`,
  },
  description:
    "Websites for UK trades, clinics and independents that load fast, look expensive, and turn local searches into booked work. Fixed pricing from £750.",
  keywords: [
    "web design",
    "website design UK",
    "local business website",
    "small business web design",
    "website redesign",
  ],
  openGraph: {
    title: `${site.name} — Web design for UK local business`,
    description:
      "Your competitor isn't better. Their website just makes them look it. Fixed-price websites for UK local business.",
    type: "website",
    locale: "en_GB",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Web design for UK local business`,
    description:
      "Fixed-price websites for UK trades, clinics and independents.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
