import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Button, NavLink } from '@/components/ui';
import { CV_HREF } from '../../constants/header.constants';

interface HeaderCtaProps {
  className?: string;
}

export const HeaderCta = ({ className }: HeaderCtaProps) => {
  const { t } = useTranslation();

  return (
    <div className={clsx('hidden lg:block', className)}>
      <NavLink
        href={CV_HREF}
        download
        withAnimation={false}
        withFocusRing={false}
      >
        <Button
          variant="dark"
          className="group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-burgundy-600"
        >
          {t('actions.downloadCv')}
        </Button>
      </NavLink>
    </div>
  );
};
