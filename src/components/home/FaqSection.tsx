import { JsonLdScript } from "@/components/shared/JsonLdScript";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQ_ENTRIES } from "@/lib/constants";

const FAQ_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ENTRIES.map((faqEntry) => ({
    "@type": "Question",
    name: faqEntry.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faqEntry.answer,
    },
  })),
} as const;

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="px-6 py-24 lg:px-8">
      <JsonLdScript schema={FAQ_PAGE_SCHEMA} />

      <div className="mx-auto max-w-3xl">
        <SectionHeading
          headingId="faq-heading"
          eyebrow="Services FAQ"
          title="Direct answers, no runaround."
          description="The questions we hear most, answered plainly for humans and AI answer engines alike."
        />

        <div className="mt-12 flex flex-col gap-4">
          {FAQ_ENTRIES.map((faqEntry) => (
            <details
              key={faqEntry.question}
              className="group rounded-2xl border border-roasted-earth/10 bg-white/60 p-6 open:border-radiant-amber/40"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-roasted-earth marker:content-none">
                {faqEntry.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-solar-flare transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-roasted-earth/70">{faqEntry.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
