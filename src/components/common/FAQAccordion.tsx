import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import type { ToolFAQ } from '../../types/tool';

interface FAQAccordionProps {
  items: ToolFAQ[];
  defaultOpenIndex?: number | null;
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

export function FAQAccordion({ items, defaultOpenIndex = 0 }: FAQAccordionProps) {
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
            className={`rounded-2xl border px-4 transition-colors ${
              isOpen
                ? 'border-indigo-200 bg-indigo-50/70 shadow-sm'
                : 'border-slate-200 bg-white'
            }`}
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-slate-900 hover:text-indigo-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-xl cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-150 ${
                    isOpen ? 'rotate-180 text-indigo-600' : ''
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
                className="pb-5 pr-8 text-sm sm:text-base leading-relaxed text-slate-600"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
