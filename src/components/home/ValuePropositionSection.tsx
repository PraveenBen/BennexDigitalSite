import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { VALUE_PILLARS } from "@/lib/constants";

export function ValuePropositionSection() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          headingId="approach-heading"
          eyebrow="Our Approach"
          title="The force behind better digital decisions."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PILLARS.map((valuePillar, valuePillarIndex) => (
            <FadeInSection key={valuePillar.title} delayInSeconds={valuePillarIndex * 0.08}>
              <article className="flex h-full flex-col gap-3 rounded-2xl border border-roasted-earth/10 bg-white/60 p-6">
                <span aria-hidden="true" className="text-sm font-semibold text-solar-flare">
                  {String(valuePillarIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-roasted-earth">{valuePillar.title}</h3>
                <p className="text-sm text-roasted-earth/70">{valuePillar.description}</p>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
