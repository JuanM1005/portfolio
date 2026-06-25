import type { RoadmapProps, RoadmapStatus } from '../roadmap.types';

export const STATUS_CONFIG: Record<
  RoadmapStatus,
  {
    label: string;
    variant: RoadmapStatus;
  }
> = {
  completed: { label: 'Completado', variant: 'completed' },
  inProgress: { label: 'En curso', variant: 'inProgress' },
  next: { label: 'Siguiente', variant: 'next' },
  upcoming: { label: 'Próximo', variant: 'upcoming' },
  goal: { label: 'Meta', variant: 'goal' },
};

export const ROADMAPS: RoadmapProps[] = [
  {
    eyebrowNumber: '01',
    title: 'Fundamentos Frontend',
    description:
      'HTML, CSS y JavaScript aplicados a maquetado responsivo, semántica y bases del lenguaje.',
    status: 'completed',
  },
  {
    eyebrowNumber: '02',
    title: 'React + TypeScript + Tailwind',
    description:
      'Componentes, estado, tipado estático y construcción de interfaces consistentes.',
    status: 'inProgress',
  },
  {
    eyebrowNumber: '03',
    title: 'Consumo de APIs REST',
    description: 'Fetch, datos asíncronos, manejo de estados de carga y error.',
    status: 'next',
  },
  {
    eyebrowNumber: '04',
    title: 'Node.js',
    description:
      'Primeros pasos con JavaScript del lado del servidor y estructura backend.',
    status: 'upcoming',
  },
  {
    eyebrowNumber: '05',
    title: 'Express & APIs propias',
    description: 'Construcción de endpoints, rutas, validaciones y lógica de servidor.',
    status: 'upcoming',
  },
  {
    eyebrowNumber: '06',
    title: 'Bases de datos',
    description:
      'Reforzar SQL, modelado relacional y persistencia con PostgreSQL.',
    status: 'upcoming',
  },
  {
    eyebrowNumber: '07',
    title: 'Proyecto Full Stack',
    description:
      'Una aplicación de punta a punta para integrar frontend, backend, datos y despliegue.',
    status: 'goal',
  },
];
