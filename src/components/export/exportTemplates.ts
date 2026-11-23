/**
 * Export templates (Feature C). Templates are CHROME ONLY — they never
 * change the exported content, only the header/footer/density around it.
 * Exports contain no ads and no promo inside (the premium promo is a page
 * element, Feature F, never inside an exported file).
 */
import type { ExportTemplateId } from './types';

export interface ExportTemplate {
  id: ExportTemplateId;
  /** i18n key suffix — the panel resolves `t.export.templateSimple` etc. */
  labelKey: 'templateSimple' | 'templateProfessional' | 'templateCompact';
  /** Brand header (emerald UtilityFlow wordmark) on the first page. */
  showBrandHeader: boolean;
  /** Footer with source URL + date + page numbers. */
  showFooter: boolean;
  /** Dense layout: smaller row gaps, more rows per page. */
  dense: boolean;
  /** Short description of the template (for the options UI tooltip). */
  description: string;
}

export const EXPORT_TEMPLATES: Record<ExportTemplateId, ExportTemplate> = {
  simple: {
    id: 'simple',
    labelKey: 'templateSimple',
    showBrandHeader: false,
    showFooter: false,
    dense: false,
    description: 'Just the result — no brand header, no footer.',
  },
  professional: {
    id: 'professional',
    labelKey: 'templateProfessional',
    showBrandHeader: true,
    showFooter: true,
    dense: false,
    description: 'UtilityFlow wordmark, source URL, date and page numbers.',
  },
  compact: {
    id: 'compact',
    labelKey: 'templateCompact',
    showBrandHeader: false,
    showFooter: true,
    dense: true,
    description: 'Dense layout — the most rows per page.',
  },
};

export const DEFAULT_EXPORT_TEMPLATE_ID: ExportTemplateId = 'professional';

export function getExportTemplate(id: ExportTemplateId): ExportTemplate {
  return EXPORT_TEMPLATES[id] ?? EXPORT_TEMPLATES.professional;
}
