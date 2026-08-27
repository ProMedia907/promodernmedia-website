/**
 * The "before": a local joinery site that was last touched in 2009.
 * Rendered as live markup at a fixed 1200x750 design size, then scaled by
 * the parent. Every offence here is deliberate.
 */
export default function SiteMock2009() {
  return (
    <div
      className="absolute inset-0 select-none overflow-hidden"
      style={{
        width: 1200,
        height: 750,
        fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
        background:
          "repeating-linear-gradient(45deg, #cfc7a8 0 12px, #c4bb9a 12px 24px)",
        color: "#111",
      }}
      aria-hidden="true"
    >
      {/* Header banner */}
      <div
        style={{
          background:
            "linear-gradient(90deg, #ff0000, #ff8a00, #ffee00, #00c814, #0066ff, #8a00d4)",
          padding: "10px 0",
          borderBottom: "4px ridge #ffef00",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 46,
            fontWeight: 700,
            color: "#fff000",
            textShadow:
              "2px 2px 0 #000, 4px 4px 0 #7a0000, -1px -1px 0 #000",
            letterSpacing: 1,
          }}
        >
          ~*~ NORTHGATE JOINERY ~*~
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#fff",
            textShadow: "1px 1px 0 #000",
            fontStyle: "italic",
          }}
        >
          &quot;Quality Carpentry Since 1987&quot; -- Serving All of Leeds!!!
        </div>
      </div>

      {/* Marquee */}
      <div
        style={{
          background: "#000080",
          color: "#00ff00",
          fontSize: 15,
          padding: "5px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderBottom: "2px solid #000",
        }}
      >
        <div className="mock-marquee" style={{ display: "inline-block" }}>
          *** WELCOME TO OUR WEBSITE *** NOW TAKING BOOKINGS FOR SPRING 2009 ***
          PLEASE SIGN OUR GUESTBOOK *** WE ALSO DO DECKING ***
        </div>
      </div>

      {/* Nav bar */}
      <div
        style={{
          background: "#c0c0c0",
          borderTop: "2px solid #fff",
          borderBottom: "2px solid #808080",
          padding: "6px 10px",
          fontSize: 14,
          textAlign: "center",
        }}
      >
        {[
          "Home",
          "About Us",
          "Servcies",
          "Gallery",
          "Guestbook",
          "Links",
          "Contact Us",
        ].map((item, i) => (
          <span key={item}>
            <a
              href="#"
              style={{
                color: i === 2 ? "#551a8b" : "#0000ee",
                textDecoration: "underline",
              }}
            >
              {item}
            </a>
            {i < 6 ? <span style={{ color: "#333" }}> | </span> : null}
          </span>
        ))}
      </div>

      {/* Body */}
      <div style={{ display: "flex", padding: 14, gap: 14 }}>
        {/* Left column */}
        <div style={{ width: 250, flexShrink: 0 }}>
          <div
            style={{
              background: "#ffff99",
              border: "3px outset #cccc00",
              padding: 8,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "underline",
                marginBottom: 6,
                color: "#800000",
              }}
            >
              Our Servcies:
            </div>
            <ul
              style={{
                fontSize: 13,
                paddingLeft: 18,
                lineHeight: 1.5,
                listStyleType: "square",
              }}
            >
              <li>Kitchens Fitted</li>
              <li>Wardrobes</li>
              <li>Decking + Fencing</li>
              <li>Loft Convertions</li>
              <li>Doors Hung</li>
              <li>And Much More!!</li>
            </ul>
          </div>

          {/* Broken image */}
          <div
            style={{
              background: "#fff",
              border: "2px inset #999",
              padding: 6,
              marginBottom: 12,
              height: 96,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                border: "1px solid #999",
                background: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
                color: "#c00",
                flexShrink: 0,
              }}
            >
              &#10006;
            </div>
            <span style={{ fontSize: 12, color: "#444" }}>
              our_van_photo_FINAL2.jpg
            </span>
          </div>

          {/* Hit counter */}
          <div style={{ textAlign: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 12, marginBottom: 4 }}>You are visitor:</div>
            <div
              style={{
                display: "inline-flex",
                border: "2px inset #666",
                background: "#000",
              }}
            >
              {"0004271".split("").map((d, i) => (
                <span
                  key={i}
                  style={{
                    color: "#00ff00",
                    fontFamily: "monospace",
                    fontSize: 18,
                    padding: "1px 3px",
                    borderRight: "1px solid #333",
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Under construction */}
          <div
            style={{
              textAlign: "center",
              background: "#ffcc00",
              border: "2px dashed #000",
              padding: 6,
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            <span style={{ fontSize: 18 }}>&#9888;</span> PAGE UNDER
            CONSTRUCTION
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            flex: 1,
            background: "#ffffff",
            border: "3px inset #999",
            padding: 14,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 10 }}>
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#008000",
                textDecoration: "underline",
              }}
            >
              Welcome To Our Homepage!
            </span>
            <span
              className="mock-blink"
              style={{
                marginLeft: 8,
                background: "#ff0000",
                color: "#ffff00",
                fontSize: 13,
                padding: "1px 5px",
                fontWeight: 700,
              }}
            >
              NEW!
            </span>
          </div>

          <p style={{ fontSize: 13, lineHeight: 1.45, marginBottom: 8 }}>
            Hello and welcome to the website of Northgate Joinery. We are a
            family run buisness based in Leeds and we have been trading for over
            20 years now. We do all types of carpentry work for both domestic
            and comercial customers at very competative prices.
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.45, marginBottom: 8 }}>
            Please have a look around our site and if you would like a quote
            then please do not hesitate to give us a ring on the number below or
            fill in the form on our contact page and we will get back to you as
            soon as possible.
          </p>

          <div
            style={{
              background: "#ffffcc",
              border: "1px solid #999",
              padding: 8,
              margin: "10px 0",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            <b style={{ color: "#c00" }}>SPECIAL OFFER!!!</b> 10% off all
            decking booked before the end of March!!!
          </div>

          <div style={{ textAlign: "center", margin: "14px 0" }}>
            <div style={{ fontSize: 13, marginBottom: 5 }}>
              Call us today for a free quote:
            </div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: "#0000cc",
                textShadow: "1px 1px 0 #aaa",
              }}
            >
              0113 496 0117
            </div>
            <div style={{ fontSize: 11, color: "#666", marginTop: 3 }}>
              (Mon-Fri 8am-5pm, ask for Dave)
            </div>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 12,
              marginTop: 8,
            }}
          >
            <tbody>
              {[
                ["Kitchen Fitting", "From £450"],
                ["Decking (per sqm)", "From £38"],
                ["Fence Panels", "Please Ring"],
              ].map((row) => (
                <tr key={row[0]}>
                  <td style={{ border: "1px solid #999", padding: "4px 6px" }}>
                    {row[0]}
                  </td>
                  <td
                    style={{
                      border: "1px solid #999",
                      padding: "4px 6px",
                      textAlign: "right",
                    }}
                  >
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#c0c0c0",
          borderTop: "2px solid #808080",
          textAlign: "center",
          fontSize: 11,
          padding: "6px 0",
          color: "#333",
        }}
      >
        Copyright &copy; 2009 Northgate Joinery | Best viewed in Internet
        Explorer 6 at 800x600 |{" "}
        <a href="#" style={{ color: "#0000ee" }}>
          Sign our guestbook
        </a>{" "}
        | Last updated: 14/03/09
      </div>
    </div>
  );
}
