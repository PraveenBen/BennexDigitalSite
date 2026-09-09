import type { Metadata } from "next";

import { CapabilityPillarSections } from "@/components/capabilities/CapabilityPillarSections";
import { findCapabilityCategoryBySlug } from "@/lib/findCapabilityCategoryBySlug";

const CAPABILITY_CATEGORY = findCapabilityCategoryBySlug("product-strategy");

export const metadata: Metadata = {
  title: CAPABILITY_CATEGORY.title,
  description: CAPABILITY_CATEGORY.description,
};

export default function ProductStrategyPage() {
  return <CapabilityPillarSections capabilityCategory={CAPABILITY_CATEGORY} />;
}
