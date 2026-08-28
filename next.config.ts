import type { NextConfig } from "next";

/**
 * Two build modes.
 *
 *   npm run build         Normal build, for Vercel or any Node host. Google
 *                         reviews refresh on their own every 6 hours.
 *
 *   npm run build:static  Static export to ./out, for upload to GoDaddy
 *                         cPanel or any plain file host. There is no server,
 *                         so Google reviews are frozen at whatever they were
 *                         when you built. Rebuild and re-upload to refresh.
 *
 * Detected from the npm script name so it behaves the same on Windows and
 * macOS with no extra dependency. STATIC_EXPORT=true also forces it.
 */
const isStaticExport =
  process.env.npm_lifecycle_event === "build:static" ||
  process.env.STATIC_EXPORT === "true";

const staticExportConfig: NextConfig = {
  output: "export",

  // No server, so there is no image optimisation endpoint to call.
  images: { unoptimized: true },

  // Emits /privacy/index.html rather than /privacy.html, so Apache serves the
  // page without needing MultiViews or rewrite rules.
  trailingSlash: true,
};

const nextConfig: NextConfig = isStaticExport ? staticExportConfig : {};

export default nextConfig;
