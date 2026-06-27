import type { RoadmapProps, RoadmapStatus } from '../roadmap.types';

export const STATUS_CONFIG: Record<RoadmapStatus, { variant: RoadmapStatus }> =
  {
    completed: { variant: 'completed' },
    inProgress: { variant: 'inProgress' },
    next: { variant: 'next' },
    upcoming: { variant: 'upcoming' },
    goal: { variant: 'goal' },
  };

export const ROADMAPS: RoadmapProps[] = [
  { eyebrowNumber: '01', status: 'completed' },
  { eyebrowNumber: '02', status: 'completed' },
  { eyebrowNumber: '03', status: 'inProgress' },
  { eyebrowNumber: '04', status: 'upcoming' },
  { eyebrowNumber: '05', status: 'upcoming' },
  { eyebrowNumber: '06', status: 'upcoming' },
  { eyebrowNumber: '07', status: 'goal' },
];
