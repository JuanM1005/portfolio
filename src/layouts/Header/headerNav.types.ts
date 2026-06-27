export type HeaderNavType = '#home' | '#about' | '#skills' | '#projects' | '#roadmap' | '#education' | '#contact'

export interface HeaderNavItem {
  label: string;
  href: HeaderNavType;
}
