import type { ToolLocaleOverride } from '../../types';
import { FR_AI_OVERRIDES } from './ai';
import { FR_BATCH_1_OVERRIDES } from './batch1';
import { FR_BATCH_2_OVERRIDES } from './batch2';
import { FR_BATCH_3_OVERRIDES } from './batch3';
import { FR_BATCH_4_OVERRIDES } from './batch4';
import { FR_BATCH_5_OVERRIDES } from './batch5';

/** All French tool overrides, keyed by English tool id. */
export const FR_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...FR_BATCH_1_OVERRIDES,
  ...FR_BATCH_2_OVERRIDES,
  ...FR_BATCH_3_OVERRIDES,
  ...FR_BATCH_4_OVERRIDES,
  ...FR_BATCH_5_OVERRIDES,
  ...FR_AI_OVERRIDES,
};
