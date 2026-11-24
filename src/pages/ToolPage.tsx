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

  // CLS (2026-11-24, measured): the Suspense fallback reserves workbench
  // space while the lazy tool chunk loads. The old single reserve
  // (min-h 680px mobile / 480px desktop, rendered 808px / 624px with
  // p-12 + section padding) overshoots compact workbenches by 300–580px,
  // so when the real tool painted, everything below it jumped up —
  // measured CLS 0.28 on /merge-pdf/ desktop. Heights below are the
  // MEASURED settled workbench-section heights (Playwright, live site):
  // merge-pdf 198px both widths; bmi-calculator 534px mobile / 332px
  // desktop. min-h = section height − 96 (p-12) − section padding
  // (32 mobile / 48 desktop). Tools not listed keep the previous
  // default: tall text tools measure close to it (word-counter 964px
  // mobile / 676px desktop), and their related section sits below the
  // fold through the transition either way.
  const WORKBENCH_FALLBACK_MIN_H: Record<string, string> = {
    'merge-pdf': 'min-h-[70px] lg:min-h-[54px]',
    'bmi-calculator': 'min-h-[406px] lg:min-h-[188px]',
  };
  const fallbackMinH =
    WORKBENCH_FALLBACK_MIN_H[localized.id] ?? 'min-h-[680px] lg:min-h-[480px]';

  return (
    <ToolPageLayout tool={localized}>
      <Suspense
        fallback={
          // CLS guard (Audit Fix #11): the lazy tool chunk arrives late on
          // slow networks, and the loaded workspace (700–1,300px on mobile)
          // is far taller than this fallback (~120px). Without reserved
          // space the whole guide section below jumps down (measured CLS
          // 0.291 on /word-counter/ mobile, Slow 4G). The min-height
          // reserves typical workspace space so the swap barely moves
          // anything; the text is vertically centred in the reserved box.
          // Desktop workspaces are shorter, so the reserve is smaller there.
          <div
            className={`rounded-2xl ${palette.card} p-12 text-center text-sm text-slate-500 shadow-sm ${fallbackMinH} flex items-center justify-center`}
          >
            {formatString(t.toolPage.loadingWorkspace, { name: localized.name })}
          </div>
        }
      >
        <ToolComponent />
      </Suspense>
    </ToolPageLayout>
  );
}
