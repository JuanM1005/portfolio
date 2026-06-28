import { useTranslation } from 'react-i18next';
import { FiChevronRight, FiTerminal } from 'react-icons/fi';
import { CursorBlink } from '@/components/ui';
import { HERO_TERMINAL } from '../../constants/hero.constants';

export const HeroTerminal = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg bg-surface/80 text-sm font-mono overflow-hidden shadow-lg">
      {/* Barra superior */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-ink-muted/15">
        <span className="size-3 rounded-full bg-red-400" aria-hidden="true" />
        <span
          className="size-3 rounded-full bg-yellow-400"
          aria-hidden="true"
        />
        <span className="size-3 rounded-full bg-green-400" aria-hidden="true" />
        <span className="ml-auto flex items-center gap-1.5 text-xs text-ink-muted/60">
          <FiTerminal size={14} aria-hidden="true" />
          {HERO_TERMINAL.user}@{HERO_TERMINAL.host}
        </span>
      </div>

      {/* Cuerpo del terminal */}
      <div className="p-4 space-y-3 text-ink-muted">
        {/* Comando 1: whoami */}
        <div>
          <p>
            <span className="text-ink-muted">~</span>{' '}
            <FiChevronRight
              className="text-emerald-500 inline"
              size={14}
              aria-hidden="true"
            />
            {' whoami'}
          </p>
          <p className="mt-1 pl-4">{t('hero.terminal.subtitle')}</p>
        </div>

        {/* Comando 2: cat stack.txt */}
        <div>
          <p>
            <span className="text-ink-muted">~</span>{' '}
            <FiChevronRight
              className="text-emerald-500 inline"
              size={14}
              aria-hidden="true"
            />
            {' cat stack.txt'}
          </p>
          <p className="mt-1 pl-4">
            {t('hero.terminal.focus')}{' '}
            <span className="text-burgundy-500">→</span>{' '}
            {t('hero.terminal.focusSuffix')}
          </p>
          <p className="pl-4">
            <span className="text-emerald-500">
              {t('hero.terminal.baseLabel')}
            </span>{' '}
            C++ · Python · SQL
          </p>
          <p className="pl-4">
            <span className="text-status-progress">
              {t('hero.terminal.practiceLabel')}
            </span>{' '}
            React · TypeScript · Tailwind
          </p>
        </div>

        {/* Prompt vacío con cursor */}
        <p className="flex items-center gap-1">
          <span className="text-ink-muted">~</span>{' '}
          <FiChevronRight
            className="text-emerald-500 inline"
            size={14}
            aria-hidden="true"
          />{' '}
          <CursorBlink variant="ink" />
        </p>
      </div>
    </div>
  );
};
