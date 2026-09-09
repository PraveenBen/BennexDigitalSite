import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#EA580C",
          borderRadius: "8px",
          color: "#FFFBEB",
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        B
      </div>
    ),
    size,
  );
}
