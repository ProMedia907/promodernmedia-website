import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** Required for output: export -- emit this at build time. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
