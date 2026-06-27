import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui';
import { HARD_SKILLS } from '../../constants/skills.constants';
import { SkillCardHeader } from '../SkillCardHeader/SkillCardHeader';

export const SkillsBaseCard = () => {
  const { t } = useTranslation();

  return (
    <Card variant="ghost" size="md">
      <SkillCardHeader
        title={t('skills.base.title')}
        eyebrow={t('skills.base.eyebrow')}
        tone="available"
      />

      <ul className="divide-y divide-border-soft border-t border-border-soft">
        {HARD_SKILLS.map((skill) => (
          <li
            key={skill.id}
            className="flex items-center justify-between gap-4 py-3.5"
          >
            <span className="text-sm font-medium text-ink md:text-base">
              {skill.name}
            </span>
            <span className="font-mono text-xs text-ink-muted">
              {t(`skills.meta.${skill.id}`)}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
