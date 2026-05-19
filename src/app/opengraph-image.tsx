import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Carlos Irusta — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#13131a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Top accent border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "#8a88b8",
            opacity: 0.6,
          }}
        />

        {/* Top row: identity */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#878069",
            }}
          >
            CARLOS IRUSTA
          </span>
          <span style={{ color: "#252533", fontSize: "10px" }}>·</span>
          <span
            style={{
              fontSize: "13px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#5e5c54",
            }}
          >
            SOFTWARE DEVELOPER
          </span>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <p
            style={{
              fontSize: "56px",
              fontWeight: 400,
              color: "#ddd8bb",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            Building reliable software for real businesses.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#9a9780",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "600px",
            }}
          >
            Clean architecture. Production-ready systems. Real-world problem solving.
          </p>
        </div>

        {/* Bottom row: url + stack tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "#5e5c54",
              letterSpacing: "0.06em",
              fontFamily: "monospace",
            }}
          >
            carlos.dev
          </span>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Next.js", "TypeScript", "PostgreSQL", "Docker"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "12px",
                  color: "#5e5c54",
                  fontFamily: "monospace",
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
