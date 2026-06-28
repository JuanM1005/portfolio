import { useTranslation } from 'react-i18next';
import { Card, ProgressBar } from '@/components/ui';
import {
  LEARNING_SKILLS,
  ROADMAP_NEXT,
} from '../../constants/skills.constants';
import { SkillCardHeader } from '../SkillCardHeader/SkillCardHeader';

export const SkillsLearningCard = () => {
  const { t } = useTranslation();

  return (
    <Card variant="ghost" size="md">
      <SkillCardHeader
        title={t('skills.learning.title')}
        eyebrow={t('skills.learning.eyebrow')}
        tone="progress"
      />

      <ul className="space-y-5">
        {LEARNING_SKILLS.map((skill) => (
          <li key={skill.id}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-ink md:text-base">
                {skill.name}
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                {t(`skills.status.${skill.statusKey}`)}
              </span>
            </div>
            <ProgressBar
              value={skill.progress}
              aria-label={t('skills.learning.progressAria', {
                name: skill.name,
                progress: skill.progress,
              })}
            />
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-border-soft pt-6">
        <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted">
          {t('skills.learning.nextSteps')}
        </p>
        <ul className="flex flex-wrap gap-2">
          {ROADMAP_NEXT.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-border-soft px-2.5 py-1 font-mono text-xs text-ink-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
