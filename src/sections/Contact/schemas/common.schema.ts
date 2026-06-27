import z from 'zod';
import { MESSAGE_MAX_LENGTH } from '../constants/contact.constants';

export const nameSchema = z.string().trim().min(1, 'El nombre es obligatorio');

export const emailSchema = z
  .email('Ingresa un correo válido')
  .trim()
  .min(1, 'El correo es obligatorio');

export const messageSchema = z
  .string()
  .trim()
  .min(1, 'El mensaje es obligatorio')
  .max(
    MESSAGE_MAX_LENGTH,
    `El mensaje no puede superar los ${MESSAGE_MAX_LENGTH} caracteres`,
  );
