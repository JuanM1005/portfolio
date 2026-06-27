import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui';
import { SOFT_SKILLS } from '../../constants/skills.constants';

interface SoftSkillsCardProps {
  className?: string;
}

export const SoftSkillsCard = ({ className }: SoftSkillsCardProps) => {
  const { t } = useTranslation();

  return (
    <Card variant="ghost" size="md" className={className}>
      <ul className="flex flex-wrap gap-2">
        {SOFT_SKILLS.map((skill) => (
          <li
            key={skill.id}
            className="rounded-md border border-border-soft px-2.5 py-1 font-mono text-xs text-ink-muted"
          >
            {t(`skills.soft.${skill.id}`)}
          </li>
        ))}
      </ul>
    </Card>
  );
};
