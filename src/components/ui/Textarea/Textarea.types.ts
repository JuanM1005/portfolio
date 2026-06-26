import type { TextareaHTMLAttributes } from 'react';

export interface CharacterCounterProps {
  current: number;
  max: number;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
  resize?: boolean
}