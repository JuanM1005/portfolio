import { EMAIL, GITHUB, LINKEDIN } from '@/constants/social.constants';
import type { ContactLink } from '../contact.types';

export const MESSAGE_MAX_LENGTH = 500;

export const CONTACT_LINKS: ContactLink[] = [
  { ...EMAIL, titleKey: 'email', value: 'juan.aguirre5548@alumnos.udg.mx' },
  { ...GITHUB, titleKey: 'github', value: '@juanm1005' },
  {...LINKEDIN, titleKey: 'linkedin', value: 'Juan Antonio Aguirre Mares'}
];
