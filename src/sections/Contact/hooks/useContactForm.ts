import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import {
  createContactSchema,
  contactFormDefaultValues,
  type ContactFormValues,
} from '../schemas/contact.schema';
import { sendContactMessage, MissingEndpointError } from '../services';

export const useContactForm = () => {
  const { t } = useTranslation();
  const schema = useMemo(() => createContactSchema(t), [t]);

  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: contactFormDefaultValues,
  });

  const onSubmit = async (data: ContactFormValues): Promise<void> => {
    try {
      await sendContactMessage(data);
      toast.success(t('contact.toast.success'));
      methods.reset();
    } catch (error) {
      if (error instanceof MissingEndpointError) {
        toast.error(t('contact.toast.noEndpoint'));
      } else {
        toast.error(t('contact.toast.error'));
      }
    }
  };

  return {
    methods,
    onSubmit,
    isSubmitting: methods.formState.isSubmitting,
  };
};
