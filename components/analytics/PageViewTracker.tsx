'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';
import { isAnalyticsAllowed } from '@/lib/consent';

/**
 * Component to track page views in Google Analytics
 * Automatically tracks route changes in Next.js App Router
 * Respects user consent for analytics
 */
export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check consent status
    const checkConsent = () => {
      setHasConsent(isAnalyticsAllowed());
    };

    checkConsent();

    // Listen for consent updates
    const handleConsentUpdate = () => {
      checkConsent();
    };

    window.addEventListener('consent-updated', handleConsentUpdate);

    return () => {
      window.removeEventListener('consent-updated', handleConsentUpdate);
    };
  }, []);

  useEffect(() => {
    // Only track if user has given consent
    if (!hasConsent) {
      return;
    }

    // Build the full URL with search params
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // Small delay to ensure GA is loaded
    const timer = setTimeout(() => {
      trackPageView(url);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, hasConsent]);

  return null;
}
