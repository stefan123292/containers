'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import { getConsentStatus, setConsentStatus, type ConsentStatus } from '@/lib/consent';
import { trackEvent } from '@/lib/analytics';

export function CookieBanner() {
  const { t, locale } = useTranslations();
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = getConsentStatus();
    if (consent === 'pending') {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
        // Trigger animation after state update
        setTimeout(() => setIsVisible(true), 10);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setConsentStatus('accepted');
    setShowBanner(false);
    // Track consent acceptance (only if analytics was already loaded, which it shouldn't be)
    // But we'll track it anyway for future reference
    if (typeof window !== 'undefined' && window.gtag) {
      trackEvent('cookie_consent_boxpert', {
        event_category: 'consent',
        event_label: 'accepted',
      });
    }
    // Reload page to initialize analytics with consent
    window.location.reload();
  };

  const handleReject = () => {
    setConsentStatus('rejected');
    setShowBanner(false);
    // Track consent rejection (if analytics was loaded)
    if (typeof window !== 'undefined' && window.gtag) {
      trackEvent('cookie_consent_boxpert', {
        event_category: 'consent',
        event_label: 'rejected',
      });
    }
  };

  const handleClose = () => {
    // Just close the banner without setting consent
    // User can still interact with the site, but analytics won't track
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] bg-industrial-900 border-t border-industrial-700 shadow-2xl transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          {/* Cookie Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-display font-bold text-white mb-2">
              {t('cookies.title')}
            </h3>
            <p className="text-sm md:text-base text-industrial-300 leading-relaxed mb-4">
              {t('cookies.description')}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleReject}
              className="px-6 py-2.5 bg-industrial-800 hover:bg-industrial-700 text-industrial-200 rounded-lg font-semibold transition-colors border border-industrial-700"
            >
              {t('cookies.reject')}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
            >
              {t('cookies.accept')}
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-industrial-400 hover:text-white transition-colors p-1"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
