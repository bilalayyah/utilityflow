/**
 * Palette helper for the UtilityFlow minimal redesign (2026-11-20).
 *
 * The old design used 12 colorful pastel gradients (one per tool/category).
 * The approved mockups use uniform white cards with a single green accent,
 * so every palette is now the same neutral scheme. The `PastelPalette`
 * interface and `pastelForKey()` signature are unchanged, so all call sites
 * (ToolCard, category cards, homepage sections) keep working with zero
 * edits — they just render the new theme.
 *
 * Each palette is a set of literal Tailwind class strings (so Tailwind v4
 * picks them up at build time), including `dark:` variants matching the
 * uf-10 dark mockup.
 */
export interface PastelPalette {
  /** White card background with a thin border. */
  card: string;
  /** Soft green tint behind the icon. */
  icon: string;
  /** Green text color (e.g. "Use Tool" link). */
  link: string;
  /** Light green tint for chips / badges. */
  soft: string;
}

const NEUTRAL_PALETTE: PastelPalette = {
  card: 'bg-white border border-[#E5E5EA] dark:bg-[#131D31] dark:border-[#243247]',
  icon: 'bg-[#E7F3EE] text-[#0E8A66] dark:bg-emerald-500/15 dark:text-emerald-300',
  link: 'text-[#0B7A59] dark:text-emerald-300',
  soft: 'bg-[#E7F3EE] text-[#0B7A59] dark:bg-emerald-500/15 dark:text-emerald-300',
};

export const PASTEL_PALETTES: PastelPalette[] = Array.from({ length: 12 }, () => NEUTRAL_PALETTE);

/** Deterministic hash of a key -> one of the palettes (all neutral now). */
export function pastelForKey(key: string): PastelPalette {
  let hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash = ((hash << 5) + hash + key.charCodeAt(i)) | 0;
  }
  return PASTEL_PALETTES[Math.abs(hash) % PASTEL_PALETTES.length];
}
