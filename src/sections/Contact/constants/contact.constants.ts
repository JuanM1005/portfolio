import { EMAIL, GITHUB } from '@/constants/social.constants';
import type { ContactLink } from '../contact.types';

export const MESSAGE_MAX_LENGTH: number = 500;

export const CONTACT_LINKS: ContactLink[] = [
  { ...EMAIL, title: 'Correo', value: 'juan.aguirre5548@alumnos.udg.mx' },
  { ...GITHUB, title: 'Github', value: '@juanm1005' },
];