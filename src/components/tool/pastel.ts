/**
 * Pastel palette helper for the UtilityFlow redesign.
 *
 * Each palette is a set of literal Tailwind class strings (so Tailwind v4
 * picks them up at build time), including `dark:` variants with muted deep
 * versions so pastel surfaces never render as pure white-on-dark.
 *
 * Usage:
 * - Tool cards: `pastelForKey(tool.id)` (stable per tool on every page)
 * - Category cards: `pastelForKey('cat:' + category.id)`
 */
export interface PastelPalette {
  /** Pastel gradient card background. */
  card: string;
  /** Solid saturated round icon circle. */
  icon: string;
  /** Text color matching the saturated icon (e.g. "Use Tool" link). */
  link: string;
  /** Light tint for chips / badges. */
  soft: string;
}

export const PASTEL_PALETTES: PastelPalette[] = [
  {
    card: 'bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-950/60 dark:to-indigo-950/60',
    icon: 'bg-violet-500 text-white dark:bg-violet-500/20 dark:text-violet-300',
    link: 'text-violet-700 dark:text-violet-300',
    soft: 'bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-300',
  },
  {
    card: 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-950/60 dark:to-indigo-950/60',
    icon: 'bg-blue-500 text-white dark:bg-blue-500/20 dark:text-blue-300',
    link: 'text-blue-700 dark:text-blue-300',
    soft: 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300',
  },
  {
    card: 'bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-950/60 dark:to-cyan-950/60',
    icon: 'bg-teal-500 text-white dark:bg-teal-500/20 dark:text-teal-300',
    link: 'text-teal-700 dark:text-teal-300',
    soft: 'bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-300',
  },
  {
    card: 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-950/60 dark:to-amber-950/60',
    icon: 'bg-orange-500 text-white dark:bg-orange-500/20 dark:text-orange-300',
    link: 'text-orange-700 dark:text-orange-300',
    soft: 'bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-300',
  },
  {
    card: 'bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-950/60 dark:to-rose-950/60',
    icon: 'bg-pink-500 text-white dark:bg-pink-500/20 dark:text-pink-300',
    link: 'text-pink-700 dark:text-pink-300',
    soft: 'bg-pink-100 text-pink-800 dark:bg-pink-500/20 dark:text-pink-300',
  },
  {
    card: 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-950/60 dark:to-emerald-950/60',
    icon: 'bg-green-500 text-white dark:bg-green-500/20 dark:text-green-300',
    link: 'text-green-700 dark:text-green-300',
    soft: 'bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-300',
  },
  {
    card: 'bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-950/60 dark:to-orange-950/60',
    icon: 'bg-amber-500 text-white dark:bg-amber-500/20 dark:text-amber-300',
    link: 'text-amber-700 dark:text-amber-300',
    soft: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300',
  },
  {
    card: 'bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-950/60 dark:to-blue-950/60',
    icon: 'bg-sky-500 text-white dark:bg-sky-500/20 dark:text-sky-300',
    link: 'text-sky-700 dark:text-sky-300',
    soft: 'bg-sky-100 text-sky-800 dark:bg-sky-500/20 dark:text-sky-300',
  },
  {
    card: 'bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-950/60 dark:to-pink-950/60',
    icon: 'bg-rose-500 text-white dark:bg-rose-500/20 dark:text-rose-300',
    link: 'text-rose-700 dark:text-rose-300',
    soft: 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300',
  },
  {
    card: 'bg-gradient-to-br from-lime-100 to-lime-200 dark:from-lime-950/60 dark:to-green-950/60',
    icon: 'bg-lime-500 text-white dark:bg-lime-500/20 dark:text-lime-300',
    link: 'text-lime-700 dark:text-lime-300',
    soft: 'bg-lime-100 text-lime-800 dark:bg-lime-500/20 dark:text-lime-300',
  },
  {
    card: 'bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-950/60 dark:to-violet-950/60',
    icon: 'bg-indigo-500 text-white dark:bg-indigo-500/20 dark:text-indigo-300',
    link: 'text-indigo-700 dark:text-indigo-300',
    soft: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-300',
  },
  {
    card: 'bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-950/60 dark:to-sky-950/60',
    icon: 'bg-cyan-500 text-white dark:bg-cyan-500/20 dark:text-cyan-300',
    link: 'text-cyan-700 dark:text-cyan-300',
    soft: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-300',
  },
];

/** Deterministic hash of a key -> one of the 12 pastel palettes. */
export function pastelForKey(key: string): PastelPalette {
  let hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash = ((hash << 5) + hash + key.charCodeAt(i)) | 0;
  }
  return PASTEL_PALETTES[Math.abs(hash) % PASTEL_PALETTES.length];
}
