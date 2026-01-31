import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { StructuredData } from "@/components/seo/StructuredData";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { type Locale, defaultLocale } from "@/lib/translations";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const locale = params?.locale || defaultLocale;
  return generateSEOMetadata(locale, 'home');
}

export default function Home({ params }: { params: { locale: Locale } }) {
  const locale = params?.locale || defaultLocale;
  return (
    <>
      <StructuredData locale={locale} type="Product" />
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
