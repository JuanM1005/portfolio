import type { ProjectProps, ProjectStatus } from '../types/projects.types';

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
      'Aplicación web para la gestión de clínicas veterinarias pequeñas y medianas. Incluye gestión de pacientes, citas e historial clínico, con arquitectura feature-based y visión PWA offline-first.',
    status: 'inProgress',
    category: 'Académico',
    learned:
      'Arquitectura feature-based, sistema de diseño con Tailwind CSS v4 y preparación para PWA offline-first.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite', 'PWA'],
    repoUrl: 'https://github.com/JuanM1005/petcare-frontend-demo',
  },
  {
    title: 'QuickNotes',
    description:
      'App de notas desarrollada con React, TypeScript y Tailwind CSS, con búsqueda, filtros, sidebar y persistencia en localStorage.',
    status: 'completed',
    category: 'Personal',
    learned:
      'Gestión de estado en React, diseño de UI con Tailwind CSS v4 y persistencia de datos en localStorage.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Bun'],
    repoUrl: 'https://github.com/JuanM1005/QuickNotes',
  },
  {
    title: 'FrameLix',
    description:
      'Aplicación SPA de catálogo de películas que consume la API de TMDB, con detalle por película, enrutamiento con React Router y despliegue en Netlify.',
    status: 'completed',
    category: 'Académico',
    learned:
      'Consumo de APIs REST, enrutamiento con React Router, trabajo colaborativo con Git y despliegue en Netlify.',
    tags: ['React', 'Vite', 'React Router', 'Axios', 'TMDB API'],
    repoUrl: 'https://github.com/JuanM1005/practica7-react-peliculas',
  },
  {
    title: 'VetCare Software',
    description:
      'Sistema integral de gestión veterinaria con interfaz gráfica de escritorio: citas, clientes, pacientes, historial médico, control de vacunación e inventario.',
    status: 'completed',
    category: 'Académico',
    learned:
      'Modelado de datos relacional, diseño de interfaces de escritorio y trabajo en equipo con Git.',
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
      'Sistema de administración para una tienda de tecnología desarrollado en C++ con Programación Orientada a Objetos para gestionar inventario, proveedores y pedidos.',
    status: 'completed',
    category: 'Académico',
    learned:
      'Programación orientada a objetos, modularización y diseño de sistemas de gestión.',
    tags: ['C++', 'POO', 'Gestión'],
    collaborators: [
      { label: '@Lancercrack25', url: 'https://github.com/Lancercrack25' },
    ],
    repoUrl: 'https://github.com/JuanM1005/TechNest-Store',
  },
  {
    title: 'Estructuras de Datos',
    description:
      'Colección de estructuras de datos (árboles, listas, pilas, colas, matrices) y algoritmos de ordenamiento implementados desde cero para optimizar la lógica computacional.',
    status: 'completed',
    category: 'Académico',
    learned: 'Fundamentos de eficiencia algorítmica y lógica computacional.',
    tags: ['C++', 'Algoritmos', 'Lógica'],
    repoUrl: 'https://github.com/JuanM1005/Estructura-de-datosj',
  },
];
