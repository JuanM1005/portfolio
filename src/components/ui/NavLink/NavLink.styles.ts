import type { NavLinkVariant } from './NavLink.types';

export const variantStyles: Record<NavLinkVariant, string> = {
  ink: 'text-ink hover:text-ink',
  burgundy: 'text-burgundy-600 hover:text-burgundy-700',
  muted: 'text-ink-muted hover:text-ink',
  soft: 'text-burgundy-700 hover:text-white',
};
