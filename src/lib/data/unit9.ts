import { Exercise } from '../types';

export const unit9Exercises: Exercise[] = [
  {
    id: 'u9-l1-e1', number: 1, title: 'Import Module', description: 'Import and use the random module.', difficulty: 'easy', type: 'coding',
    lessonId: 'u9-l1', unitId: 'u9',
    starterCode: `# Import and use random\n\n`,
    solution: `import random\n\nnum = random.randint(1, 10)\nprint(num)`,
    explanation: {
      overview: 'Modules add extra functionality to Python.',
      steps: [
        { number: 1, title: 'Import', content: 'Use import to load a module.', code: 'import random' },
        { number: 2, title: 'Use', content: 'Call module functions.', code: 'num = random.randint(1, 10)' }
      ],
      keyConcepts: ['import', 'Modules', 'random.randint()'],
      commonMistakes: ['Typo in module name', 'Not importing first'],
      relatedTopics: []
    },
    hints: ['import random', 'random.randint(a, b)'],
    tags: ['python', 'modules', 'import'], estimatedTime: '5 mins'
  }
];
