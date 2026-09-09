import type { Metadata } from "next";

import { BottomCtaBanner } from "@/components/home/BottomCtaBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { StatsSection } from "@/components/home/StatsSection";
import { PageHeader } from "@/components/shared/PageHeader";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bennex Digital is a product strategy, technology consulting, and growth partner for founders who need strategy and engineering under one roof.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="One partner, from decision to launch."
        description={`${SITE_NAME} exists because strategy, engineering, and growth fail when they are bought separately.`}
      />

      <section aria-label="About Bennex Digital" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-lede text-roasted-earth/80">
          <p>
            Most teams don&apos;t struggle because they lack ideas. They struggle because product
            decisions, engineering delivery, and go-to-market sit with three different vendors who
            never share a roadmap, and nobody owns the result.
          </p>
          <p>
            We work as a single accountable team across all three. That means the person shaping
            your product strategy is in the same room as the engineer sizing the cloud bill and
            the strategist planning how it reaches an audience.
          </p>
          <p>
            The result is fewer handoffs, faster decisions, and work that reaches customers instead
            of stalling between disciplines.
          </p>
        </div>
      </section>

      <StatsSection />
      <FaqSection />
      <BottomCtaBanner />
    </>
  );
}
