import { Suspense } from 'react';
import { ToolPageLayout } from '../components/tool/ToolPageLayout';
import { useLocale } from '../locales/LocaleContext';
import { getLocalizedTool } from '../locales/tools';
import { formatString } from '../locales/ui';
import { AI_WRITING_ASSISTANT_TOOL } from '../registry/aiTools';

export function AiWritingAssistantPage() {
  const { locale, t } = useLocale();
  const tool = getLocalizedTool(AI_WRITING_ASSISTANT_TOOL, locale);
  const ToolComponent = tool.component;

  return (
    <ToolPageLayout tool={tool}>
      <Suspense
        fallback={
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-sm text-slate-500 shadow-sm">
            {formatString(t.toolPage.loadingWorkspace, { name: tool.name })}
          </div>
        }
      >
        <ToolComponent />
      </Suspense>
    </ToolPageLayout>
  );
}
