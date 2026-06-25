import { Card, ProgressBar } from '@/components/ui';
import {
  LEARNING_SKILLS,
  ROADMAP_NEXT,
} from '../../constants/skills.constants';
import { SkillCardHeader } from '../SkillCardHeader/SkillCardHeader';

export const SkillsLearningCard = () => {
  return (
    <Card variant="ghost" size="md">
      <SkillCardHeader
        title="Frontend actual"
        eyebrow="En práctica"
        tone="progress"
      />

      <ul className="space-y-5">
        {LEARNING_SKILLS.map((skill) => (
          <li key={skill.name}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-ink md:text-base">
                {skill.name}
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                {skill.status}
              </span>
            </div>
            <ProgressBar
              value={skill.progress}
              aria-label={`Progreso de ${skill.name}: ${skill.progress}%`}
            />
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-border-soft pt-6">
        <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted">
          Próximos pasos
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
