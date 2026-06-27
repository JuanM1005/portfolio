import type { SkillItem, LearningSkill } from '../skills.types';

export const HARD_SKILLS: SkillItem[] = [
  { id: 'cpp', name: 'C / C++' },
  { id: 'python', name: 'Python' },
  { id: 'sql', name: 'MySQL / SQLite' },
  { id: 'htmlCss', name: 'HTML & CSS' },
  { id: 'git', name: 'Git & GitHub' },
];

export const SOFT_SKILLS: SkillItem[] = [
  { id: 'discipline', name: 'discipline' },
  { id: 'detail', name: 'detail' },
  { id: 'communication', name: 'communication' },
  { id: 'adaptability', name: 'adaptability' },
  { id: 'feedback', name: 'feedback' },
];

export const LEARNING_SKILLS: LearningSkill[] = [
  { id: 'react', name: 'React', statusKey: 'practicing', progress: 60 },
  { id: 'typescript', name: 'TypeScript', statusKey: 'learning', progress: 40 },
  { id: 'tailwind', name: 'Tailwind CSS', statusKey: 'practicing', progress: 75 },
  { id: 'jsModerno', name: 'JavaScript moderno', statusKey: 'learning', progress: 55 },
];

export const ROADMAP_NEXT: string[] = [
  'Node.js',
  'Express',
  'APIs REST',
  'Autenticación',
];
