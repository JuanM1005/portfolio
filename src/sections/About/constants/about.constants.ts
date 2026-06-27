import type { TechStack } from '@/types/tech.types';
import type { AboutFact } from '../about.types';

const BASE_STACK: TechStack[] = ['C++', 'Python', 'SQL'];

export const ABOUT_FACTS: AboutFact[] = [
  { factKey: 'location', staticValue: 'Guadalajara, MX' },
  { factKey: 'studies' },
  { factKey: 'focus', staticValue: 'Frontend → Full Stack' },
  { factKey: 'base', staticValue: BASE_STACK.join(' · ') },
  { factKey: 'learning', staticValue: 'React · TypeScript' },
  { factKey: 'status' },
];
