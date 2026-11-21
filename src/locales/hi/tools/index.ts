import type { ToolLocaleOverride } from '../../types';
import { HI_BATCH_1_OVERRIDES } from './batch1';
import { HI_BATCH_2_OVERRIDES } from './batch2';
import { HI_BATCH_3_OVERRIDES } from './batch3';
import { HI_BATCH_4_OVERRIDES } from './batch4';
import { HI_BATCH_5_OVERRIDES } from './batch5';

/** All Hindi tool overrides, keyed by English tool id. */
export const HI_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...HI_BATCH_1_OVERRIDES,
  ...HI_BATCH_2_OVERRIDES,
  ...HI_BATCH_3_OVERRIDES,
  ...HI_BATCH_4_OVERRIDES,
  ...HI_BATCH_5_OVERRIDES,
};
