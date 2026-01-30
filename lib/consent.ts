/**
 * Cookie consent management
 * Handles user consent for analytics and cookies
 */

export type ConsentStatus = 'pending' | 'accepted' | 'rejected';

const CONSENT_STORAGE_KEY = 'cookie_consent_boxpert';

const CONSENT_EXPIRY_DAYS = 365; // Consent expires after 1 year

export interface ConsentData {
  status: ConsentStatus;
  timestamp: number;
}

/**
 * Get current consent status
 */
export function getConsentStatus(): ConsentStatus {
  if (typeof window === 'undefined') {
    return 'pending';
  }

  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) {
      return 'pending';
    }

    const consent: ConsentData = JSON.parse(stored);
    
    // Check if consent has expired (older than CONSENT_EXPIRY_DAYS)
    const daysSinceConsent = (Date.now() - consent.timestamp) / (1000 * 60 * 60 * 24);
    if (daysSinceConsent > CONSENT_EXPIRY_DAYS) {
      // Consent expired, remove it
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return 'pending';
    }

    return consent.status;
  } catch (error) {
    console.error('Error reading consent status:', error);
    return 'pending';
  }
}

/**
 * Set consent status
 */
export function setConsentStatus(status: 'accepted' | 'rejected'): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const consent: ConsentData = {
      status,
      timestamp: Date.now(),
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('consent-updated', { detail: { status } }));
  } catch (error) {
    console.error('Error setting consent status:', error);
  }
}

/**
 * Check if analytics is allowed
 */
export function isAnalyticsAllowed(): boolean {
  return getConsentStatus() === 'accepted';
}

/**
 * Clear consent (for testing or user request)
 */
export function clearConsent(): void {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('consent-updated', { detail: { status: 'pending' } }));
}
