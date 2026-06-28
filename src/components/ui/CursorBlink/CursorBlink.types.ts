import type { HTMLAttributes } from 'react';

export type CursorBlinkVariant = 'burgundy' | 'accent' | 'ink';

export interface CursorBlinkProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: CursorBlinkVariant;
}
