import type { CursorBlinkVariant, CursorBlickProps } from './CursorBlink.types';
import clsx from 'clsx';

const variantStyles: Record<CursorBlinkVariant, string> = {
  burgundy: 'bg-burgundy-600',
  accent: 'bg-accent-600',
  ink: 'bg-ink',
};

export const CursorBlink = ({
  variant = 'burgundy',
  className,
  ...rest
}: CursorBlickProps) => {
  const styles = variantStyles[variant];

  return (
    <span
      {...rest}
      aria-hidden="true"
      className={clsx(
        'h-3.5 w-1.5  animate-[cursor-blink_1s_steps(2,start)_infinite]',
        styles,
        className,
      )}
    />
  );
};
