import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ali Mohamed — Senior Flutter Developer & Mobile Engineer";

/** Code-generated, text-only Open Graph image. No photos, no stock imagery. */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#101012",
        padding: "80px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "10px",
          backgroundColor: "#2dd4bf",
        }}
      />
      <div
        style={{
          fontSize: 26,
          color: "#2dd4bf",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        Senior Flutter Developer &amp; Mobile Engineer
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 96,
          fontWeight: 700,
          color: "#f5f5f4",
          letterSpacing: "-0.02em",
        }}
      >
        Ali Mohamed
      </div>
      <div style={{ marginTop: 40, fontSize: 28, color: "#a8a29e", display: "flex" }}>
        Cairo, Egypt · App Store &amp; Google Play · github.com/alzoldik
      </div>
    </div>,
    size,
  );
}
