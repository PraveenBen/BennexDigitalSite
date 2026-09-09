import { BottomCtaBanner } from "@/components/home/BottomCtaBanner";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { PageHeader } from "@/components/shared/PageHeader";
import type { CapabilityCategory } from "@/types";

interface CapabilityPillarSectionsProps {
  capabilityCategory: CapabilityCategory;
}

export function CapabilityPillarSections({ capabilityCategory }: CapabilityPillarSectionsProps) {
  const { title, description, icon: Icon, services } = capabilityCategory;

  return (
    <>
      <PageHeader eyebrow="Capabilities" title={title} description={description} />

      <section aria-label={`${title} services`} className="px-6 pb-24 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          {services.map((subService, subServiceIndex) => (
            <FadeInSection key={subService.anchorId} delayInSeconds={subServiceIndex * 0.05}>
              <article
                id={subService.anchorId}
                className="scroll-mt-24 rounded-2xl border border-roasted-earth/10 bg-white/60 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-radiant-amber/10 text-solar-flare">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-roasted-earth">{subService.title}</h2>
                <p className="mt-3 text-roasted-earth/70">{subService.description}</p>
              </article>
            </FadeInSection>
          ))}
        </div>
      </section>

      <BottomCtaBanner />
    </>
  );
}
