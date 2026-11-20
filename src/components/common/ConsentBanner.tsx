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
      className="fixed inset-x-4 bottom-4 sm:bottom-6 z-50 mx-auto w-auto max-w-2xl rounded-2xl border border-[#E5E5EA] bg-[#FFFFFF]/95 px-4 py-3.5 shadow-sm backdrop-blur sm:px-5 sm:py-4 dark:border-[#243247] dark:bg-[#131D31]/95"
    >
      <p className="text-sm leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">
        {t.consent.message}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => choose('granted')}
          className="rounded-full bg-[#0E8A66] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0B7557] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] focus-visible:ring-offset-2"
        >
          {t.consent.accept}
        </button>
        <button
          type="button"
          onClick={() => choose('denied')}
          className="rounded-full border border-[#D2D2D7] bg-[#FFFFFF] px-4 py-2 text-sm font-semibold text-[#0B7A59] transition-colors hover:bg-[#E7F3EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] focus-visible:ring-offset-2 dark:border-[#243247] dark:bg-[#131D31] dark:text-[#34D399] dark:hover:bg-[rgba(16,185,129,0.14)]"
        >
          {t.consent.decline}
        </button>
      </div>
    </div>
  );
}
