/**
 * Shared types for the Universal Result Export system (Phase 1, foundation).
 *
 * The panel mounts inside a tool under its result area (Phase 2 mounts it
 * per tool — see the audit report §1.4). This module is the light shell:
 * it has ZERO static imports of html-to-image / pdf-lib. The heavy engines
 * are loaded only via dynamic import() inside click handlers in
 * exportEngine.ts, so the export code costs 0 KB when unused.
 */

export interface ExportField {
  /** Row label, e.g. "Words" or "Monthly payment". */
  label: string;
  /** Row value, rendered as text. Long values wrap. */
  value: string;
  /** Render the value in the monospace font (code, hashes, URLs). */
  mono?: boolean;
}

export interface ExportResult {
  /** Registry tool id, e.g. "word-counter". */
  toolId: string;
  /** URL slug of the tool, used for the default filename. */
  toolSlug: string;
  /** Display name of the tool, e.g. "Word Counter". */
  toolName: string;
  /** The input section (what the user entered / configured). */
  input: ExportField[];
  /** The output section (the computed result). */
  output: ExportField[];
  /** Optional extra rows shown under the output (breakdown, schedule…). */
  details?: ExportField[];
  /** Optional free-form line shown at the bottom (e.g. a note or total). */
  metadata?: string;
}

export type ExportFormat = 'png' | 'jpg' | 'pdf' | 'print' | 'copy' | 'share';
export type ExportPageSize = 'a4' | 'letter';
export type ExportOrientation = 'portrait' | 'landscape';
export type ExportTemplateId = 'simple' | 'professional' | 'compact';

export interface ExportOptions {
  format: ExportFormat;
  pageSize: ExportPageSize;
  orientation: ExportOrientation;
  /** Base font size in px for the preview; PDF maps it to points. */
  fontSize: number;
  /** Page margin preset. */
  margins: 'narrow' | 'normal' | 'wide';
  template: ExportTemplateId;
  includeInput: boolean;
  includeOutput: boolean;
  /** Editable filename (extension is forced to match the format). */
  filename: string;
}

export const DEFAULT_EXPORT_OPTIONS: Omit<ExportOptions, 'filename'> = {
  format: 'png',
  pageSize: 'a4',
  orientation: 'portrait',
  fontSize: 14,
  margins: 'normal',
  template: 'professional',
  includeInput: true,
  includeOutput: true,
};

/** Panel state machine: idle → options → preview → generating → done | error. */
export type ExportPanelState =
  | 'idle'
  | 'options'
  | 'preview'
  | 'generating'
  | 'done'
  | 'error';
