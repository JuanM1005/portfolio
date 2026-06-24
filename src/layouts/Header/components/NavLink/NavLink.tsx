import type { AnchorHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  withAnimation?: boolean;
}

export const NavLink = ({
  href,
  children,
  className,
  withAnimation = true,
  ...props
}: NavLinkProps) => {
  return (
    <a
      href={href}
      className={clsx(
        'relative inline-flex h-8 cursor-pointer items-center px-1 font-sans text-sm text-ink transition-colors duration-200 hover:text-ink',
        withAnimation &&
          "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-burgundy-500 after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
