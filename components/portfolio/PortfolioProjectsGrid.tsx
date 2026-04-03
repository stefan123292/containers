'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import type { PortfolioProjectDefinition, PortfolioProjectKey } from '@/lib/portfolio-data';
import { PORTFOLIO_PROJECT_KEYS, PORTFOLIO_PROJECTS } from '@/lib/portfolio-data';
import { useTranslations } from '@/hooks/useTranslations';

export function PortfolioProjectsGrid() {
  const { t, locale } = useTranslations();
  const single = PORTFOLIO_PROJECT_KEYS.length === 1;
  return (
    <div
      className={clsx(
        'grid gap-8 mx-auto',
        single
          ? 'grid-cols-1 max-w-md'
          : 'max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      )}
    >
      {PORTFOLIO_PROJECT_KEYS.map((key) => {
        const def = PORTFOLIO_PROJECTS[key];
        return (
          <PortfolioProjectCard
            key={def.slug}
            locale={locale}
            projectKey={key}
            def={def}
            t={t}
          />
        );
      })}
    </div>
  );
}

function PortfolioProjectCard({
  locale,
  projectKey,
  def,
  t,
}: {
  locale: string;
  projectKey: PortfolioProjectKey;
  def: PortfolioProjectDefinition;
  t: (key: string) => string;
}) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const href = `/${locale}/portfolio/${def.slug}`;
  const base = `portfolio.projects.${projectKey}`;

  const n = def.images.length;
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + n) % n);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % n);
  };

  const features = [
    t(`${base}.feature1`),
    t(`${base}.feature2`),
    t(`${base}.feature3`),
    t(`${base}.feature4`),
    t(`${base}.feature5`),
  ];

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => router.push(href)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          router.push(href);
        }
      }}
      className="group bg-white border border-industrial-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="relative h-64 bg-industrial-900">
        <Image
          src={def.images[index]}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
          {def.images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-industrial-900 flex items-center justify-center shadow hover:bg-white"
          aria-label={t('portfolio.carousel.prev')}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-industrial-900 flex items-center justify-center shadow hover:bg-white"
          aria-label={t('portfolio.carousel.next')}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            {t(`${base}.tag`)}
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-industrial-900 mb-2 group-hover:text-primary transition-colors">
          {t(`${base}.title`)}
        </h3>

        <p className="text-industrial-600 mb-4">{t(`${base}.description`)}</p>

        <div className="grid grid-cols-2 gap-2">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-industrial-700"
            >
              <svg
                className="w-4 h-4 text-primary flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
