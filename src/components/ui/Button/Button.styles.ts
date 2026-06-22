import type { ButtonVariant } from './Button.types';

export const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-700',
  secondary:
    'bg-burgundy-600 text-white hover:bg-burgundy-700 active:bg-burgundy-700',
  ghost:
    'bg-surface-card text-ink border border-border-soft hover:bg-neutral-50 active:bg-neutral-100',
};
