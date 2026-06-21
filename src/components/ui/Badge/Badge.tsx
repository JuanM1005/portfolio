import clsx from 'clsx';
import styles from './Badge.styles';
import { BadgePing } from './BadgePing';
import type { BadgeProps } from './Badge.types';

export const Badge = ({
  children,
  variant = 'neutral',
  withDot = false,
}: BadgeProps) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 rounded-full border font-medium px-3 py-1 text-sm',
        styles.badgeVariants[variant],
      )}
    >
      {withDot && <BadgePing variant={variant} />}

      {children}
    </span>
  );
};
