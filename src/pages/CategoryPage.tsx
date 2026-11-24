import { ArrowRight, ChevronRight } from 'lucide-react';
import { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { CategoryGuides } from '../components/blog/CategoryGuides';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { SeoHead } from '../components/seo/SeoHead';
import { PASTEL_PALETTES, pastelForKey } from '../components/tool/pastel';
import { buildCanonicalUrl } from '../config/site';
import { getOgImageForPage } from '../config/ogImages';
import { useLocale } from '../locales/LocaleContext';
import { categoryHref, localizeStaticPath, toolHref } from '../locales/config';
import { getCategoryAlternatePaths, toHreflangEntries } from '../locales/routes';
import { getCategoryByLocalizedSlug, getLocalizedCategories, getLocalizedCategory, getLocalizedTools } from '../locales/tools';
import { getAllTools } from '../registry/toolsRegistry';
import { formatString } from '../locales/ui';
import { buildToolNameEntries, linkifyToolNames } from '../utils/linkifyToolNames';
import type { BreadcrumbItem } from '../types/tool';
import { NotFoundPage } from './NotFoundPage';

export function CategoryPage() {
  const { locale, t } = useLocale();
  const { categorySlug = '' } = useParams<{ categorySlug: string }>();
  const category = getCategoryByLocalizedSlug(categorySlug, locale);

  if (!category) {
    return <NotFoundPage />;
  }

  // Cross-locale slug guard: an English category slug under /es/ redirects
  // to the Spanish category URL (and vice versa).
  const localizedCategory = getLocalizedCategory(category, locale);
  if (!localizedCategory || localizedCategory.slug !== categorySlug) {
    return <Navigate to={categoryHref(category.id, locale)} replace />;
  }

  const tools = getLocalizedTools(locale).filter(
    (tool) => tool.categoryId === category.id
  );
  // Internal linking (audit fix #4): the empty-category branch lists
  // sample tool names as plain text. Sample names are shortened forms of
  // the canonical names ("UUID Generator" vs "UUID Generator (v4 & v7)"),
  // so resolve them against the canonical registry: exact match, then
  // prefix match, then every-word-present match. Unmatched names stay
  // plain text — never link to the wrong tool.
  const toolSlugBySampleName = useMemo(() => {
    const tools = getAllTools();
    const wordsOf = (s: string) =>
      s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().split(' ');
    const resolve = (sampleName: string): string | undefined => {
      const lower = sampleName.toLowerCase();
      const exact = tools.find((t) => t.name.toLowerCase() === lower);
      if (exact) return exact.slug;
      const prefix = tools.find((t) => t.name.toLowerCase().startsWith(lower));
      if (prefix) return prefix.slug;
      const sampleWords = wordsOf(sampleName);
      const subset = tools.find((t) => {
        const nameWords = new Set(wordsOf(t.name));
        return sampleWords.every((w) => nameWords.has(w));
      });
      return subset?.slug;
    };
    const map = new Map<string, string | undefined>();
    for (const name of category.sampleToolNames) map.set(name, resolve(name));
    return map;
  }, [category.sampleToolNames]);
  // O-1: same M-5 linkifier as tool pages, applied to category FAQ
  // answers so named tools become real links. No excludeToolId: a
  // category page has no single "current tool" — every named tool in the
  // category is a legitimate link target. The entry map comes from the
  // light locale records (getLocalizedTools — names/slugs already in the
  // locale chunk), NOT from detail modules, so this adds no detail
  // payload to the bundle. JSON-LD keeps using the raw strings.
  const toolNameEntries = useMemo(
    () => buildToolNameEntries(getLocalizedTools(locale), locale),
    [locale]
  );
  const linkifyCategoryFaq = (text: string): string =>
    linkifyToolNames(text, toolNameEntries);
  const canonicalPath = categoryHref(category.id, locale);
  const otherCategories = getLocalizedCategories(locale).filter(
    (item) => item.id !== category.id
  );
  const categoryPalette = pastelForKey('category');

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.tools, href: localizeStaticPath('/tools/', locale) },
    { label: category.name },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    url: buildCanonicalUrl(canonicalPath),
    description: category.seo.description,
  };

  return (
    <>
      <SeoHead
        title={category.seo.title}
        description={category.seo.description}
        canonicalPath={canonicalPath}
        keywords={category.seo.keywords}
        ogImage={getOgImageForPage('category', category.id, locale)}
        structuredData={[collectionSchema, buildBreadcrumbSchema(breadcrumbs)]}
        alternates={toHreflangEntries(getCategoryAlternatePaths(category.id))}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6E6E73] dark:text-[#94A3B8]">
            Category · {category.name}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">
            {category.longDescription}
          </p>
          {/* L-15: short intro paragraph (complements longDescription). */}
          {category.intro && (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">
              {category.intro}
            </p>
          )}
        </header>

        {tools.length > 0 ? (
          <section aria-label={formatString(t.category.availableTools, { name: category.name })} className="mb-12">
            <h2 className="sr-only">
              {formatString(t.category.availableTools, { name: category.name })}
            </h2>
            <div className="overflow-hidden rounded-2xl border border-[#E5E5EA] bg-white shadow-sm dark:border-[#243247] dark:bg-[#131D31]">
              {tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={toolHref(tool.slug, locale)}
                  className="group flex items-center gap-4 border-b border-[#E5E5EA] px-5 py-4 transition-colors last:border-b-0 hover:bg-[#F5F5F7] sm:px-6 sm:py-5 dark:border-[#243247] dark:hover:bg-[#182239]"
                >
                  <CategoryIcon
                    name={category.iconName}
                    className="h-6 w-6 shrink-0 text-[#1D1D1F] dark:text-[#F1F5F9]"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-base font-bold text-[#1D1D1F] group-hover:text-[#0B7A59] dark:text-[#F1F5F9] dark:group-hover:text-[#34D399]">
                      {tool.name}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-[#6E6E73] dark:text-[#CBD5E1]">
                      {tool.shortDescription}
                    </span>
                  </span>
                  <ChevronRight
                    className="h-5 w-5 shrink-0 text-[#64748B] transition-transform duration-150 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5 group-hover:text-[#0E8A66] dark:group-hover:text-[#34D399]"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <section
            aria-label="Category rollout status"
            className={`rounded-2xl ${categoryPalette.card} p-6 sm:p-8 mb-10 shadow-sm`}
          >
            <h2 className="text-lg font-bold text-[#1D1D1F] dark:text-[#F1F5F9]">
              {t.category.scheduledTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1] max-w-2xl">
              {formatString(t.category.scheduledDescription, {
                name: category.name,
              })}
            </p>

            <div className="mt-5">
              <h3 className="text-xs font-semibold text-[#1D1D1F] mb-2 dark:text-[#F1F5F9]">
                {t.category.plannedToolsTitle}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-[#1D1D1F] dark:text-[#F1F5F9]">
                {category.sampleToolNames.map((name, index) => {
                  const slug = toolSlugBySampleName.get(name);
                  return (
                    <li
                      key={name}
                      className={`rounded-xl ${PASTEL_PALETTES[index % PASTEL_PALETTES.length].card} px-3 py-2 text-[#1D1D1F] shadow-sm dark:text-[#F1F5F9]`}
                    >
                      {slug ? (
                        <Link
                          to={toolHref(slug, locale)}
                          className="font-semibold text-[#0B7A59] hover:underline dark:text-[#34D399]"
                        >
                          {name}
                        </Link>
                      ) : (
                        name
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        {/* L-15: short FAQ (3–5 Q&As) about this category. */}
        {category.faqs && category.faqs.length > 0 && (
          <section aria-labelledby="category-faq-heading" className="mb-12">
            <h2 id="category-faq-heading" className="text-xl font-bold text-[#1D1D1F] mb-5 dark:text-[#F1F5F9]">
              {t.toolPage.faqs}
            </h2>
            <FAQAccordion
              items={category.faqs}
              renderAnswer={(answer) => (
                <span dangerouslySetInnerHTML={{ __html: linkifyCategoryFaq(answer) }} />
              )}
            />
          </section>
        )}

        <CategoryGuides categoryId={category.id} locale={locale} />

        <section aria-labelledby="other-categories-heading" className="pt-10 border-t border-[#E5E5EA] dark:border-[#243247]">
          <h2 id="other-categories-heading" className="text-xl font-bold text-[#1D1D1F] mb-5 dark:text-[#F1F5F9]">
            {t.category.exploreOther}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherCategories.map((item) => {
              const palette = pastelForKey(`cat:${item.id}`);
              return (
                <Link
                  key={item.id}
                  to={categoryHref(item.id, locale)}
                  className={`group flex items-center justify-between gap-3 rounded-2xl ${palette.card} p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFE3D3] hover:shadow-md dark:hover:border-[#34D399]`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${palette.icon}`}
                    >
                      <CategoryIcon name={item.iconName} className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#1D1D1F] truncate dark:text-[#F1F5F9]">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#64748B] tabular-nums">
                        {formatString(t.category.plannedCount, { count: item.plannedToolCount })}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 rtl:rotate-180 ${palette.link}`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
