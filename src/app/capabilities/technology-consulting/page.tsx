import type { Metadata } from "next";

import { CapabilityPillarSections } from "@/components/capabilities/CapabilityPillarSections";
import { findCapabilityCategoryBySlug } from "@/lib/findCapabilityCategoryBySlug";

const CAPABILITY_CATEGORY = findCapabilityCategoryBySlug("technology-consulting");

export const metadata: Metadata = {
  title: CAPABILITY_CATEGORY.title,
  description: CAPABILITY_CATEGORY.description,
};

export default function TechnologyConsultingPage() {
  return <CapabilityPillarSections capabilityCategory={CAPABILITY_CATEGORY} />;
}
