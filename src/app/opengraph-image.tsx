import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * The card that renders when someone pastes a link to this site into
 * WhatsApp, Facebook, LinkedIn or iMessage. Generated at build time from the
 * same tokens as the site, so it never drifts from the design.
 */

export const alt = `${site.name} — web design for UK local business`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#08080B";
const BONE = "#F2F1EC";
const MUTED = "#8B8B99";
const ACCENT = "#FF4D1C";
const LINE = "#232331";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          color: BONE,
          padding: "64px 72px",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: ACCENT,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            P
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: -0.5 }}>
            {site.name}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 600,
              letterSpacing: -2.6,
              lineHeight: 1.03,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Your competitor isn&rsquo;t better.</span>
            <span style={{ color: MUTED }}>
              Their website just makes them look it.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
            fontSize: 22,
            color: MUTED,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ color: ACCENT }}>&#43;</span>
            <span>Web design for UK local business</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span>Fixed price from</span>
            <span style={{ color: BONE, fontWeight: 600 }}>&#163;750</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
