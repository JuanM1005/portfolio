import type { NavItem } from '@/types/navigation.types';

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Educación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
] as const;
