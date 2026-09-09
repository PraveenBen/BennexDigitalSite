import { BottomCtaBanner } from "@/components/home/BottomCtaBanner";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { HeroSection } from "@/components/home/HeroSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { ServicesOverviewSection } from "@/components/home/ServicesOverviewSection";
import { StatsSection } from "@/components/home/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverviewSection />
      <StatsSection />
      <InsightsSection hasViewAllLink />
      <ClientMarquee />
      <BottomCtaBanner />
    </>
  );
}
