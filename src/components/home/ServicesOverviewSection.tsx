import { CapabilityCard } from "@/components/home/CapabilityCard";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CAPABILITY_CATEGORIES } from "@/lib/constants";

export function ServicesOverviewSection() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className="bg-white/40 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          headingId="capabilities-heading"
          eyebrow="What We Do"
          title="Strategy, execution and growth under one roof."
          description="Four connected capabilities, one team accountable for the outcome."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {CAPABILITY_CATEGORIES.map((capabilityCategory, capabilityCategoryIndex) => (
            <FadeInSection
              key={capabilityCategory.anchorId}
              delayInSeconds={capabilityCategoryIndex * 0.1}
            >
              <CapabilityCard capabilityCategory={capabilityCategory} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
