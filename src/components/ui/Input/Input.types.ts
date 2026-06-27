import type { InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'name'
> {
  label: string;
  name: string;
  hint?: string;
  fullWidth?: boolean;
}
