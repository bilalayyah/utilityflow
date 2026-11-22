import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocale } from '../../locales/LocaleContext';
import { toolHref } from '../../locales/config';
import { getLocalizedCategory, getLocalizedTool } from '../../locales/tools';
import type { ToolDefinition } from '../../types/tool';
import { CategoryIcon } from '../common/CategoryIcon';

interface ToolCardProps {
  tool: ToolDefinition;
}

export function ToolCard({ tool }: ToolCardProps) {
  const { locale, t } = useLocale();
  // Always render the current locale's fields, even when the caller passes
  // an English base definition (RelatedTools, popular lists, search).
  const localized = getLocalizedTool(tool, locale);
  const category = getLocalizedCategory(localized.categoryId, locale);
  const href = toolHref(localized.slug, locale);

  return (
    <Link
      to={href}
      className="group flex flex-col justify-between rounded-2xl border border-[#E5E5EA] bg-white p-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-[#BFE3D3] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] sm:p-6 dark:border-[#243247] dark:bg-[#131D31] dark:hover:border-[#34D399]"
    >
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F3EE] text-[#0E8A66] dark:bg-[rgba(16,185,129,.14)] dark:text-[#34D399]">
          <CategoryIcon
            name={category ? category.iconName : 'FileText'}
            className="w-6 h-6"
          />
        </div>
        <h3 className="mt-4 text-lg font-bold text-[#1D1D1F] dark:text-[#F1F5F9]">
          {localized.name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-[#6E6E73] line-clamp-2 dark:text-[#CBD5E1]">
          {localized.shortDescription}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#0B7A59] dark:text-[#34D399]">
        <span>{t.common.openTool}</span>
        <ArrowRight
          className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
