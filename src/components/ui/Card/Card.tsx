import type { CardProps } from './Card.types';
import { variantStyles, sizeStyles } from './Card.styles';
import clsx from 'clsx';

export const Card = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...rest
}: CardProps) => {
  return (
    <div
      className={clsx(
        'rounded-xl border',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
