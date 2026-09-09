import type { Metadata } from "next";

import { ContactSection } from "@/components/home/ContactSection";
import { PageHeader } from "@/components/shared/PageHeader";
import { BUSINESS_CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Bennex Digital about product strategy, technology consulting, growth, or founder branding.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your goals."
        description="Share a few details and a strategist will follow up within one business day."
      />

      <ContactSection />

      <section aria-label="Direct contact" className="px-6 pb-24 text-center lg:px-8">
        <p className="text-roasted-earth/70">
          Prefer email? Reach us directly at{" "}
          <a
            href={`mailto:${BUSINESS_CONTACT_EMAIL}`}
            className="font-medium text-solar-flare transition-colors duration-300 hover:text-clear-sky"
          >
            {BUSINESS_CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>
    </>
  );
}
