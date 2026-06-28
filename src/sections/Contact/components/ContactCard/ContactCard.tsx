import { useTranslation } from 'react-i18next';
import { Card, NavLink } from '@/components/ui';
import type { ContactLink } from '../../contact.types';

export const ContactCard = ({
  icon: Icon,
  titleKey,
  value,
  href,
  external,
}: ContactLink) => {
  const { t } = useTranslation();
  return (
    <li>
      <Card
        size="sm"
        variant="ghost"
        className="transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5"
      >
        <NavLink
          href={href}
          withAnimation={false}
          className="flex! h-auto w-full items-center gap-4 px-0"
          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          <Icon
            size={20}
            className="shrink-0 text-burgundy-600"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-0.5">
            <h2 className="font-mono text-[11px] font-medium uppercase text-ink-soft/80">
              {t(`contact.links.${titleKey}`)}
            </h2>

            <span className="text-sm font-medium text-ink">{value}</span>
          </div>
        </NavLink>
      </Card>
    </li>
  );
};
