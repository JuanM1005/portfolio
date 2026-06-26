import { RoadmapCard } from '../RoadmapCard/RoadmapCard';
import { ROADMAPS } from '../../constants/roadmap.constants';

export const RoadmapList = () => {
  return (
    <ol>
      {ROADMAPS.map((roadmap, index) => (
        <RoadmapCard
          key={roadmap.eyebrowNumber}
          {...roadmap}
          isFirst={index === 0}
          isLast={index === ROADMAPS.length - 1}
        />
      ))}
    </ol>
  );
};
