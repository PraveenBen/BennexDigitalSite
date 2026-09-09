import type { Metadata } from "next";

import { BottomCtaBanner } from "@/components/home/BottomCtaBanner";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { StatsSection } from "@/components/home/StatsSection";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A decade of shipped products, cloud deployments, and growth programmes across industries. Detailed case studies available on request.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Products shipped, systems scaled."
        description="A track record built on production systems rather than pitch decks."
      />

      <StatsSection />

      <section aria-label="Case studies" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-roasted-earth/10 bg-white/60 p-10 text-center">
          <h2 className="text-xl font-semibold text-roasted-earth">
            Detailed case studies on request
          </h2>
          <p className="mt-3 text-roasted-earth/70">
            Much of our work sits behind client confidentiality agreements. Tell us the problem
            you&apos;re solving and we&apos;ll walk you through the most relevant engagements in
            detail.
          </p>
        </div>
      </section>

      <ClientMarquee />
      <BottomCtaBanner />
    </>
  );
}
