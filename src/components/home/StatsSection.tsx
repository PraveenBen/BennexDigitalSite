import { FadeInSection } from "@/components/shared/FadeInSection";
import { STAT_ENTRIES } from "@/lib/constants";

export function StatsSection() {
  return (
    <section id="proof" aria-label="Experience and proof" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection>
          <dl className="grid grid-cols-2 gap-8 rounded-2xl border border-roasted-earth/10 bg-white/60 p-10 lg:grid-cols-4">
            {STAT_ENTRIES.map((statEntry) => (
              <div key={statEntry.label} className="text-center">
                <dt className="sr-only">{statEntry.label}</dt>
                <dd className="text-3xl font-bold text-solar-flare lg:text-4xl">{statEntry.value}</dd>
                <p className="mt-2 text-sm text-roasted-earth/70">{statEntry.label}</p>
              </div>
            ))}
          </dl>
        </FadeInSection>
      </div>
    </section>
  );
}
