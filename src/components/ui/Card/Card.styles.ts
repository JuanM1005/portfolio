import type { CardSize, CardVariant } from './Card.types';

export const variantStyles: Record<CardVariant, string> = {
  default: 'bg-surface-card border-border-soft',
  ghost: 'bg-surface-card-muted border-ink-muted/30',
};

export const sizeStyles: Record<CardSize, string> = {
  sm: 'p-4',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-12',
};
