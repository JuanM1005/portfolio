import { Container } from '@/components/ui';
import { HeaderCta, HeaderLogo, HeaderNav } from './components';

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-surface/80 backdrop-blur transition-colors">
      <Container className="grid grid-cols-[1fr_auto_1fr] items-center py-4">
        <HeaderLogo className="justify-self-start" />
        <HeaderNav />
        <HeaderCta className="justify-self-end" />
      </Container>
    </header>
  );
};
