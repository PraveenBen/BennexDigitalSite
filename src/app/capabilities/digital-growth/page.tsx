import type { Metadata } from "next";

import { CapabilityPillarSections } from "@/components/capabilities/CapabilityPillarSections";
import { findCapabilityCategoryBySlug } from "@/lib/findCapabilityCategoryBySlug";

const CAPABILITY_CATEGORY = findCapabilityCategoryBySlug("digital-growth");

export const metadata: Metadata = {
  title: CAPABILITY_CATEGORY.title,
  description: CAPABILITY_CATEGORY.description,
};

export default function DigitalGrowthPage() {
  return <CapabilityPillarSections capabilityCategory={CAPABILITY_CATEGORY} />;
}
