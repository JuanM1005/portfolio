import type { HTMLAttributes } from 'react';

export type CursorBlinkVariant = 'burgundy' | 'accent' | 'ink';

export interface CursorBlickProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: CursorBlinkVariant;
}
