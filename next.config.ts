import type { NextConfig } from "next";

// GitHub Pages serves this project at github.io/BennexDigitalSite, not at the domain root, so
// every asset and internal link needs that prefix in any production build. Left empty in dev
// so `npm run dev` keeps working at the plain localhost root.
const GITHUB_PAGES_BASE_PATH = "/BennexDigitalSite";
const isProductionBuild = process.env.NODE_ENV === "production";

const basePath = isProductionBuild ? GITHUB_PAGES_BASE_PATH : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: {
    // Unoptimized <Image> renders a plain <img> whose src does NOT get basePath applied, so
    // /public asset paths must be prefixed by hand via buildAssetPath().
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // GitHub Pages has no image optimization server; unoptimized falls back to plain <img>.
    unoptimized: true,
  },
};

export default nextConfig;
