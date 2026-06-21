import type { HTMLAttributes, PropsWithChildren } from 'react';

export interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  eyebrowNumber: string;
  eyebrowLabel: string;
  title: string;
  description?: string;
}

export interface SectionEyebrowProps {
  number: string;
  label: string;
}

export type SectionTitleProps = PropsWithChildren;

export type SectionDescriptionProps = PropsWithChildren;
