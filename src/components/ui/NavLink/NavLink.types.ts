import type { AnchorHTMLAttributes, ReactNode } from 'react';

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  withAnimation?: boolean;
}
