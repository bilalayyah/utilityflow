// AdSense ad-unit slot IDs (Audit Fix #4).
//
// One entry per descriptive placement used by <AdSlot />. The values below
// are PLACEHOLDERS ("0000000000") — AdSlot renders NOTHING while an entry
// is a placeholder, so the site shows no broken ad units. Bbl replaces
// each placeholder with the real numeric slot ID from the AdSense
// dashboard (AdSense > Ads > By ad unit > the unit's "Ad slot" number,
// 10 digits) once the account is approved and the units are created.
// Do NOT invent slot IDs: a wrong number serves no ads and can break the
// unit. See also the AdSense publisher ID (client) in index.html:
// ca-pub-5754238751997058.

export const ADSENSE_CLIENT_ID = 'ca-pub-5754238751997058';

/** Placeholder used until Bbl fills in the real AdSense slot ID. */
export const PLACEHOLDER_SLOT_ID = '0000000000';

export type AdSlotId =
  | 'home-mid'
  | 'directory-top'
  | 'category-mid'
  | 'tool-below-workspace'
  | 'tool-below-guide';

export const AD_SLOT_IDS: Record<AdSlotId, string> = {
  'home-mid': PLACEHOLDER_SLOT_ID,
  'directory-top': PLACEHOLDER_SLOT_ID,
  'category-mid': PLACEHOLDER_SLOT_ID,
  'tool-below-workspace': PLACEHOLDER_SLOT_ID,
  'tool-below-guide': PLACEHOLDER_SLOT_ID,
};

/**
 * A slot ID is usable only when it is a real 10-digit AdSense slot number.
 * The all-zeros placeholder (and anything non-numeric) is not valid, so
 * AdSlot renders nothing for it.
 */
export function isRealSlotId(slotId: string): boolean {
  return /^\d{10}$/.test(slotId) && slotId !== PLACEHOLDER_SLOT_ID;
}
