import { z } from 'zod';
import type { TFunction } from 'i18next';
import { createNameSchema, createEmailSchema, createMessageSchema } from './common.schema';

export const createContactSchema = (t: TFunction) =>
  z.object({
    name: createNameSchema(t),
    email: createEmailSchema(t),
    message: createMessageSchema(t),
  });

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export const contactFormDefaultValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
};
