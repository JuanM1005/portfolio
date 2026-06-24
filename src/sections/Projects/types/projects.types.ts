export type ProjectStatus = 'completed' | 'inProgress' | 'upcoming';

export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  category: string;
  learned: string;
  tags: string[];
  collaborators?: { label: string; url: string }[];
  repoUrl?: string;
}
