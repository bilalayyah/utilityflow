import { useLocale } from '../../locales/LocaleContext';

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Extract H2/H3 headings from an article body HTML string.
 * Only headings carrying an `id` attribute are included — the anchor link
 * must point at a real in-page target. Batch 3 bodies carry ids on every
 * heading; bodies without ids simply yield no TOC entries.
 */
export function extractHeadingsFromBody(body: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const pattern = /<h([23])\b([^>]*)>([\s\S]*?)<\/h\1>/gi;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(body)) !== null) {
    const level = Number(match[1]) as 2 | 3;
    const attrs = match[2];
    const idMatch =
      /id="([^"]+)"/i.exec(attrs) ?? /id='([^']+)'/i.exec(attrs);
    if (!idMatch) continue;
    const text = match[3]
      .replace(/<[^>]*>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
    if (!text) continue;
    headings.push({ id: idMatch[1], text, level });
  }
  return headings;
}

interface ArticleTOCProps {
  headings: TocHeading[];
}

export function ArticleTOC({ headings }: ArticleTOCProps) {
  const { t } = useLocale();

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label={t.blog.tableOfContents}
      className="rounded-2xl border border-[#E5E5EA] bg-[#FFFFFF] p-5 shadow-sm dark:border-[#243247] dark:bg-[#131D31]"
    >
      <h2 className="text-base font-bold text-[#1D1D1F] dark:text-[#F1F5F9]">
        {t.blog.tableOfContents}
      </h2>
      <ul className="mt-3 space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? 'ps-4' : ''}>
            <a
              href={`#${heading.id}`}
              className="text-sm leading-snug text-[#6E6E73] transition-colors hover:text-[#0B7A59] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] rounded-sm dark:text-[#CBD5E1] dark:hover:text-[#34D399]"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
