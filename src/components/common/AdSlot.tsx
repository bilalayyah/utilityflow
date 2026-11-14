import { useEffect } from 'react';
import { AD_SLOT_IDS, ADSENSE_CLIENT_ID, isRealSlotId, type AdSlotId } from '../../config/ads';

interface AdSlotProps {
  slotId: AdSlotId;
  format?: 'horizontal' | 'rectangle';
  className?: string;
}

/**
 * Real AdSense ad unit (Audit Fix #4).
 *
 * Renders a genuine `<ins class="adsbygoogle">` unit and pushes it to the
 * AdSense queue on mount — but ONLY when the slot has a real numeric slot
 * ID in src/config/ads.ts. While the ID is still the "0000000000"
 * placeholder (Bbl fills in the real IDs from the AdSense dashboard once
 * the account is approved and the units exist), the component renders
 * NOTHING, so no broken or empty ad box appears on the page.
 *
 * The AdSense script itself (client ca-pub-5754238751997058) is loaded in
 * index.html <head>. The `(adsbygoogle = window.adsbygoogle || []).push({})`
 * pattern is the standard one: if the script has not finished loading yet,
 * the push is queued and processed when it arrives.
 */
export function AdSlot({ slotId, format = 'horizontal', className = '' }: AdSlotProps) {
  const adSlotId = AD_SLOT_IDS[slotId];

  useEffect(() => {
    if (!isRealSlotId(adSlotId)) return;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      (w.adsbygoogle = w.adsbygoogle || []).push({});
    } catch {
      // AdSense not available (blocked, offline, etc.) — leave the unit empty.
    }
  }, [adSlotId]);

  if (!isRealSlotId(adSlotId)) {
    return null;
  }

  return (
    <aside
      aria-label="Sponsored placement"
      data-ad-slot={slotId}
      data-ad-format={format}
      data-ad-status="ready"
      className={`my-8 w-full ${className}`}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={adSlotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
