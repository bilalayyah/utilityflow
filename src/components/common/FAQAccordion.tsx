import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import type { ToolFAQ } from '../../types/tool';

interface FAQAccordionProps {
  items: ToolFAQ[];
  defaultOpenIndex?: number | null;
  // M-5: optional answer renderer. When provided (tool pages), the answer
  // is rendered from the linkifier's escaped HTML so named sibling tools
  // become real links. When omitted (e.g. HomePage), answers render as
  // plain text exactly as before. The JSON-LD (buildFaqSchema) always uses
  // the raw strings — never the rendered output.
  renderAnswer?: (answer: string) => ReactNode;
}

export function buildFaqSchema(items: ToolFAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function FAQAccordion({ items, defaultOpenIndex = 0, renderAnswer }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  if (items.length === 0) return null;

  return (
    <div className="space-y-2.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={`rounded-2xl border border-[#E5E5EA] bg-white px-4 transition-all dark:border-[#243247] dark:bg-[#131D31] ${
              isOpen ? 'shadow-sm' : 'shadow-sm hover:border-[#BFE3D3] dark:hover:border-[#34D399]'
            }`}
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-start text-base font-semibold text-[#1D1D1F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] rounded-xl cursor-pointer dark:text-[#F1F5F9]"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                    isOpen ? 'rotate-180 text-[#0E8A66] dark:text-[#34D399]' : 'text-[#64748B]'
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="pb-5 pe-8 text-sm sm:text-base leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]"
              >
                {renderAnswer ? renderAnswer(item.answer) : item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
