import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'available' | 'progress' | 'upcoming' | 'neutral';

export interface BadgePingProps extends HTMLAttributes<HTMLSpanElement> {
  variant: BadgeVariant;
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  withDot?: boolean;
}
