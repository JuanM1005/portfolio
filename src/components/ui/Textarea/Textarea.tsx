import clsx from 'clsx';
import type { TextareaProps } from './Textarea.types';
import CharacterCounter from './CharacterCounter';

export const Textarea = ({
  label,
  error,
  hint,
  fullWidth = false,
  resize,
  className,
  ...rest
}: TextareaProps) => {
  const textareaId = rest.id ?? rest.name;

  const currentLength = rest.value ? String(rest.value).length : 0;
  const { maxLength } = rest;

  return (
    <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
      <label
        htmlFor={textareaId}
        className="font-mono text-[11px] font-medium uppercase text-ink-soft/80 transition-colors peer-focus:text-burgundy-500"
      >
        {label}
      </label>

      <textarea
        id={textareaId}
        className={clsx(
          'peer w-full min-h-52 rounded-lg border border-border-soft bg-surface px-3 py-3 text-sm text-ink transition-[border-color,box-shadow] placeholder:text-ink-muted focus-visible:border-burgundy-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 disabled:cursor-not-allowed disabled:resize-none disabled:bg-surface-card-muted disabled:opacity-60',
          resize ? 'resize-y' : 'resize-none',
          error &&
            'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/40',
          className,
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error || hint ? `${textareaId}-description` : undefined
        }
        {...rest}
      ></textarea>

      {(error || hint || Boolean(maxLength)) && (
        <div className="flex items-center justify-between">
          {error ? (
            <span
              id={`${textareaId}-description`}
              className="text-xs text-red-500"
            >
              {error}
            </span>
          ) : hint ? (
            <span
              id={`${textareaId}-description`}
              className="text-xs text-ink-muted"
            >
              {hint}
            </span>
          ) : (
            <span />
          )}

          {maxLength && (
            <CharacterCounter current={currentLength} max={maxLength} />
          )}
        </div>
      )}
    </div>
  );
};
