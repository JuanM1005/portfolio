import type { NavLinkVariant } from './NavLink.types';

export const variantStyles: Record<NavLinkVariant, string> = {
  ink: 'text-ink hover:text-ink',
  burgundy: 'text-burgundy-600',
  muted: 'text-ink-muted hover:text-ink',
  soft: 'text-burgundy-700 hover:text-white',
  inverted: 'text-white hover:text-white',
};

export const focusRingStyles: Record<NavLinkVariant, string> = {
  ink: 'focus-visible:ring-burgundy-600',
  burgundy: 'focus-visible:ring-burgundy-50',
  muted: 'focus-visible:ring-burgundy-600',
  soft: 'focus-visible:ring-burgundy-600',
  inverted: 'focus-visible:ring-white',
};
