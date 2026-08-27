/**
 * The "after": the same joinery business, rebuilt as a premium studio.
 * Fixed 1200x750 design size, scaled by the parent.
 *
 * Deliberately dark, serif-led and sparse -- the visual language of a
 * business that charges properly, against the 2009 site's jumble.
 */

const INK = "#0B0A08";
const CREAM = "#EFE9DE";
const MUTED = "#8C8578";
const BRASS = "#B99B5F";
const HAIRLINE = "rgba(239,233,222,0.13)";

const SERIF = 'var(--font-display), "Didot", "Bodoni MT", Georgia, serif';
const SANS =
  'var(--font-geist-sans), ui-sans-serif, system-ui, "Segoe UI", sans-serif';

/** Letter-spaced small caps, the workhorse of expensive-looking layouts. */
const microLabel: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: 9.5,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: MUTED,
};

export default function SiteMockModern() {
  return (
    <div
      className="absolute inset-0 select-none overflow-hidden"
      style={{
        width: 1200,
        height: 750,
        background: INK,
        color: CREAM,
        fontFamily: SANS,
      }}
      aria-hidden="true"
    >
      {/* Nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "26px 56px",
          borderBottom: `1px solid ${HAIRLINE}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span
            style={{
              fontFamily: SERIF,
              fontSize: 25,
              letterSpacing: "0.17em",
              fontWeight: 500,
            }}
          >
            NORTHGATE
          </span>
          <span style={{ ...microLabel, fontSize: 8.5 }}>Est. 1987</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 34 }}>
          {["Kitchens", "Staircases", "Commissions", "Studio"].map((item) => (
            <span key={item} style={{ ...microLabel, color: CREAM }}>
              {item}
            </span>
          ))}
          <span
            style={{
              ...microLabel,
              color: INK,
              background: BRASS,
              padding: "11px 20px",
              fontSize: 9,
            }}
          >
            Request a consultation
          </span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ display: "flex", height: 512 }}>
        {/* Left: type */}
        <div
          style={{
            width: 640,
            flexShrink: 0,
            padding: "62px 56px 0",
            borderRight: `1px solid ${HAIRLINE}`,
          }}
        >
          <div style={{ ...microLabel, marginBottom: 30 }}>
            Bespoke joinery <span style={{ color: BRASS }}>&middot;</span> Leeds
            &amp; North Yorkshire
          </div>

          <h1
            style={{
              fontFamily: SERIF,
              fontSize: 67,
              lineHeight: 1.02,
              letterSpacing: "-0.015em",
              fontWeight: 300,
              margin: 0,
              marginBottom: 26,
            }}
          >
            Kitchens made to
            <br />
            outlive the <em style={{ fontStyle: "italic", color: BRASS }}>
              house
            </em>
            .
          </h1>

          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.75,
              color: MUTED,
              maxWidth: 405,
              margin: 0,
              marginBottom: 38,
            }}
          >
            Hand-cut joinery in solid English oak, walnut and ash. Drawn with
            you, made in our Leeds workshop, fitted by the people who built it.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
            <span
              style={{
                ...microLabel,
                color: INK,
                background: CREAM,
                padding: "15px 28px",
                fontSize: 9,
              }}
            >
              Book a studio visit
            </span>
            <span
              style={{
                ...microLabel,
                color: CREAM,
                borderBottom: `1px solid ${BRASS}`,
                paddingBottom: 5,
                fontSize: 9,
              }}
            >
              View the portfolio
            </span>
          </div>
        </div>

        {/* Right: image */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(157deg, #2A1E14 0%, #4A3524 34%, #6B4C31 62%, #34251A 100%)",
            }}
          />
          {/* Grain */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "repeating-linear-gradient(93deg, rgba(0,0,0,0.16) 0 1px, rgba(255,255,255,0.028) 1px 7px)",
            }}
          />
          {/* Vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 62% 38%, transparent 24%, rgba(11,10,8,0.62) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: 40,
              bottom: 40,
              paddingLeft: 17,
              borderLeft: `1px solid ${BRASS}`,
            }}
          >
            <div style={{ ...microLabel, marginBottom: 7, fontSize: 8.5 }}>
              Commission no. 214
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: 21,
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              Burr oak island, Roundhay
            </div>
          </div>
        </div>
      </div>

      {/* Credentials band */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderTop: `1px solid ${HAIRLINE}`,
          // 147, not 148: the serif wordmark makes the nav 90.5px tall.
          height: 147,
        }}
      >
        {[
          ["38 yrs", "Family owned"],
          ["Guild", "Master Craftsmen"],
          ["10 yr", "Written guarantee"],
          ["Solid", "English hardwood"],
        ].map(([big, small], i) => (
          <div
            key={big}
            style={{
              flex: 1,
              padding: "0 46px",
              borderLeft: i === 0 ? "none" : `1px solid ${HAIRLINE}`,
            }}
          >
            <div
              style={{
                fontFamily: SERIF,
                fontSize: 31,
                fontWeight: 400,
                marginBottom: 9,
                color: BRASS,
              }}
            >
              {big}
            </div>
            <div style={microLabel}>{small}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
