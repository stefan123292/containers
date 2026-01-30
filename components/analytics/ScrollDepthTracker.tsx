'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { trackScrollDepth } from '@/lib/analytics';
import { isAnalyticsAllowed } from '@/lib/consent';

/**
 * Component to track scroll depth in Google Analytics
 * Tracks when users scroll 25%, 50%, 75%, and 100% of the page
 */
export function ScrollDepthTracker() {
  const pathname = usePathname();
  const [hasConsent, setHasConsent] = useState(false);
  const [trackedDepths, setTrackedDepths] = useState<Set<number>>(new Set());

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
    // Reset tracked depths when pathname changes
    setTrackedDepths(new Set());
  }, [pathname]);

  useEffect(() => {
    // Only track if user has given consent
    if (!hasConsent) {
      return;
    }

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      // Track milestones: 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100];
      
      milestones.forEach((milestone) => {
        if (scrollPercentage >= milestone && !trackedDepths.has(milestone)) {
          trackScrollDepth(milestone, pathname);
          setTrackedDepths((prev) => new Set(prev).add(milestone));
        }
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [hasConsent, pathname, trackedDepths]);

  return null;
}
