import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildCanonicalUrl } from '../../config/site';
import type { BreadcrumbItem } from '../../types/tool';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
      };
      if (item.href) {
        entry.item = buildCanonicalUrl(item.href);
      }
      return entry;
    }),
  };
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-[#6E6E73] dark:text-[#CBD5E1] ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-[#86868B] shrink-0 dark:text-[#CBD5E1]" aria-hidden="true" />
              )}
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:text-[#0B7A59] transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] rounded-sm dark:hover:text-[#34D399]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-[#1D1D1F] font-medium dark:text-[#F1F5F9]' : ''} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
