import { Button } from '@/components/ui';
import { NavLink } from '../NavLink/NavLink';

const CV_HREF = '/docs/CV_JuanAntonio_AguirreMares.pdf';

interface HeaderCtaProps {
  className?: string;
}

export const HeaderCta = ({ className }: HeaderCtaProps) => {
  return (
    <NavLink
      href={CV_HREF}
      download
      withAnimation={false}
      className={className}
    >
      <Button variant="dark">Descargar CV</Button>
    </NavLink>
  );
};
