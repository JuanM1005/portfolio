import { SectionHeader, SectionLayout } from '@/components/ui';
import {
  SkillsBaseCard,
  SkillsLearningCard,
  SoftSkillsCard,
  SkillsHeader,
} from './components';

export const Skills = () => {
  return (
    <SectionLayout id="skills" containerClassName="p-14">
      <SectionHeader
        eyebrowNumber="02"
        eyebrowLabel="Habilidades"
        title="Lo que domino hoy, y lo que estoy aprendiendo."
        description="Separo mi base académica de lo que apenas estoy construyendo. Honestidad ante todo: el progreso de aprendizaje es autoevaluado y está en práctica activa."
      />

      <div className="space-y-10">
        <div>
          <SkillsHeader title="Hard skills" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <SkillsBaseCard />
            <SkillsLearningCard />
          </div>
        </div>

        <div>
          <SkillsHeader title="Soft skills" />
          <SoftSkillsCard />
        </div>
      </div>
    </SectionLayout>
  );
};
