import { useTranslation } from 'react-i18next';
import { SectionLayout, SectionHeader } from '@/components/ui';
import { ContactList, ContactForm } from './components';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout
      id="contact"
      containerClassName="grid grid-cols-1 gap-8 md:grid-cols-2 py-16 md:py-24"
    >
      <section className="flex flex-col max-w-lg">
        <SectionHeader
          eyebrowNumber="06"
          eyebrowLabel={t('contact.eyebrow')}
          title={t('contact.title')}
          description={t('contact.description')}
        />

        <ContactList />
      </section>

      <ContactForm />
    </SectionLayout>
  );
};
