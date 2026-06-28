export type ProjectStatus = 'completed' | 'inProgress' | 'upcoming';
export type ProjectCategory = 'academic' | 'personal';

export interface Collaborator {
  label: string;
  url: string;
}

export interface ProjectProps {
  id: string;
  title: string;
  status: ProjectStatus;
  category: ProjectCategory;
  tags: string[];
  collaborators?: Collaborator[];
  repoUrl?: string;
}
