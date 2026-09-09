import type { Metadata } from "next";

import { BottomCtaBanner } from "@/components/home/BottomCtaBanner";
import { CapabilityCard } from "@/components/home/CapabilityCard";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { PageHeader } from "@/components/shared/PageHeader";
import { CAPABILITY_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Product strategy, technology consulting, digital growth, and founder branding, delivered by one team under a single connected roadmap.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Strategy, execution and growth under one roof."
        description="Four connected capabilities, one team accountable for the outcome."
      />

      <section aria-label="All capabilities" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {CAPABILITY_CATEGORIES.map((capabilityCategory, capabilityCategoryIndex) => (
            <FadeInSection
              key={capabilityCategory.slug}
              delayInSeconds={capabilityCategoryIndex * 0.1}
            >
              <CapabilityCard capabilityCategory={capabilityCategory} />
            </FadeInSection>
          ))}
        </div>
      </section>

      <BottomCtaBanner />
    </>
  );
}
