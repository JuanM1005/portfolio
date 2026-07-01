import { useTranslation } from 'react-i18next';
import { FormProvider } from 'react-hook-form';
import { Input, Textarea, Button } from '@/components/ui';
import { MESSAGE_MAX_LENGTH } from '../../constants/contact.constants';
import { useContactForm } from '../../hooks';

export const ContactForm = () => {
  const { t } = useTranslation();
  const { methods, onSubmit, isSubmitting } = useContactForm();
  const { handleSubmit } = methods

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
            autoComplete="name"
            placeholder={t('contact.form.namePlaceholder')}
          />

          <Input
            label={t('contact.form.email')}
            name="email"
            type="email"
            autoComplete="email"
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
