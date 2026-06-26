import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type NavLinkVariant = 'ink' | 'burgundy' | 'muted' | 'soft';

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  withAnimation?: boolean;
  variant?: NavLinkVariant;
  withFocusRing?: boolean;
}
