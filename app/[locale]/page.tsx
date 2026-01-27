import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
