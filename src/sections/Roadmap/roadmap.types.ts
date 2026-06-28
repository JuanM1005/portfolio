export type RoadmapStatus =
  | 'completed'
  | 'inProgress'
  | 'next'
  | 'upcoming'
  | 'goal';

export interface RoadmapProps {
  eyebrowNumber: string;
  status: RoadmapStatus;
}
