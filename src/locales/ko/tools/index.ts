import type { ToolLocaleOverride } from '../../types';
import { KO_AI_OVERRIDES } from './ai';
import { KO_BATCH_1_OVERRIDES } from './batch1';
import { KO_BATCH_2_OVERRIDES } from './batch2';
import { KO_BATCH_3_OVERRIDES } from './batch3';
import { KO_BATCH_4_OVERRIDES } from './batch4';
import { KO_BATCH_5_OVERRIDES } from './batch5';

/** All Korean tool overrides, keyed by English tool id. */
export const KO_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...KO_BATCH_1_OVERRIDES,
  ...KO_BATCH_2_OVERRIDES,
  ...KO_BATCH_3_OVERRIDES,
  ...KO_BATCH_4_OVERRIDES,
  ...KO_BATCH_5_OVERRIDES,
  ...KO_AI_OVERRIDES,
};
