import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink, Button } from '@/components/ui';
import { navItems } from '../../constants/navigation.constants';

const CV_HREF = '/docs/CV_JuanAntonio_AguirreMares.pdf';

interface HeaderMobileMenuProps {
  className?: string;
}

export const HeaderMobileMenu = ({ className }: HeaderMobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={clsx('relative', className)}>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="flex items-center justify-center rounded p-1.5 text-ink transition-colors hover:text-burgundy-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600"
      >
        {isOpen ? (
          <FiX size={22} aria-hidden="true" />
        ) : (
          <FiMenu size={22} aria-hidden="true" />
        )}
      </button>

      {/* Panel desplegable */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-(--header-height,65px) z-30 border-b border-border-soft bg-surface/95 backdrop-blur"
        >
          <nav
            aria-label="Navegación móvil"
            className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4"
          >
            {navItems.map((item) => (
              <NavLink
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-base"
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mt-3 border-t border-border-soft pt-4">
              <NavLink
                href={CV_HREF}
                download
                withAnimation={false}
                onClick={() => setIsOpen(false)}
              >
                <Button variant="dark" className="w-full">
                  Descargar CV
                </Button>
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};