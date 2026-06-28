import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Textarea, Button } from '@/components/ui';
import { MESSAGE_MAX_LENGTH } from '../../constants/contact.constants';
import toast from 'react-hot-toast';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  createContactSchema,
  contactFormDefaultValues,
  type ContactFormValues,
} from '../../schemas/contact.schema';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export const ContactForm = () => {
  const { t } = useTranslation();
  const schema = useMemo(() => createContactSchema(t), [t]);

  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: contactFormDefaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: ContactFormValues): Promise<void> => {
    try {
      if (!FORMSPREE_ENDPOINT) {
        toast.error(t('contact.toast.noEndpoint'));
        return;
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Request failed');

      toast.success(t('contact.toast.success'));
      reset();
    } catch {
      toast.error(t('contact.toast.error'));
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        className="rounded-3xl border border-ink-muted/30 bg-surface-card-muted p-6 md:p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input
            label={t('contact.form.name')}
            name="name"
            type="text"
            placeholder={t('contact.form.namePlaceholder')}
          />

          <Input
            label={t('contact.form.email')}
            name="email"
            type="email"
            placeholder={t('contact.form.emailPlaceholder')}
          />
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Textarea
            label={t('contact.form.message')}
            name="message"
            placeholder={t('contact.form.messagePlaceholder')}
            maxLength={MESSAGE_MAX_LENGTH}
          />

          <Button
            type="submit"
            variant="secondary"
            size="md"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('contact.form.submitting') : t('actions.send')}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
