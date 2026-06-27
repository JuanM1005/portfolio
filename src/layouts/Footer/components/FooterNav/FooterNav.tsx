import { navItems } from '@/constants/navigation.constants';
import { NavLink } from '@/components/ui';

export const FooterNav = () => {
  return (
    <nav className="flex flex-col gap-1" aria-label="Navegación del footer">
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
        Explorar
      </p>

      {navItems.map((item) => (
        <NavLink
          href={item.href}
          key={item.href}
          variant="muted"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
