import { useTranslation } from 'react-i18next';
import { SectionHeader, SectionLayout } from '@/components/ui';
import {
  SkillsBaseCard,
  SkillsLearningCard,
  SoftSkillsCard,
  SkillsHeader,
} from './components';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="skills" containerClassName="py-16 md:py-24">
      <SectionHeader
        eyebrowNumber="02"
        eyebrowLabel={t('skills.eyebrow')}
        title={t('skills.title')}
        description={t('skills.description')}
      />

      <div className="space-y-10">
        <div>
          <SkillsHeader title={t('skills.groups.technical')} />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <SkillsBaseCard />
            <SkillsLearningCard />
          </div>
        </div>

        <div>
          <SkillsHeader title={t('skills.groups.workStyle')} />
          <SoftSkillsCard />
        </div>
      </div>
    </SectionLayout>
  );
};
