import { ContactForm } from "@/components/home/ContactForm";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white/40 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-xl">
        <SectionHeading
          headingId="contact-heading"
          eyebrow="Start Your Launch"
          title="Tell us about your goals."
          description="Share a few details and a strategist will follow up within one business day."
        />

        <FadeInSection className="mt-12">
          <ContactForm />
        </FadeInSection>
      </div>
    </section>
  );
}
