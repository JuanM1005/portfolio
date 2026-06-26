import type { RoadmapStatus } from '../roadmap.types';

export const statusStyles: Record<
  RoadmapStatus,
  { node: string; badge: string }
> = {
  completed: {
    node: 'bg-burgundy-600 text-white border-transparent',
    badge: 'border-burgundy-100 bg-burgundy-50 text-burgundy-600',
  },
  inProgress: {
    node: 'border-2 border-burgundy-600 bg-surface-card ring-4 ring-burgundy-100 animate-glow',
    badge: 'border-transparent bg-burgundy-600 text-white',
  },
  next: {
    node: 'border border-border-soft bg-surface-card',
    badge: 'border-border-soft bg-surface-card text-ink-muted',
  },
  upcoming: {
    node: 'border border-border-soft bg-surface-card',
    badge: 'border-border-soft bg-surface-card text-ink-muted',
  },
  goal: {
    node: 'bg-ink text-white border-transparent',
    badge: 'border-transparent bg-ink text-white',
  },
};
