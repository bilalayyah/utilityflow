import type { ToolLocaleOverride } from '../../types';
import { VI_BATCH_1_OVERRIDES } from './batch1';
import { VI_BATCH_2_OVERRIDES } from './batch2';
import { VI_BATCH_3_OVERRIDES } from './batch3';
import { VI_BATCH_4_OVERRIDES } from './batch4';
import { VI_BATCH_5_OVERRIDES } from './batch5';

/** All Vietnamese tool overrides, keyed by English tool id. */
export const VI_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...VI_BATCH_1_OVERRIDES,
  ...VI_BATCH_2_OVERRIDES,
  ...VI_BATCH_3_OVERRIDES,
  ...VI_BATCH_4_OVERRIDES,
  ...VI_BATCH_5_OVERRIDES,
};
