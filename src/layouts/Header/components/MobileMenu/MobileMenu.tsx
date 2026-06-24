import { Button, NavLink } from '@/components/ui';
import { FiMenu, FiX } from 'react-icons/fi';
import useMobileMenu from '../../context/useMobileMenu';
import { CV_HREF } from '../../constants/navigation.constants';
import { useLockScroll } from '../../hooks/useLockScroll';
import { HeaderNav } from '../HeaderNav/HeaderNav';

export const MobileMenu = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  useLockScroll();

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span
          className={`block transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
        >
          {isOpen ? (
            <FiX size={18} aria-hidden="true" className="text-burgundy-500/80" />
          ) : (
            <FiMenu size={18} aria-hidden="true" className="text-ink-soft/80" />
          )}
        </span>
      </Button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-border-soft bg-surface/95 backdrop-blur"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4">
            <HeaderNav
              ariaLabel="Navegación móvil"
              className="flex flex-col gap-1"
              itemClassName="py-2 text-base"
              onItemClick={closeMenu}
            />

            <div className="mt-3 border-t border-border-soft pt-4">
              <NavLink
                href={CV_HREF}
                download
                withAnimation={false}
                onClick={closeMenu}
              >
                <Button variant="dark" className="w-full">
                  Descargar CV
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
