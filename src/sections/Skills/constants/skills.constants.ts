import type { SkillItem, LearningSkill } from '../types/skills.types';

export const HARD_SKILLS: SkillItem[] = [
  { name: 'C / C++', meta: 'POO · Estructuras de datos' },
  { name: 'Python', meta: 'Pandas · NumPy · Matplotlib' },
  { name: 'MySQL / SQLite', meta: 'Modelado y consultas' },
  { name: 'HTML & CSS', meta: 'Maquetado responsivo' },
  { name: 'Git & GitHub', meta: 'Control de versiones' },
];

export const SOFT_SKILLS: SkillItem[] = [
  { name: 'Disciplina y compromiso' },
  { name: 'Aprendizaje continuo' },
  { name: 'Trabajo en equipo' },
  { name: 'Adaptabilidad' },
  { name: 'Enfoque en mejora constante' },
];

export const LEARNING_SKILLS: LearningSkill[] = [
  { name: 'React', status: 'Aprendiendo', progress: 60 },
  { name: 'TypeScript', status: 'Aprendiendo', progress: 40 },
  { name: 'Tailwind CSS', status: 'Practicando', progress: 75 },
  { name: 'JavaScript moderno', status: 'Practicando', progress: 55 },
];

export const ROADMAP_NEXT: string[] = [
  'Node.js',
  'Express',
  'APIs REST',
  'Autenticación',
];
