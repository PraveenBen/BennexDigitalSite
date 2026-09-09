import { InsightCard } from "@/components/home/InsightCard";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { INSIGHT_ARTICLES } from "@/lib/constants";

export function InsightsSection() {
  return (
    <section id="insights" aria-labelledby="insights-heading" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          headingId="insights-heading"
          eyebrow="Insights"
          title="Thinking, cases and stories."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {INSIGHT_ARTICLES.map((insightArticle, insightArticleIndex) => (
            <FadeInSection key={insightArticle.title} delayInSeconds={insightArticleIndex * 0.1}>
              <InsightCard insightArticle={insightArticle} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
