import { HeroOrb } from "@/components/home/HeroOrb";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { CAPABILITIES_ROUTE, CONTACT_ROUTE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 pt-16 pb-24 lg:flex-row lg:justify-between lg:pt-20 lg:pb-32 lg:px-8"
    >
      {/* Rendered without an entrance animation on purpose: this is the LCP-critical block, and
          an opacity-from-0 reveal here would delay when the browser paints it. */}
      <div className="lg:w-1/2">
        <span className="inline-flex items-center gap-2 rounded-full border border-radiant-amber/30 bg-surface/50 px-4 py-2 text-sm font-medium text-roasted-earth/80 shadow-sm">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-radiant-amber motion-safe:animate-pulse" />
          Strategy, technology and growth in one team
        </span>

        {/* Each line is a fixed, solid-colored block rather than one gradient spanning the
            wrapped text - bg-clip-text with a horizontal gradient stretches across the full
            multi-line bounding box, so each wrapped line would otherwise show a different,
            unpredictable slice of the gradient instead of a single consistent color. */}
        <h1 id="hero-heading" className="mt-6 text-hero text-roasted-earth">
          <span className="block">Turn Bold Ideas</span>
          <span className="block">
            Into <span className="text-solar-flare">Digital</span>
          </span>
          <span className="block text-solar-flare">Products That</span>
          <span className="block text-radiant-amber">Create Impact.</span>
        </h1>

        <p className="mt-6 max-w-lg text-lede text-roasted-earth/80">
          Bennex Digital partners with ambitious founders to shape tech strategy, build scalable
          cloud architecture, and drive measurable growth.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <PrimaryButton href={CONTACT_ROUTE}>Start a Conversation</PrimaryButton>
          <SecondaryButton href={CAPABILITIES_ROUTE}>Explore Our Expertise</SecondaryButton>
        </div>
      </div>

      <HeroOrb />
    </section>
  );
}
