import { Container } from '@/components/ui';
import { HeaderCta, HeaderLogo, HeaderNav } from './components';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia el estado si el scroll baja más de 50 píxeles
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Escucha el evento de scroll en el navegador
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-40 bg-surface/80 backdrop-blur transition-colors',
        isScrolled
          ? 'border-b border-border-soft'
          : 'border-b border-transparent',
      )}
    >
      <Container className="grid grid-cols-[1fr_auto_1fr] items-center py-4">
        <HeaderLogo className="justify-self-start" />
        <HeaderNav />
        <HeaderCta className="justify-self-end" />
      </Container>
    </header>
  );
};
