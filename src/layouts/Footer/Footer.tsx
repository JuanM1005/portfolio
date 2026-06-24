import { Container } from '@/components/ui';
import {
  FooterBottom,
  FooterBrand,
  FooterNav,
  FooterSocials,
} from './components';

export const Footer = () => {
  return (
    <footer className="mt-32 border-t border-border-soft py-12 text-ink-muted">
      <Container className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <FooterBrand />
        <FooterNav />
        <FooterSocials />
      </Container>

      <FooterBottom />
    </footer>
  );
};
