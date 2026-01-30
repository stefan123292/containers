'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';
import { isAnalyticsAllowed } from '@/lib/consent';

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check consent status on mount and when consent changes
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

  if (!gaId) {
    // Don't render anything if GA ID is not configured
    return null;
  }

  // Only load Google Analytics if user has given consent
  if (!hasConsent) {
    return null;
  }

  return <NextGoogleAnalytics gaId={gaId} />;
}
