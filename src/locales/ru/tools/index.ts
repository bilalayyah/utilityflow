import type { ToolLocaleOverride } from '../../types';
import { RU_AI_OVERRIDES } from './ai';
import { RU_BATCH_1_OVERRIDES } from './batch1';
import { RU_BATCH_2_OVERRIDES } from './batch2';
import { RU_BATCH_3_OVERRIDES } from './batch3';
import { RU_BATCH_4_OVERRIDES } from './batch4';
import { RU_BATCH_5_OVERRIDES } from './batch5';

/** All Russian tool overrides, keyed by English tool id. */
export const RU_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...RU_BATCH_1_OVERRIDES,
  ...RU_BATCH_2_OVERRIDES,
  ...RU_BATCH_3_OVERRIDES,
  ...RU_BATCH_4_OVERRIDES,
  ...RU_BATCH_5_OVERRIDES,
  ...RU_AI_OVERRIDES,
};
