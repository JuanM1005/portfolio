import { SectionLayout, SectionHeader } from '@/components/ui';
import { ContactList, ContactForm } from './components';

export const Contact = () => {
  return (
    <SectionLayout
      id="contact"
      containerClassName="grid grid-cols-1 gap-8 md:grid-cols-2 py-16 md:py-24"
    >
      <section className="flex flex-col max-w-lg">
        <SectionHeader
          eyebrowNumber="06"
          eyebrowLabel="Contacto"
          title="¿Construimos algo juntos?"
          description="Estoy disponible para prácticas, proyectos y oportunidades. Si quieres saludar o tienes una propuesta, escríbeme."
        />

        <ContactList />
      </section>

      <ContactForm />
    </SectionLayout>
  );
};
