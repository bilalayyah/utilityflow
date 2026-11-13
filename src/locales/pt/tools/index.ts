import type { ToolLocaleOverride } from '../../types';
import { PT_AI_OVERRIDES } from './ai';
import { PT_BATCH_1_OVERRIDES } from './batch1';
import { PT_BATCH_2_OVERRIDES } from './batch2';
import { PT_BATCH_3_OVERRIDES } from './batch3';
import { PT_BATCH_4_OVERRIDES } from './batch4';
import { PT_BATCH_5_OVERRIDES } from './batch5';

/** All Portuguese (pt-BR) tool overrides, keyed by English tool id. */
export const PT_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...PT_BATCH_1_OVERRIDES,
  ...PT_BATCH_2_OVERRIDES,
  ...PT_BATCH_3_OVERRIDES,
  ...PT_BATCH_4_OVERRIDES,
  ...PT_BATCH_5_OVERRIDES,
  ...PT_AI_OVERRIDES,
};
