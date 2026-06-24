import type { HTMLAttributes, ReactNode } from 'react';

export interface SectionLayoutProps extends HTMLAttributes<HTMLElement> {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}
