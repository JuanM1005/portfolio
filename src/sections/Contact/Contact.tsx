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
          title="¿Tienes una idea en mente?"
          description="Estoy abierto a prácticas profesionales, proyectos frontend y nuevas oportunidades donde pueda aportar, aprender y seguir creciendo. Si tienes una propuesta, una idea o simplemente quieres saludar, estaré encantado de leerte."
        />

        <ContactList />
      </section>

      <ContactForm />
    </SectionLayout>
  );
};
