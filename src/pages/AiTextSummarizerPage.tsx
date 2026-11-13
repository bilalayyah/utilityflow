import { Suspense } from 'react';
import { ToolPageLayout } from '../components/tool/ToolPageLayout';
import { AI_TEXT_SUMMARIZER_TOOL } from '../registry/aiTools';

export function AiTextSummarizerPage() {
  const ToolComponent = AI_TEXT_SUMMARIZER_TOOL.component;

  return (
    <ToolPageLayout tool={AI_TEXT_SUMMARIZER_TOOL}>
      <Suspense
        fallback={
          <div className="py-12 text-center text-sm text-slate-500">
            Loading AI Text Summarizer workspace...
          </div>
        }
      >
        <ToolComponent />
      </Suspense>
    </ToolPageLayout>
  );
}
