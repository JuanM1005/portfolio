import type { NavItem } from '../types/navigation.types';

export const navItems: NavItem[] = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Formación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
] as const;
