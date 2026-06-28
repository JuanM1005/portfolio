import z from 'zod';
import type { TFunction } from 'i18next';
import { MESSAGE_MAX_LENGTH } from '../constants/contact.constants';

export const createNameSchema = (t: TFunction) =>
  z.string().trim().min(1, t('contact.validation.nameRequired'));

export const createEmailSchema = (t: TFunction) =>
  z
    .email(t('contact.validation.emailInvalid'))
    .trim()
    .min(1, t('contact.validation.emailRequired'));

export const createMessageSchema = (t: TFunction) =>
  z
    .string()
    .trim()
    .min(1, t('contact.validation.messageRequired'))
    .max(
      MESSAGE_MAX_LENGTH,
      t('contact.validation.messageMax', { max: MESSAGE_MAX_LENGTH }),
    );
