import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import type { InputProps } from './Input.types';
import { fieldBase, fieldError } from './field.styles';

export const Input = ({
  label,
  hint,
  id,
  name,
  fullWidth = false,
  className,
  ...rest
}: InputProps) => {
  const inputId = id ?? name;

  const {
    register,
    formState: { errors }
  } = useFormContext();

  const errorMessage = typeof errors[name]?.message === 'string' ? errors[name]?.message : undefined;

  const descriptionId =
    errorMessage || hint ? `${inputId}-description` : undefined;

  return (
    <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
      <input
        id={inputId}
        className={clsx(
          fieldBase,
          'px-3 py-2',
          errorMessage && fieldError,
          className
        )}
        aria-invalid={errorMessage ? true : undefined}
        aria-describedby={descriptionId}
        {...rest}
        {...register(name)}
      />

      <label
        htmlFor={inputId}
        className="order-1 font-mono text-[11px] font-medium uppercase text-ink-soft/80 transition-colors peer-focus:text-burgundy-600"
      >
        {label}
      </label>

      {errorMessage ? (
        <span id={descriptionId} className="order-3 mt-2 text-xs text-red-500">
          {errorMessage}
        </span>
      ) : hint ? (
        <span id={descriptionId} className="order-3 mt-2 text-xs text-ink-muted">
          {hint}
        </span>
      ) : null}
    </div>
  );
};