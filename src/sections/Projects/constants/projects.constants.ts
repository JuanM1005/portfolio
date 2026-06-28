import type { ProjectProps, ProjectStatus } from '../projects.types';
import type { BadgeVariant } from '@/components/ui/Badge/Badge.types';

export const STATUS_CONFIG: Record<ProjectStatus, { variant: BadgeVariant }> = {
  completed: { variant: 'available' },
  inProgress: { variant: 'progress' },
  upcoming: { variant: 'upcoming' },
};

export const PROJECTS: ProjectProps[] = [
  {
    id: 'petcare',
    title: 'PetCare',
    status: 'inProgress',
    category: 'academic',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite', 'PWA'],
    repoUrl: 'https://github.com/JuanM1005/petcare-frontend-demo',
  },
  {
    id: 'quicknotes',
    title: 'QuickNotes',
    status: 'completed',
    category: 'personal',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Bun'],
    repoUrl: 'https://github.com/JuanM1005/QuickNotes',
  },
  {
    id: 'framelix',
    title: 'FrameLix',
    status: 'completed',
    category: 'academic',
    tags: ['React', 'Vite', 'React Router', 'Axios', 'TMDB API'],
    repoUrl: 'https://github.com/JuanM1005/practica7-react-peliculas',
  },
  {
    id: 'vetcare',
    title: 'VetCare Software',
    status: 'completed',
    category: 'academic',
    tags: ['Python', 'CustomTkinter', 'PostgreSQL', 'SQLite'],
    collaborators: [
      { label: '@Darklong15', url: 'https://github.com/Darklong15' },
      { label: '@RenataAC4', url: 'https://github.com/RenataAC4' },
    ],
    repoUrl: 'https://github.com/juanm1005/VetCare-Software',
  },
  {
    id: 'technest',
    title: 'TechNest Store',
    status: 'completed',
    category: 'academic',
    tags: ['C++', 'POO', 'Gestión'],
    collaborators: [
      { label: '@Lancercrack25', url: 'https://github.com/Lancercrack25' },
    ],
    repoUrl: 'https://github.com/JuanM1005/TechNest-Store',
  },
  {
    id: 'dataStructures',
    title: 'Estructuras de Datos',
    status: 'completed',
    category: 'academic',
    tags: ['C++', 'Algoritmos', 'Lógica'],
    repoUrl: 'https://github.com/JuanM1005/Estructura-de-datosj',
  },
];
