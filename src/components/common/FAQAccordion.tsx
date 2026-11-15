import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import type { ToolFAQ } from '../../types/tool';
import { PASTEL_PALETTES } from '../tool/pastel';

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
        // Pastel redesign: rotate the 12 palettes across items so the list
        // reads as colorful pastel cards like the homepage, not flat white.
        const itemPalette = PASTEL_PALETTES[index % PASTEL_PALETTES.length];
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={`rounded-2xl px-4 transition-all ${itemPalette.card} ${
              isOpen ? 'shadow-md' : 'shadow-sm hover:shadow-md'
            }`}
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-xl cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                    isOpen ? `rotate-180 ${itemPalette.link}` : 'text-slate-500'
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
                {renderAnswer ? renderAnswer(item.answer) : item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
