import clsx from 'clsx';
import { Button, NavLink } from '@/components/ui';
import { CV_HREF } from '../../constants/navigation.constants';

interface HeaderCtaProps {
  className?: string;
}

export const HeaderCta = ({ className }: HeaderCtaProps) => {
  return (
    <div className={clsx('hidden md:block', className)}>
      <NavLink href={CV_HREF} download withAnimation={false}>
        <Button variant="dark">Descargar CV</Button>
      </NavLink>
    </div>
  );
};
