import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { MdMailOutline } from 'react-icons/md';

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
  external?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/JuanM1005',
    icon: FaGithub,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/juan-antonio-aguirre-mares-1a0621276/',
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:juan.aguirre5548@alumnos.udg.mx',
    icon: MdMailOutline,
  },
];
