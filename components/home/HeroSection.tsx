'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import { trackCTAClick } from '@/lib/analytics';

export function HeroSection() {
  const { t, locale } = useTranslations();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Mobile - Vertical Image */}
        <Image
          src="/images/container-vertical.jpg"
          alt="Modular Container Background"
          fill
          priority
          className="object-cover object-center md:hidden"
          quality={90}
          sizes="100vw"
        />
        {/* Desktop - Horizontal Image */}
        <Image
          src="/images/container.jpg"
          alt="Modular Container Background"
          fill
          priority
          className="hidden md:block object-cover"
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-900/90 via-industrial-900/80 to-industrial-800/85" />
      </div>

      {/* Animated accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10 pt-8 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 animate-slide-up">
            {t('hero.title')}
            <span className="block text-primary mt-2">{t('hero.subtitle')}</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-industrial-300 mb-12 max-w-2xl mx-auto animate-slide-up delay-200">
            {t('hero.description')}
          </p>

                 {/* CTA Buttons */}
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
                   <Link
                     href={`/${locale}/configurator`}
                     onClick={() => trackCTAClick(t('hero.cta'), 'hero_section')}
                     className="group px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
                   >
                     {t('hero.cta')}
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </Link>
                 </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-industrial-700 animate-fade-in delay-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-display font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-industrial-400">{t('hero.projectsCompleted')}</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-industrial-400">{t('hero.satisfiedClients')}</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-industrial-400">{t('hero.yearsExperience')}</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-industrial-400">{t('hero.supportAvailable')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

