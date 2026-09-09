import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FFFBEB",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: "#431407" }}>
          {SITE_NAME}
          <span style={{ color: "#EA580C" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 920,
            color: "#EA580C",
          }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    size,
  );
}
