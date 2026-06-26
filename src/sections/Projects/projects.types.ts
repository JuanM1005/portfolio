export type ProjectStatus = 'completed' | 'inProgress' | 'upcoming';

export interface Collaborator {
  label: string;
  url: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  status: ProjectStatus;
  category: string;
  learned: string;
  tags: string[];
  collaborators?: Collaborator[];
  repoUrl?: string;
}
