import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    // Kept as an empty string so your custom buildAssetPath() helper doesn't break
    NEXT_PUBLIC_BASE_PATH: "",
  },
  images: {
    // GitHub Pages has no image optimization server; unoptimized falls back to plain <img>.
    unoptimized: true,
  },
};

export default nextConfig;