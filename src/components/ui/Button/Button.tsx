import clsx from 'clsx';
import type { ButtonProps } from './Button.types';
import { variantStyles } from './Button.styles';

export const Button = ({
  children,
  variant = 'primary',
  leftIcon,
  className,
  ...rest
}: ButtonProps) => {
  const styles = variantStyles[variant];

  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-medium cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
        styles,
        className,
      )}
      {...rest}
    >
      {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
      {children}
    </button>
  );
};
