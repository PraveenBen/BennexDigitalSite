import type { MetadataRoute } from "next";

import { CAPABILITY_CATEGORIES, SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  "/",
  "/capabilities",
  "/work",
  "/approach",
  "/insights",
  "/about",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const capabilityEntries = CAPABILITY_CATEGORIES.map((capabilityCategory) => ({
    url: `${SITE_URL}${capabilityCategory.route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...capabilityEntries];
}
