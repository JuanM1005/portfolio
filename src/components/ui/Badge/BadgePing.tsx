import clsx from 'clsx';
import styles from './Badge.styles';
import type { BadgePingProps } from './Badge.types';

export const BadgePing = ({ variant }: BadgePingProps) => {
  const colors = styles.badgePingVariants[variant];

  return (
    <span className="relative flex size-2">
      <span
        className={clsx(
          'absolute inline-flex h-full w-full animate-ping rounded-full opacity-60',
          colors.ping,
        )}
      />

      <span
        className={clsx('relative inline-flex size-2 rounded-full', colors.dot)}
      />
    </span>
  );
};
