'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import { Logo } from '@/components/ui/Logo';
import { trackExternalLink, trackButtonClick } from '@/lib/analytics';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, locale } = useTranslations();

  return (
    <footer className="bg-industrial-900 text-industrial-300 border-t border-industrial-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo showTagline={true} size="md" href="/" />
            </div>
            <p className="text-sm mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackExternalLink('https://facebook.com', 'Facebook')}
                className="w-9 h-9 bg-industrial-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackExternalLink('https://twitter.com', 'Twitter')}
                className="w-9 h-9 bg-industrial-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackExternalLink('https://instagram.com', 'Instagram')}
                className="w-9 h-9 bg-industrial-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackExternalLink('https://linkedin.com', 'LinkedIn')}
                className="w-9 h-9 bg-industrial-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/products`} className="hover:text-primary transition-colors">{t('common.products')}</Link></li>
              <li><Link href={`/${locale}/configurator`} className="hover:text-primary transition-colors">{t('common.configurator')}</Link></li>
              <li><Link href={`/${locale}/portfolio`} className="hover:text-primary transition-colors">{t('common.portfolio')}</Link></li>
              <li><Link href={`/${locale}/about`} className="hover:text-primary transition-colors">{t('common.about')}</Link></li>
              <li><Link href={`/${locale}/faq`} className="hover:text-primary transition-colors">{t('footer.faq')}</Link></li>
              <li><Link href={`/${locale}/blog`} className="hover:text-primary transition-colors">{t('footer.blog')}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.ourProducts')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/products?category=living`} className="hover:text-primary transition-colors">{t('footer.livingContainers')}</Link></li>
              <li><Link href={`/${locale}/products?category=office`} className="hover:text-primary transition-colors">{t('footer.officeContainers')}</Link></li>
              <li><Link href={`/${locale}/products?category=sanitary`} className="hover:text-primary transition-colors">{t('footer.sanitaryUnits')}</Link></li>
              <li><Link href={`/${locale}/products?category=refrigerated`} className="hover:text-primary transition-colors">{t('footer.refrigerated')}</Link></li>
              <li><Link href={`/${locale}/products?category=storage`} className="hover:text-primary transition-colors">{t('footer.storage')}</Link></li>
              <li><Link href={`/${locale}/products?category=custom`} className="hover:text-primary transition-colors">{t('footer.customModules')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/Depozit24+-+Spatii+depozitare%2Fparcare+rulote/@44.5469393,26.1483676,19.13z/data=!4m6!3m5!1s0x40b21d00412b66f9:0xc6c5d1bd05b6a706!8m2!3d44.5468988!4d26.1486777!16s%2Fg%2F11w95sn3_9?entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackExternalLink('https://www.google.com/maps', 'Footer Location')}
                  className="hover:text-primary transition-colors"
                >
                  DJ100 3, 077180 Tunari
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+40774957340" 
                  onClick={() => trackButtonClick('Phone', 'footer')}
                  className="hover:text-primary transition-colors"
                >
                  +40774957340
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contact@boxpert.ro" 
                  onClick={() => trackButtonClick('Email', 'footer')}
                  className="hover:text-primary transition-colors"
                >
                  contact@boxpert.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-industrial-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {currentYear} BoXpert. {t('footer.allRightsReserved')}.</p>
            <div className="flex gap-6">
              <Link href={`/${locale}/privacy`} className="hover:text-primary transition-colors">{t('footer.privacyPolicy')}</Link>
              <Link href={`/${locale}/terms`} className="hover:text-primary transition-colors">{t('footer.termsOfService')}</Link>
              <Link href={`/${locale}/sitemap`} className="hover:text-primary transition-colors">{t('footer.sitemap')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
