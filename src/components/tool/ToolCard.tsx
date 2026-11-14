import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocale } from '../../locales/LocaleContext';
import { toolHref } from '../../locales/config';
import { getLocalizedCategory, getLocalizedTool } from '../../locales/tools';
import type { ToolDefinition } from '../../types/tool';
import { CategoryIcon } from '../common/CategoryIcon';
import { pastelForKey } from './pastel';

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
  const palette = pastelForKey(tool.id);

  return (
    <Link
      to={href}
      className={`group flex flex-col justify-between rounded-2xl p-5 sm:p-6 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${palette.card}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${palette.icon}`}
        >
          <CategoryIcon
            name={category ? category.iconName : 'FileText'}
            className="w-6 h-6"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {localized.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-700/90 dark:text-slate-200/90 line-clamp-2">
            {localized.shortDescription}
          </p>
        </div>
      </div>

      <div
        className={`mt-4 flex items-center gap-1.5 text-sm font-semibold ${palette.link}`}
      >
        <span>{t.common.openTool}</span>
        <ArrowRight
          className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
