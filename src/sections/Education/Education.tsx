import { useTranslation } from 'react-i18next';
import { SectionLayout, SectionHeader } from '@/components/ui';
import { EducationList } from './components';

export const Education = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout
      id="education"
      className="bg-section"
      containerClassName="py-16 md:py-24"
    >
      <SectionHeader
        eyebrowNumber="05"
        eyebrowLabel={t('education.eyebrow')}
        title={t('education.title')}
        description={t('education.description')}
      />

      <EducationList />
    </SectionLayout>
  );
};
