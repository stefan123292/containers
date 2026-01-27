'use client';

import Link from 'next/link';
import { Home, Briefcase, Droplet, Package, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

const categoryKeys = ['living', 'office', 'sanitary', 'storage', 'custom'];
const categoryIcons = [Home, Briefcase, Droplet, Package, Sparkles];

export function CategoriesSection() {
  const { t, locale } = useTranslations();

  return (
    <section className="relative py-24 bg-gradient-to-b from-industrial-900 via-industrial-800 to-industrial-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-in">
            {t('categories.title')}
          </h2>
          <p className="text-lg md:text-xl text-industrial-300 leading-relaxed">
            {t('categories.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col items-center">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full max-w-6xl mb-4 lg:mb-6">
            {categoryKeys.slice(0, 3).map((key, index) => {
              const Icon = categoryIcons[categoryKeys.indexOf(key)];
              return (
                <Link
                  key={key}
                  href={`/${locale}/products?category=${key}`}
                  className="group relative overflow-hidden rounded-xl bg-industrial-800/80 backdrop-blur-sm border border-industrial-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Content */}
                  <div className="relative p-5 lg:p-6">
                    {/* Icon container */}
                    <div className="relative mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center group-hover:from-primary group-hover:to-primary-dark group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                      </div>
                      {/* Decorative dot */}
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors duration-500">
                      {t(`categories.items.${key}.name`)}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-industrial-400 leading-relaxed mb-4 text-sm lg:text-base group-hover:text-industrial-300 transition-colors duration-500 line-clamp-2">
                      {t(`categories.items.${key}.description`)}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors duration-500">
                      <span className="mr-2">{t('common.explore')}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full max-w-4xl">
            {categoryKeys.slice(3, 5).map((key, index) => {
              const Icon = categoryIcons[categoryKeys.indexOf(key)];
              return (
                <Link
                  key={key}
                  href={`/${locale}/products?category=${key}`}
                  className="group relative overflow-hidden rounded-xl bg-industrial-800/80 backdrop-blur-sm border border-industrial-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Content */}
                  <div className="relative p-5 lg:p-6">
                    {/* Icon container */}
                    <div className="relative mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center group-hover:from-primary group-hover:to-primary-dark group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                      </div>
                      {/* Decorative dot */}
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors duration-500">
                      {t(`categories.items.${key}.name`)}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-industrial-400 leading-relaxed mb-4 text-sm lg:text-base group-hover:text-industrial-300 transition-colors duration-500 line-clamp-2">
                      {t(`categories.items.${key}.description`)}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors duration-500">
                      <span className="mr-2">{t('common.explore')}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
