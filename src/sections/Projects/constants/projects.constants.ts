import type { ProjectProps, ProjectStatus } from '../projects.types';

export const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; variant: 'available' | 'progress' | 'upcoming' }
> = {
  completed: { label: 'Completado', variant: 'available' },
  inProgress: { label: 'En desarrollo', variant: 'progress' },
  upcoming: { label: 'Próximo', variant: 'upcoming' },
};

export const PROJECTS: ProjectProps[] = [
  {
    title: 'PetCare',
    description:
      'Aplicación web para clínicas veterinarias pequeñas y medianas, pensada para organizar pacientes, citas e historial clínico con una base frontend escalable.',
    status: 'inProgress',
    category: 'Académico',
    learned:
      'Organización feature-based, componentes reutilizables con Tailwind CSS v4 y planificación de una experiencia PWA offline-first.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite', 'PWA'],
    repoUrl: 'https://github.com/JuanM1005/petcare-frontend-demo',
  },
  {
    title: 'QuickNotes',
    description:
      'Aplicación de notas con búsqueda, filtros, sidebar y persistencia local, enfocada en una experiencia simple para capturar y encontrar información rápido.',
    status: 'completed',
    category: 'Personal',
    learned:
      'Gestión de estado en React, modelado de interacciones de UI y persistencia de datos con localStorage.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Bun'],
    repoUrl: 'https://github.com/JuanM1005/QuickNotes',
  },
  {
    title: 'FrameLix',
    description:
      'SPA de catálogo de películas que consume la API de TMDB, permite consultar detalles por película y organiza la navegación con React Router.',
    status: 'completed',
    category: 'Académico',
    learned:
      'Consumo de APIs REST, manejo de rutas, colaboración con Git y despliegue de una aplicación frontend en Netlify.',
    tags: ['React', 'Vite', 'React Router', 'Axios', 'TMDB API'],
    repoUrl: 'https://github.com/JuanM1005/practica7-react-peliculas',
  },
  {
    title: 'VetCare Software',
    description:
      'Sistema de escritorio para gestión veterinaria: citas, clientes, pacientes, historial médico, vacunación e inventario en un flujo centralizado.',
    status: 'completed',
    category: 'Académico',
    learned:
      'Modelado de datos relacional, diseño de interfaces de escritorio y coordinación de trabajo en equipo con Git.',
    tags: ['Python', 'CustomTkinter', 'PostgreSQL', 'SQLite'],
    collaborators: [
      { label: '@Darklong15', url: 'https://github.com/Darklong15' },
      { label: '@RenataAC4', url: 'https://github.com/RenataAC4' },
    ],
    repoUrl: 'https://github.com/juanm1005/VetCare-Software',
  },
  {
    title: 'TechNest Store',
    description:
      'Sistema de administración para una tienda de tecnología, desarrollado en C++ con POO para gestionar inventario, proveedores y pedidos.',
    status: 'completed',
    category: 'Académico',
    learned:
      'Aplicación de POO, separación de responsabilidades y diseño básico de sistemas de gestión.',
    tags: ['C++', 'POO', 'Gestión'],
    collaborators: [
      { label: '@Lancercrack25', url: 'https://github.com/Lancercrack25' },
    ],
    repoUrl: 'https://github.com/JuanM1005/TechNest-Store',
  },
  {
    title: 'Estructuras de Datos',
    description:
      'Colección de estructuras de datos y algoritmos implementados desde cero para reforzar lógica, recorrido de datos y razonamiento algorítmico.',
    status: 'completed',
    category: 'Académico',
    learned:
      'Comprensión práctica de eficiencia, organización de datos y solución de problemas desde fundamentos.',
    tags: ['C++', 'Algoritmos', 'Lógica'],
    repoUrl: 'https://github.com/JuanM1005/Estructura-de-datosj',
  },
];
