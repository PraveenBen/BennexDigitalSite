import { HeroOrb } from "@/components/home/HeroOrb";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SecondaryButton } from "@/components/shared/SecondaryButton";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 pt-16 pb-24 lg:flex-row lg:justify-between lg:pt-20 lg:pb-32 lg:px-8"
    >
      {/* Rendered without an entrance animation on purpose: this is the LCP-critical block, and
          an opacity-from-0 reveal here would delay when the browser paints it. */}
      <div className="lg:w-1/2">
        <span className="inline-flex items-center gap-2 rounded-full border border-radiant-amber/30 bg-white/50 px-4 py-2 text-sm font-medium text-roasted-earth/80 shadow-sm">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-radiant-amber motion-safe:animate-pulse" />
          Strategy, technology and growth in one team
        </span>

        <h1 id="hero-heading" className="mt-6 text-hero text-roasted-earth">
          We Turn Bold Ideas Into{" "}
          <span className="bg-gradient-to-r from-solar-flare to-radiant-amber bg-clip-text text-transparent">
            Digital Products That Create Impact.
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-lede text-roasted-earth/80">
          Bennex Digital partners with ambitious founders to shape tech strategy, build scalable
          cloud architecture, and drive measurable growth.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <PrimaryButton href="#contact">Start a Conversation</PrimaryButton>
          <SecondaryButton href="#capabilities">Explore Our Expertise</SecondaryButton>
        </div>
      </div>

      <HeroOrb />
    </section>
  );
}
