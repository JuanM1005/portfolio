import type { TechStack } from '@/types/tech.types';
import type { AboutFact } from '../types/about.types';

const BASE_STACK: TechStack[] = ['C++', 'Python', 'SQL'];

export const ABOUT_FACTS: AboutFact[] = [
  { label: 'Ubicación', value: 'Guadalajara, MX' },
  { label: 'Estudios', value: 'Ing. Informática' },
  { label: 'Enfoque', value: 'Frontend → Full Stack' },
  { label: 'Base', value: BASE_STACK.join(' · ') },
  { label: 'Aprendiendo', value: 'React · TypeScript' },
  { label: 'Estatus', value: 'Disponible' },
];
