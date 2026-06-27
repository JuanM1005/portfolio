export interface SkillItem {
  id: string;
  name: string;
}

export interface LearningSkill {
  id: string;
  name: string;
  statusKey: 'practicing' | 'learning';
  progress: number; // 0-100
}
