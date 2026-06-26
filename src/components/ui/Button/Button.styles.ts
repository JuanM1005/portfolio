import type { ButtonSize, ButtonVariant } from './Button.types';

export const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
};

export const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-700',
  secondary:
    'bg-burgundy-600 text-white hover:bg-burgundy-700 active:bg-burgundy-700',
  ghost:
    'bg-surface-card text-ink border border-border-soft hover:bg-neutral-50 active:bg-neutral-100',
  dark: 'bg-ink text-white hover:bg-neutral-800 active:bg-neutral-900',
};

export const focusRingStyles: Record<ButtonVariant, string> = {
  primary: 'focus-visible:ring-burgundy-600',
  secondary: 'focus-visible:ring-burgundy-50',
  ghost: 'focus-visible:ring-burgundy-600',
  dark: 'focus-visible:ring-burgundy-600',
};
