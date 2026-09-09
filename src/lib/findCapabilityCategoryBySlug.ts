import { CAPABILITY_CATEGORIES } from "@/lib/constants";
import type { CapabilityCategory } from "@/types";

export function findCapabilityCategoryBySlug(slug: string): CapabilityCategory {
  const capabilityCategory = CAPABILITY_CATEGORIES.find(
    (candidateCategory) => candidateCategory.slug === slug,
  );

  if (!capabilityCategory) {
    throw new Error(`No capability category is defined for slug "${slug}".`);
  }

  return capabilityCategory;
}
