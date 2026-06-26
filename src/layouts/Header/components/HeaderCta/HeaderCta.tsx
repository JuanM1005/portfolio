import clsx from 'clsx';
import { Button, NavLink } from '@/components/ui';
import { CV_HREF } from '../../constants/navigation.constants';

interface HeaderCtaProps {
  className?: string;
}

export const HeaderCta = ({ className }: HeaderCtaProps) => {
  return (
    <div className={clsx('hidden md:block', className)}>
      <NavLink href={CV_HREF} download withAnimation={false} withFocusRing={false}>
        <Button variant="dark" className="group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-burgundy-600">Descargar CV</Button>
      </NavLink>
    </div>
  );
};
