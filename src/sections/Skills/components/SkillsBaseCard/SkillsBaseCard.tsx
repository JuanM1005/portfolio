import { Card } from '@/components/ui';
import { HARD_SKILLS } from '../../constants/skills.constants';
import { SkillCardHeader } from '../SkillCardHeader/SkillCardHeader';

export const SkillsBaseCard = () => {
  return (
    <Card variant="ghost" size="md">
      <SkillCardHeader
        title="Base aplicada"
        eyebrow="Fundamentos"
        tone="available"
      />

      <ul className="divide-y divide-border-soft border-t border-border-soft">
        {HARD_SKILLS.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center justify-between gap-4 py-3.5"
          >
            <span className="text-sm font-medium text-ink md:text-base">
              {skill.name}
            </span>
            <span className="font-mono text-xs text-ink-muted">
              {skill.meta}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
