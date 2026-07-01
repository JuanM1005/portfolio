import type { ContactFormValues } from '../schemas/contact.schema';

const CONTACT_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

/** Se lanza cuando falta configurar VITE_FORMSPREE_ENDPOINT. */
export class MissingEndpointError extends Error {}

export const sendContactMessage = async (data: ContactFormValues): Promise<void> => {
  if (!CONTACT_ENDPOINT) throw new MissingEndpointError();

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Request failed');
};
