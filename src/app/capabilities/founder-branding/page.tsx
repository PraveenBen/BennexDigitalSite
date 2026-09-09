import type { Metadata } from "next";

import { CapabilityPillarSections } from "@/components/capabilities/CapabilityPillarSections";
import { findCapabilityCategoryBySlug } from "@/lib/findCapabilityCategoryBySlug";

const CAPABILITY_CATEGORY = findCapabilityCategoryBySlug("founder-branding");

export const metadata: Metadata = {
  title: CAPABILITY_CATEGORY.title,
  description: CAPABILITY_CATEGORY.description,
};

export default function FounderBrandingPage() {
  return <CapabilityPillarSections capabilityCategory={CAPABILITY_CATEGORY} />;
}
