export interface SkillItem {
  name: string;
  meta?: string;
}

export interface LearningSkill {
  name: string;
  status: 'Aprendiendo' | 'Practicando';
  progress: number; // 0-100
}
