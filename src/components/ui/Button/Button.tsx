import clsx from 'clsx';
import type { ButtonProps } from './Button.types';
import { sizeStyles, variantStyles } from './Button.styles';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  fullWidth = false,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-1 rounded-md font-medium cursor-pointer transition-all duration-300 hover:scale-95 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && 'w-full',
        className,
      )}
      {...rest}
    >
      {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
      {children}
    </button>
  );
};
