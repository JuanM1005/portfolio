import { SectionHeader, SectionLayout } from '@/components/ui';
import {
  SkillsBaseCard,
  SkillsLearningCard,
  SoftSkillsCard,
  SkillsHeader,
} from './components';

export const Skills = () => {
  return (
    <SectionLayout id="skills" containerClassName="py-16 md:py-24">
      <SectionHeader
        eyebrowNumber="02"
        eyebrowLabel="Habilidades"
        title="Herramientas que uso, bases que sostienen mi aprendizaje."
        description="Mi perfil combina fundamentos de programación con práctica frontend moderna. Distingo lo que ya he aplicado en proyectos de lo que sigo reforzando, para mostrar un avance claro y honesto."
      />

      <div className="space-y-10">
        <div>
          <SkillsHeader title="Habilidades técnicas" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <SkillsBaseCard />
            <SkillsLearningCard />
          </div>
        </div>

        <div>
          <SkillsHeader title="Forma de trabajo" />
          <SoftSkillsCard />
        </div>
      </div>
    </SectionLayout>
  );
};
