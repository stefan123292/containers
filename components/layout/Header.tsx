'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Logo } from '@/components/ui/Logo';
import { trackCTAClick } from '@/lib/analytics';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale } = useTranslations();

  const navigation = [
    { name: t('common.home'), href: '/' },
    { name: t('common.configurator'), href: '/configurator' },
    { name: t('common.products'), href: '/products' },
    { name: t('common.portfolio'), href: '/portfolio' },
    { name: t('common.about'), href: '/about' },
    { name: t('common.contact'), href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-industrial-900/95 backdrop-blur-sm border-b border-industrial-700">
      {/* Top bar - Desktop only */}
      <div className="hidden md:block bg-industrial-800 border-b border-industrial-700">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-end gap-6 text-sm text-industrial-300">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@containers.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@containers.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo showTagline={true} size="md" href="/" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${locale}${item.href}`}
                className="text-industrial-200 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={`/${locale}/configurator`}
              onClick={() => trackCTAClick(t('common.getStarted'), 'header_desktop')}
              className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              {t('common.getStarted')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile: Language Switcher + Menu button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-industrial-800 border-t border-industrial-700">
          <div className="container mx-auto px-4 py-4">
            {/* Top bar info in mobile menu */}
            <div className="border-b border-industrial-700 pb-4 mb-4">
              <div className="flex flex-col gap-3 text-sm text-industrial-300">
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a href="mailto:info@containers.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@containers.com</span>
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={`/${locale}${item.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-industrial-200 hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={`/${locale}/configurator`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackCTAClick(t('common.getStarted'), 'header_mobile');
                }}
                className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center"
              >
                {t('common.getStarted')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

