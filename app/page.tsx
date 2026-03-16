import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { FeaturedDealsSection } from "@/components/home/FeaturedDealsSection";
import { LodgesSection } from "@/components/home/LodgesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <TrustedBySection />
      <FeaturedDealsSection />
      <LodgesSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
