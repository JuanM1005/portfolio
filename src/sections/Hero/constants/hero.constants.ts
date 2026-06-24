import type { TechStack } from '@/types/tech.types';

export const HERO_LINKS = {
  projects: '#projects',
  contact: '#contact',
} as const;

export const HERO_STACK: TechStack[] = [
  'C++',
  'Python',
  'SQL',
  'HTML',
  'CSS',
  'Git',
  'React',
  'TypeScript',
  'Tailwind',
];

export const HERO_TERMINAL = {
  user: 'juan-mares',
  host: 'zsh',
} as const;
