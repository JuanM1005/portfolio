export type NavHref =
  | '#home'
  | '#about'
  | '#skills'
  | '#projects'
  | '#roadmap'
  | '#education'
  | '#contact';

export interface NavItem {
  href: NavHref;
}
