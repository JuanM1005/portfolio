import type { ProgressHTMLAttributes } from 'react';

export interface ProgressBarProps extends Omit<
  ProgressHTMLAttributes<HTMLProgressElement>,
  'value' | 'max'
> {
  value: number; // 0-100
}
