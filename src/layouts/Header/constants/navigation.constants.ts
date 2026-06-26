import type { NavItem } from '../types/navigation.types';

export const CV_HREF = '/docs/CV_JuanAntonio_AguirreMares.pdf';

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Formación', href: '#education'},
  { label: 'Contacto', href: '#contact', pending: true },
] as const;
