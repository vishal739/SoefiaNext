// types.ts
export interface FormationOption {
    id: string;
    label: 'Alphabetic' | 'Heterogenous' | 'Homogenous' | 'Random';
    value: string;
  }
  
  export interface NamingOption {
    id: string;
    label: 'Colors' | 'Letters' | 'Numbers';
    value: string;
  }
  
  export interface LessonFormData {
    class: string;
    topic: string;
    date: string;
    formation: string;
    naming: string;
    groupCount: number;
    objective: string;
    standard: string;
    description: string;
    activity: string;
    materials: string;
    activitySocialGoal: string;
    activityAcademicGoal: string;
    homework: string;
  }