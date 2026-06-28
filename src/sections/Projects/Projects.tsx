import { useTranslation } from 'react-i18next';
import { SectionLayout, SectionHeader } from '@/components/ui';
import { ProjectList } from './components';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout
      id="projects"
      className="bg-section"
      containerClassName="py-16 md:py-24"
    >
      <SectionHeader
        eyebrowNumber="03"
        eyebrowLabel={t('projects.eyebrow')}
        title={t('projects.title')}
        description={t('projects.description')}
      />

      <ProjectList />
    </SectionLayout>
  );
};
