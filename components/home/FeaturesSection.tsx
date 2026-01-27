'use client';

import { Box, Zap, Shield, Wrench, Clock, DollarSign } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

const featureKeys = ['preview', 'customization', 'quality', 'customizable', 'delivery', 'pricing'];
const featureIcons = [Box, Zap, Shield, Wrench, Clock, DollarSign];

export function FeaturesSection() {
  const { t, locale } = useTranslations();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-industrial-900 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-lg text-industrial-600">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureKeys.map((key, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                key={key}
                className="group p-8 bg-industrial-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-industrial-100 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-industrial-900 mb-3">
                  {t(`features.items.${key}.title`)}
                </h3>
                <p className="text-industrial-600 leading-relaxed">
                  {t(`features.items.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={`/${locale}/configurator`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
          >
            {t('features.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}

