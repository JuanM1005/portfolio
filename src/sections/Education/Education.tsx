import { SectionLayout, SectionHeader } from '@/components/ui';
import { EducationList } from './components/EducationList/EducationList';

export const Education = () => {
  return (
    <SectionLayout
      id="education"
      className="bg-section"
      containerClassName="py-16 md:py-24"
    >
      <SectionHeader
        eyebrowNumber="05"
        eyebrowLabel="Educación"
        title="Formación técnica aplicada a proyectos reales."
        description="Mi aprendizaje combina la base académica de Ingeniería Informática con práctica constante en desarrollo frontend. Busco que cada curso, proyecto y tecnología se traduzca en mejores decisiones de código, estructura e interfaz."
      />

      <EducationList />
    </SectionLayout>
  );
};
