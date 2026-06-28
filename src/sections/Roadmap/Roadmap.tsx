import { useTranslation } from 'react-i18next';
import { SectionLayout, SectionHeader } from '@/components/ui';
import { RoadmapList } from './components';

export const Roadmap = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="roadmap" containerClassName="py-16 md:py-24">
      <SectionHeader
        eyebrowNumber="04"
        eyebrowLabel={t('roadmap.eyebrow')}
        title={t('roadmap.title')}
        description={t('roadmap.description')}
      />

      <RoadmapList />
    </SectionLayout>
  );
};
