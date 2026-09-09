import type { Metadata } from "next";

import { BottomCtaBanner } from "@/components/home/BottomCtaBanner";
import { InsightCard } from "@/components/home/InsightCard";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { PageHeader } from "@/components/shared/PageHeader";
import { INSIGHT_ARTICLES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thinking, cases and stories on product strategy, engineering, growth, and founder branding from the Bennex Digital team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Thinking, cases and stories."
        description="Notes on how we scope products, scale systems, and build audiences."
      />

      <section aria-label="All insights" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2">
          {INSIGHT_ARTICLES.map((insightArticle, insightArticleIndex) => (
            <FadeInSection key={insightArticle.title} delayInSeconds={insightArticleIndex * 0.1}>
              <InsightCard insightArticle={insightArticle} />
            </FadeInSection>
          ))}
        </div>
      </section>

      <BottomCtaBanner />
    </>
  );
}
