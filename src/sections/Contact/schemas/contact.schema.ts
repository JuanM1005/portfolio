import { z } from 'zod';
import { nameSchema, emailSchema, messageSchema } from './common.schema';

export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: messageSchema,
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaultValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
};
