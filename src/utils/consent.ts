// Shared consent helpers for the GA4 consent-mode banner.
//
// Storage key is exactly 'uf-consent'; values are 'granted' | 'denied'.
// The inline gtag stub in index.html defines window.dataLayer + a
// window.gtag queue function, so gtag calls made before gtag.js loads
// are queued and fire once it arrives. Everything here is best-effort
// and guarded so consent handling can never break the page.

export const CONSENT_STORAGE_KEY = 'uf-consent';

/** Custom window event the footer dispatches to re-open the banner. */
export const CONSENT_OPEN_EVENT = 'uf:open-consent';

export type ConsentChoice = 'granted' | 'denied';

/** Reads the stored consent choice, or null if none / invalid / unreadable. */
export function readConsentChoice(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === 'granted' || value === 'denied') {
      return value;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Persists the choice and pushes a gtag consent update with all four
 * storage fields set to the same value ('granted' or 'denied').
 */
export function applyConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage may be unavailable (private mode, blocked); consent
    // update below still applies for this session.
  }
  try {
    const params = {
      ad_storage: choice,
      analytics_storage: choice,
      ad_user_data: choice,
      ad_personalization: choice,
    };
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === 'function') {
      gtag('consent', 'update', params);
      return;
    }
    const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
    if (Array.isArray(dataLayer)) {
      dataLayer.push(['consent', 'update', params]);
    }
  } catch {
    // Analytics must never break the page.
  }
}

/** Asks the consent banner to show itself (used by the footer link). */
export function requestConsentBanner(): void {
  try {
    window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
  } catch {
    // Non-fatal: the banner simply stays hidden.
  }
}
