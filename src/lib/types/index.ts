export interface Unit {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  description: string;
  unitId: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  number: number;
  title: string;
  codehsCode?: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'karel' | 'coding' | 'multiple_choice' | 'fill_in';
  lessonId: string;
  unitId: string;
  starterCode?: string;
  solution: string;
  explanation: Explanation;
  hints: string[];
  tags: string[];
  estimatedTime: string;
}

export interface Explanation {
  overview: string;
  steps: Step[];
  keyConcepts: string[];
  commonMistakes: string[];
  relatedTopics: string[];
}

export interface Step {
  number: number;
  title: string;
  content: string;
  code?: string;
}

export interface Progress {
  completedExercises: string[];
  lastAccessed: Record<string, number>;
  startedAt: number;
}
