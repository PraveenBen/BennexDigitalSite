import type { Metadata } from "next";

import { BottomCtaBanner } from "@/components/home/BottomCtaBanner";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { PageHeader } from "@/components/shared/PageHeader";
import { VALUE_PILLARS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Bennex Digital works: strategy before development, connected execution, multidisciplinary ownership, and business context paired with technical depth.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Approach"
        title="The force behind better digital decisions."
        description="Four principles that decide what we build, in what order, and how we measure whether it worked."
      />

      <section aria-label="Our principles" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          {VALUE_PILLARS.map((valuePillar, valuePillarIndex) => (
            <FadeInSection key={valuePillar.title} delayInSeconds={valuePillarIndex * 0.05}>
              <article className="rounded-2xl border border-roasted-earth/10 bg-white/60 p-8">
                <span aria-hidden="true" className="text-sm font-semibold text-solar-flare">
                  {String(valuePillarIndex + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-xl font-semibold text-roasted-earth">
                  {valuePillar.title}
                </h2>
                <p className="mt-3 text-roasted-earth/70">{valuePillar.description}</p>
              </article>
            </FadeInSection>
          ))}
        </div>
      </section>

      <BottomCtaBanner />
    </>
  );
}
