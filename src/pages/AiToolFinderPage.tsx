import { Suspense } from 'react';
import { ToolPageLayout } from '../components/tool/ToolPageLayout';
import { pastelForKey } from '../components/tool/pastel';
import { useLocale } from '../locales/LocaleContext';
import { getLocalizedTool } from '../locales/tools';
import { formatString } from '../locales/ui';
import { AI_TOOL_FINDER_TOOL } from '../registry/aiTools';

export function AiToolFinderPage() {
  const { locale, t } = useLocale();
  const tool = getLocalizedTool(AI_TOOL_FINDER_TOOL, locale);
  const ToolComponent = tool.component;
  const palette = pastelForKey(tool.id);

  return (
    <ToolPageLayout tool={tool}>
      <Suspense
        fallback={
          <div className={`rounded-2xl ${palette.card} p-12 text-center text-sm text-slate-500 shadow-sm`}>
            {formatString(t.toolPage.loadingWorkspace, { name: tool.name })}
          </div>
        }
      >
        <ToolComponent />
      </Suspense>
    </ToolPageLayout>
  );
}
