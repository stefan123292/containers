/**
 * Google Analytics utility functions
 * Following Next.js and Google Analytics 4 best practices
 */

import { isAnalyticsAllowed } from './consent';

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set' | 'js' | 'consent',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: Object[];
  }
}

/**
 * Track a page view
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  // Only track if user has given consent
  if (!isAnalyticsAllowed()) {
    return;
  }

  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
    page_path: url,
    page_title: title,
  });
}

/**
 * Track a custom event
 */
export function trackEvent(
  eventName: string,
  eventParams?: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  }
) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  // Only track if user has given consent
  if (!isAnalyticsAllowed()) {
    return;
  }

  window.gtag('event', eventName, eventParams);
}

/**
 * Track button clicks
 */
export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: buttonName,
    button_location: location,
  });
}

/**
 * Track form submissions
 */
export function trackFormSubmit(formName: string, formLocation?: string) {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: formName,
    form_location: formLocation,
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(percentage: number, pageName: string) {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: pageName,
    percent_scrolled: percentage,
  });
}

/**
 * Track external link clicks
 */
export function trackExternalLink(url: string, linkText?: string) {
  trackEvent('external_link_click', {
    event_category: 'outbound',
    event_label: linkText || url,
    link_url: url,
  });
}

/**
 * Track configurator interactions
 */
export function trackConfiguratorAction(
  action: string,
  details?: Record<string, any>
) {
  trackEvent('configurator_action', {
    event_category: 'configurator',
    event_label: action,
    ...details,
  });
}

/**
 * Track language changes
 */
export function trackLanguageChange(fromLang: string, toLang: string) {
  trackEvent('language_change', {
    event_category: 'user_preference',
    event_label: `${fromLang} -> ${toLang}`,
    from_language: fromLang,
    to_language: toLang,
  });
}

/**
 * Track CTA clicks
 */
export function trackCTAClick(ctaText: string, location: string) {
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: ctaText,
    cta_location: location,
  });
}
