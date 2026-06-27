import { Input, Textarea, Button } from '@/components/ui';
import { MESSAGE_MAX_LENGTH } from '../../constants/contact.constants';
import toast from 'react-hot-toast';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  contactFormSchema,
  contactFormDefaultValues,
  type ContactFormValues
} from '../../schemas/contact.schema';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export const ContactForm = () => {
  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaultValues
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = methods;

  const onSubmit = async (data: ContactFormValues): Promise<void> => {
    try {
      if (!FORMSPREE_ENDPOINT) {
        toast.error('No se configuró el endpoint del formulario.');
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

      toast.success('Mensaje enviado correctamente');
      reset();
    } catch {
      toast.error('No se pudo enviar el mensaje. Inténtalo de nuevo.');
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
            label="Nombre"
            name="name"
            type="text"
            placeholder="Tu nombre"
          />

          <Input
            label="Correo"
            name="email"
            type="email"
            placeholder="Tu correo"
          />
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Textarea
            label="Mensaje"
            name="message"
            placeholder="¿En qué te puedo ayudar?"
            maxLength={MESSAGE_MAX_LENGTH}
          />

          <Button
            type="submit"
            variant="secondary"
            size="md"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};