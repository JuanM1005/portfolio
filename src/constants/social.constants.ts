import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { MdMailOutline } from 'react-icons/md';
import type { SocialLink } from '@/types/social.types';

export const GITHUB: SocialLink = {
  label: 'GitHub',
  href: 'https://github.com/JuanM1005',
  icon: FaGithub,
  external: true,
};

export const LINKEDIN: SocialLink = {
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/in/juan-antonio-aguirre-mares-1a0621276/',
  icon: FaLinkedinIn,
  external: true,
};

export const EMAIL: SocialLink = {
  label: 'Email',
  href: 'mailto:juan.aguirre5548@alumnos.udg.mx',
  icon: MdMailOutline,
};

export const socialLinks: SocialLink[] = [GITHUB, LINKEDIN, EMAIL];