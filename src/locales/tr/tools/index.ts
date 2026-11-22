import type { ToolLocaleOverride } from '../../types';
import { TR_BATCH_1_OVERRIDES } from './batch1';
import { TR_BATCH_2_OVERRIDES } from './batch2';
import { TR_BATCH_3_OVERRIDES } from './batch3';
import { TR_BATCH_4_OVERRIDES } from './batch4';
import { TR_BATCH_5_OVERRIDES } from './batch5';

/** All Turkish tool overrides, keyed by English tool id. */
export const TR_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...TR_BATCH_1_OVERRIDES,
  ...TR_BATCH_2_OVERRIDES,
  ...TR_BATCH_3_OVERRIDES,
  ...TR_BATCH_4_OVERRIDES,
  ...TR_BATCH_5_OVERRIDES,
};
