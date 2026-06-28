import type { SocialLink } from '@/types/social.types';

export interface ContactLink extends SocialLink {
  titleKey: string;
  value: string;
}
