/**
 * The "after": the same joinery business, rebuilt.
 * Fixed 1200x750 design size, scaled by the parent.
 */
export default function SiteMockModern() {
  return (
    <div
      className="absolute inset-0 select-none overflow-hidden"
      style={{
        width: 1200,
        height: 750,
        background: "#FBFAF7",
        color: "#14140F",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
      }}
      aria-hidden="true"
    >
      {/* Nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 44px",
          borderBottom: "1px solid #E7E4DC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: "#14140F",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: -0.3 }}>
            Northgate Joinery
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 14,
            color: "#55554C",
            alignItems: "center",
          }}
        >
          <span>Work</span>
          <span>Services</span>
          <span>About</span>
          <span>Reviews</span>
          <span
            style={{
              background: "#14140F",
              color: "#fff",
              padding: "9px 18px",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 13.5,
            }}
          >
            Get a quote
          </span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ display: "flex", gap: 40, padding: "44px 44px 0" }}>
        <div style={{ flex: 1, paddingTop: 8 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "#EFEDE5",
              borderRadius: 999,
              padding: "6px 13px",
              fontSize: 12.5,
              color: "#55554C",
              marginBottom: 22,
              fontWeight: 500,
            }}
          >
            <span style={{ color: "#E8A33D", fontSize: 13 }}>
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
            4.9 from 127 Leeds homeowners
          </div>

          <h1
            style={{
              fontSize: 56,
              lineHeight: 1.02,
              letterSpacing: -2.2,
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            Carpentry that
            <br />
            outlasts the house.
          </h1>

          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.55,
              color: "#55554C",
              maxWidth: 430,
              marginBottom: 26,
            }}
          >
            Fitted kitchens, wardrobes and staircases, built by hand in Leeds
            since 1987. Free survey, fixed quote, and a firm date you can hold
            us to.
          </p>

          <div style={{ display: "flex", gap: 12, marginBottom: 30 }}>
            <div
              style={{
                background: "#14140F",
                color: "#fff",
                padding: "14px 26px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Book a free survey
            </div>
            <div
              style={{
                border: "1px solid #D6D2C6",
                padding: "14px 24px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
                color: "#14140F",
              }}
            >
              0113 496 0117
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 26,
              fontSize: 12.5,
              color: "#6B6B60",
              borderTop: "1px solid #E7E4DC",
              paddingTop: 18,
            }}
          >
            {["Fully insured", "10-year guarantee", "No deposit taken"].map(
              (t) => (
                <span
                  key={t}
                  style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                  <span style={{ color: "#2E9E5B", fontWeight: 700 }}>
                    &#10003;
                  </span>
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        {/* Hero image panel */}
        <div style={{ width: 430, flexShrink: 0 }}>
          <div
            style={{
              height: 300,
              borderRadius: 14,
              overflow: "hidden",
              position: "relative",
              background:
                "linear-gradient(150deg, #6B4A2F 0%, #8A6440 42%, #A67C52 70%, #C49A6E 100%)",
            }}
          >
            {/* Wood grain suggestion */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "repeating-linear-gradient(96deg, rgba(0,0,0,0.10) 0 2px, rgba(255,255,255,0.045) 2px 9px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 18,
                bottom: 18,
                background: "rgba(255,255,255,0.94)",
                borderRadius: 10,
                padding: "11px 15px",
                maxWidth: 250,
              }}
            >
              <div style={{ fontSize: 12, color: "#6B6B60", marginBottom: 2 }}>
                Recent project
              </div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>
                Oak kitchen, Roundhay
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service strip */}
      <div
        style={{
          display: "flex",
          gap: 14,
          padding: "34px 44px 0",
        }}
      >
        {[
          ["Fitted kitchens", "From £4,200"],
          ["Wardrobes & storage", "From £1,850"],
          ["Staircases", "From £2,400"],
          ["Decking & outdoor", "From £38/sqm"],
        ].map(([title, price]) => (
          <div
            key={title}
            style={{
              flex: 1,
              border: "1px solid #E7E4DC",
              borderRadius: 12,
              padding: "16px 16px 18px",
              background: "#fff",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "#F2EFE6",
                marginBottom: 12,
              }}
            />
            <div style={{ fontSize: 14.5, fontWeight: 600, marginBottom: 3 }}>
              {title}
            </div>
            <div style={{ fontSize: 13, color: "#6B6B60" }}>{price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
