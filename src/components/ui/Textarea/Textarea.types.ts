import type { TextareaHTMLAttributes } from 'react';

export interface CharacterCounterProps {
  current: number;
  max: number;
}

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
  resize?: boolean;
}