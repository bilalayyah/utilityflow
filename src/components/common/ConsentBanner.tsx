import { useEffect, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';
import {
  applyConsent,
  CONSENT_OPEN_EVENT,
  readConsentChoice,
} from '../../utils/consent';

/**
 * GA4 consent-mode banner.
 *
 * - Renders null until mounted, so it NEVER appears in prerendered
 *   static HTML.
 * - After mount, shows only when no consent choice is stored yet.
 * - Listens for the 'uf:open-consent' window event (dispatched by the
 *   footer's "Cookie settings" link) and shows again even when a
 *   choice was already stored, so users can change their mind.
 * - Fixed bottom overlay: it never shifts page layout and stays
 *   compact so it does not cover the tool workspace on mobile.
 */
export function ConsentBanner() {
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (readConsentChoice() === null) {
      setVisible(true);
    }
    const onOpen = () => setVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
    };
  }, []);

  if (!mounted || !visible) {
    return null;
  }

  const choose = (choice: 'granted' | 'denied') => {
    applyConsent(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label={t.consent.cookieSettings}
      className="fixed inset-x-4 bottom-4 sm:bottom-6 z-50 mx-auto w-auto max-w-2xl rounded-2xl border border-indigo-200/80 bg-white/95 px-4 py-3.5 shadow-xl shadow-indigo-900/10 backdrop-blur sm:px-5 sm:py-4 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/40"
    >
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {t.consent.message}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => choose('granted')}
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          {t.consent.accept}
        </button>
        <button
          type="button"
          onClick={() => choose('denied')}
          className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-slate-600 dark:bg-slate-800 dark:text-indigo-300 dark:hover:bg-slate-700"
        >
          {t.consent.decline}
        </button>
      </div>
    </div>
  );
}
