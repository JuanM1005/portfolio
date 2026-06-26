import clsx from 'clsx';
import type { InputProps } from './Input.types';

export const Input = ({
  label,
  error,
  hint,
  fullWidth = false,
  className,
  ...rest
}: InputProps) => {
  const inputId = rest.id ?? rest.name;

  return (
    <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
      <label
        htmlFor={inputId}
        className="font-mono text-[11px] font-medium uppercase text-ink-soft/80 transition-colors peer-focus:text-burgundy-600"
      >
        {label}
      </label>

      <input
        id={inputId}
        className={clsx(
          'peer w-full rounded-lg border border-border-soft bg-surface px-3 py-2 text-sm text-ink transition-[border-color,box-shadow] placeholder:text-ink-muted focus-visible:border-burgundy-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600 disabled:cursor-not-allowed disabled:bg-surface-card-muted disabled:opacity-60',
          error &&
            'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/40',
          className,
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? `${inputId}-description` : undefined}
        {...rest}
      />

      {error ? (
        <span id={`${inputId}-description`} className="text-xs text-red-500">
          {error}
        </span>
      ) : hint ? (
        <span id={`${inputId}-description`} className="text-xs text-ink-muted">
          {hint}
        </span>
      ) : null}
    </div>
  );
};
