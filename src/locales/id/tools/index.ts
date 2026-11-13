import type { ToolLocaleOverride } from '../../types';
import { ID_AI_OVERRIDES } from './ai';
import { ID_BATCH_1_OVERRIDES } from './batch1';
import { ID_BATCH_2_OVERRIDES } from './batch2';
import { ID_BATCH_3_OVERRIDES } from './batch3';
import { ID_BATCH_4_OVERRIDES } from './batch4';
import { ID_BATCH_5_OVERRIDES } from './batch5';

/** All Indonesian tool overrides, keyed by English tool id. */
export const ID_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...ID_BATCH_1_OVERRIDES,
  ...ID_BATCH_2_OVERRIDES,
  ...ID_BATCH_3_OVERRIDES,
  ...ID_BATCH_4_OVERRIDES,
  ...ID_BATCH_5_OVERRIDES,
  ...ID_AI_OVERRIDES,
};
