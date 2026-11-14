import { Suspense } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ToolPageLayout } from '../components/tool/ToolPageLayout';
import { pastelForKey } from '../components/tool/pastel';
import { useLocale } from '../locales/LocaleContext';
import { toolHref } from '../locales/config';
import { formatString } from '../locales/ui';
import { getLocalizedTool, getToolByLocalizedSlug } from '../locales/tools';
import { NotFoundPage } from './NotFoundPage';

export function ToolPage() {
  const { locale, t } = useLocale();
  const { toolSlug = '' } = useParams<{ toolSlug: string }>();
  const tool = getToolByLocalizedSlug(toolSlug, locale);

  if (!tool) {
    return <NotFoundPage />;
  }

  // Cross-locale slug guard: an English slug visited under /es/ (or vice
  // versa) redirects to the correct localized URL instead of serving a
  // duplicate page under the wrong slug.
  const localized = getLocalizedTool(tool, locale);
  if (localized.slug !== toolSlug) {
    return <Navigate to={toolHref(localized.slug, locale)} replace />;
  }

  const ToolComponent = localized.component;
  const palette = pastelForKey(localized.id);

  return (
    <ToolPageLayout tool={localized}>
      <Suspense
        fallback={
          <div className={`rounded-2xl ${palette.card} p-12 text-center text-sm text-slate-500 shadow-sm`}>
            {formatString(t.toolPage.loadingWorkspace, { name: localized.name })}
          </div>
        }
      >
        <ToolComponent />
      </Suspense>
    </ToolPageLayout>
  );
}
