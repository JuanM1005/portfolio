import type { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'default' | 'ghost';
export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  size?: CardSize;
}
