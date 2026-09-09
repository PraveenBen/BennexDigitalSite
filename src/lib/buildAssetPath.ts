/**
 * Prefixes a /public asset path with the deployment basePath. Needed because unoptimized
 * next/image renders a plain <img> whose src Next does not rewrite, so on GitHub Pages
 * (served under /BennexDigitalSite) a bare "/logos/x.svg" would 404.
 */
export function buildAssetPath(assetPath: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${assetPath}`;
}
