import { Container } from '@/components/ui';
import {
  FooterBottom,
  FooterBrand,
  FooterNav,
  FooterSocials,
} from './components';

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border-soft py-12 text-ink-muted md:mt-32">
      <Container className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <FooterBrand />

        <div className="grid grid-cols-2 gap-8 md:contents">
          <FooterNav />
          <FooterSocials />
        </div>
      </Container>

      <FooterBottom />
    </footer>
  );
};