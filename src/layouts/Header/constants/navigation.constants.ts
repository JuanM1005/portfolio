import type { HeaderNavItem } from '../headerNav.types';

export const CV_HREF = '/docs/CV_JuanAntonio_AguirreMares.pdf';

export const headerNavItems: HeaderNavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Educación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
] as const;
