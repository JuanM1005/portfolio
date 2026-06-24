import clsx from 'clsx';
import type { ProgressBarProps } from './ProgressBar.types';

export const ProgressBar = ({
  value,
  className,
  ...rest
}: ProgressBarProps) => {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <progress
      value={clamped}
      max={100}
      className={clsx('progress-bar h-1.5 w-full', className)}
      {...rest}
    />
  );
};
