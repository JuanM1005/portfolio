import type { IconType } from 'react-icons';

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
  external?: boolean;
  title?: string;
}