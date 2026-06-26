import { SectionLayout, SectionHeader } from '@/components/ui';

export const Contact = () => {
  return (
    <SectionLayout
      id="contact"
      containerClassName="py-16 md:py-24"
    >
      <SectionHeader
        eyebrowNumber="06"
        eyebrowLabel="Contacto"
        title="¿Construimos algo juntos?"
        description="Estoy disponible para prácticas, proyectos y oportunidades. Si quieres saludar o tienes una propuesta, escríbeme."
      />

    </SectionLayout>
  );
};
