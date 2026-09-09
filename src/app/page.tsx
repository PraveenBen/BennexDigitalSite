import { BottomCtaBanner } from "@/components/home/BottomCtaBanner";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqSection } from "@/components/home/FaqSection";
import { HeroSection } from "@/components/home/HeroSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { ServicesOverviewSection } from "@/components/home/ServicesOverviewSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ValuePropositionSection } from "@/components/home/ValuePropositionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropositionSection />
      <ServicesOverviewSection />
      <StatsSection />
      <InsightsSection />
      <ClientMarquee />
      <BottomCtaBanner />
      <FaqSection />
      <ContactSection />
    </>
  );
}
