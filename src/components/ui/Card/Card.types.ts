import type { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'default' | 'ghost';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
}
