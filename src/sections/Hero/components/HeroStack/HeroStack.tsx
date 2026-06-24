import { HERO_STACK } from '../../constants/hero.constants';

export const HeroStack = () => {
  return (
    <div className="mt-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
        Stack actual
      </p>
      <div className="flex flex-wrap gap-2">
        {HERO_STACK.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border-soft bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
