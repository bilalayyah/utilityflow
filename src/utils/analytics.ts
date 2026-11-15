// L-21: GA4 conversion events (tool_use, ai_tool_submit, contact_submit).
//
// Safe wrapper around window.gtag. The inline config stub in index.html
// defines gtag as a dataLayer queue, so calls made before gtag.js loads
// are queued and fire once it arrives (main.tsx loads it after first
// paint). Analytics is best-effort: every call is guarded so a missing
// or blocked gtag can never break a tool, a form, or the page.

export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  try {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === 'function') {
      gtag('event', eventName, params ?? {});
    }
  } catch {
    // Analytics must never break the page.
  }
}
