import type { SkillItem, LearningSkill } from '../skills.types';

export const HARD_SKILLS: SkillItem[] = [
  { name: 'C / C++', meta: 'POO · lógica · estructuras' },
  { name: 'Python', meta: 'análisis · scripts · datos' },
  { name: 'MySQL / SQLite', meta: 'modelado · consultas' },
  { name: 'HTML & CSS', meta: 'semántica · responsive' },
  { name: 'Git & GitHub', meta: 'versionado · colaboración' },
];

export const SOFT_SKILLS: SkillItem[] = [
  { name: 'Disciplina para aprender con constancia' },
  { name: 'Cuidado por el detalle' },
  { name: 'Comunicación clara en equipo' },
  { name: 'Adaptabilidad ante nuevos retos' },
  { name: 'Apertura a feedback y mejora' },
];

export const LEARNING_SKILLS: LearningSkill[] = [
  { name: 'React', status: 'Practicando', progress: 60 },
  { name: 'TypeScript', status: 'Aprendiendo', progress: 40 },
  { name: 'Tailwind CSS', status: 'Practicando', progress: 75 },
  { name: 'JavaScript moderno', status: 'Aprendiendo', progress: 55 },
];

export const ROADMAP_NEXT: string[] = [
  'Node.js',
  'Express',
  'APIs REST',
  'Autenticación',
];
