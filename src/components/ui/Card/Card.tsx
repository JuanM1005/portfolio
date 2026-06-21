import type { CardVariant, CardProps } from './Card.types';
import clsx from 'clsx';

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-surface-card shadow-sm',
  ghost: 'bg-surface-card-muted border-accent-500/20',
};

export const Card = ({
  children,
  variant = 'default',
  className,
  ...rest
}: CardProps) => {
  const styles = variantStyles[variant];

  return (
    <div
      className={clsx(
        'rounded-xl border border-border-soft p-6 md:p-8',
        styles,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
