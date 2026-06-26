import { EducationCard } from '../EducationCard/EducationCard';
import { EDUCATIONS } from '../../constants/education.constants';

export const EducationList = () => {
  return (
    <ul className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2">
        {EDUCATIONS.map((education) => (
          <EducationCard
            key={education.eyebrow}
            {...education}
          />
        ))}
    </ul>
  );
};
