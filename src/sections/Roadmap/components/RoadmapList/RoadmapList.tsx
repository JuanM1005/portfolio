import { RoadmapCard } from '../RoadmapCard/RoadmapCard';
import { ROADMAPS } from '../../constants/roadmap.constants';

export const RoadmapList = () => {
  return (
    <ol>
      {ROADMAPS.map((item, index) => (
        <RoadmapCard
          key={item.eyebrowNumber}
          {...item}
          isFirst={index === 0}
          isLast={index === ROADMAPS.length - 1}
        />
      ))}
    </ol>
  );
};
