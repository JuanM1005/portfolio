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
      'HTML, CSS y JavaScript. Maquetado responsivo y bases del lenguaje.',
    status: 'completed',
  },
  {
    eyebrowNumber: '02',
    title: 'React + TypeScript + Tailwind',
    description:
      'Componentes, estado, tipado estático y diseño de interfaces modernas.',
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
      'JavaScript del lado del servidor y entorno de ejecución backend.',
    status: 'upcoming',
  },
  {
    eyebrowNumber: '05',
    title: 'Express & APIs propias',
    description: 'Construcción de endpoints, rutas y lógica de servidor.',
    status: 'upcoming',
  },
  {
    eyebrowNumber: '06',
    title: 'Bases de datos',
    description:
      'Reforzar SQL y modelado sobre mi base académica con PostgreSQL.',
    status: 'upcoming',
  },
  {
    eyebrowNumber: '07',
    title: 'Proyecto Full Stack',
    description:
      'Una aplicación completa de punta a punta. El objetivo de todo el camino.',
    status: 'goal',
  },
];
