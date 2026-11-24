export const SITE_CONFIG = {
  name: 'UtilityFlow',
  tagline: 'Fast, browser-first online utilities with zero sign-up.',
  description:
    'Free, fast, privacy-first online utility tools for text analysis, developer formatting, calculators, PDFs, SEO checks, and image workflows.',
  contactEmail: 'bilalayyah@gmail.com',
  defaultOrigin: 'https://utilityflow.online',
  // Browser-only tools (83). The site total is 83 tools, all browser-based.
  // HomePage renders this as the "Browser Utilities" metric, while "Live Tools"
  // shows allTools.length (83).
  plannedTotalTools: 83,
  totalBatches: 7,
} as const;

/**
 * Lifetime Premium pricing — the SINGLE source of truth for the premium
 * price. Never hard-code the price in components; read it from here.
 * Price set by the user Mon 2026-11-23: $11.99 one-time (clears Paddle's
 * $10 self-serve threshold). Provider: Paddle. No payment/checkout code
 * exists yet — Phase 4 builds checkout against this config.
 */
export const PREMIUM_CONFIG = {
  /** Numeric price in USD (one-time payment, lifetime access). */
  priceUsd: 11.99,
  /** Display price, e.g. "$11.99". */
  priceLabel: '$11.99',
  billing: 'one-time',
  label: 'ONE-TIME PAYMENT · LIFETIME ACCESS',
  provider: 'paddle',
} as const;

export const STATIC_ROUTES = [  { path: '/', label: 'Home', changefreq: 'weekly', priority: '1.0' },
  { path: '/tools/', label: 'All Tools', changefreq: 'weekly', priority: '0.9' },
  { path: '/about/', label: 'About', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact/', label: 'Contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy-policy/', label: 'Privacy Policy', changefreq: 'yearly', priority: '0.4' },
  { path: '/terms-of-service/', label: 'Terms of Service', changefreq: 'yearly', priority: '0.4' },
  { path: '/pricing/', label: 'Pricing', changefreq: 'yearly', priority: '0.4', enOnly: true },
  { path: '/refund-policy/', label: 'Refund Policy', changefreq: 'yearly', priority: '0.4', enOnly: true },
] as const;

export const NAV_LINKS = [
  { label: 'Tools', to: '/tools/' },
  { label: 'Categories', to: '/#categories' },
  { label: 'Blog', to: '/blog/' },
  { label: 'About', to: '/about/' },
  { label: 'Contact', to: '/contact/' },
] as const;

export function getCanonicalOrigin(): string {
  const envUrl =
    typeof import.meta !== 'undefined' &&
    import.meta.env &&
    typeof import.meta.env.VITE_SITE_URL === 'string' &&
    import.meta.env.VITE_SITE_URL.trim() !== ''
      ? import.meta.env.VITE_SITE_URL.trim().replace(/\/+$/, '')
      : '';

  return envUrl || SITE_CONFIG.defaultOrigin;
}

export function normalizeCanonicalPath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const cleaned = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
}

export function buildCanonicalUrl(pathname: string, origin?: string): string {
  const base = (origin || getCanonicalOrigin()).replace(/\/+$/, '');
  return `${base}${normalizeCanonicalPath(pathname)}`;
}
