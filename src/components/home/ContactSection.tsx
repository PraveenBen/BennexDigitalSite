import { ContactForm } from "@/components/home/ContactForm";
import { FadeInSection } from "@/components/shared/FadeInSection";

export function ContactSection() {
  return (
    <section aria-label="Contact form" className="px-6 pb-16 lg:px-8">
      <div className="mx-auto max-w-xl">
        <FadeInSection>
          <ContactForm />
        </FadeInSection>
      </div>
    </section>
  );
}
