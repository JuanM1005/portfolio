import { Container } from '@/components/ui';
import { HeaderLogo, HeaderNav, HeaderCta, MobileMenu } from './components';
import clsx from 'clsx';
import { MobileMenuProvider } from './context/MobileMenuProvider';
import { useHandleScroll } from './hooks/useHandleScroll';

export const Header = () => {
  const { isScrolled } = useHandleScroll(50)

  return (
    <MobileMenuProvider>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-40 bg-surface/80 backdrop-blur transition-colors',
          isScrolled
            ? 'border-b border-border-soft'
            : 'border-b border-transparent',
        )}
      >
        <Container className="flex min-h-16 items-center justify-between py-6">
          <HeaderLogo />
          <HeaderNav />
          <HeaderCta />
          <MobileMenu />
        </Container>
      </header>
    </MobileMenuProvider>
  );
};
