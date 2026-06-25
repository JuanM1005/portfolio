export type RoadmapStatus =
  | 'completed'
  | 'inProgress'
  | 'next'
  | 'upcoming'
  | 'goal';

export interface RoadmapProps {
  eyebrowNumber: string;
  title: string;
  description?: string;
  status: RoadmapStatus;
}
