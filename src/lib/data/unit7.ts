import { Exercise } from '../types';

export const unit7Exercises: Exercise[] = [
  {
    id: 'u7-l1-e1', number: 1, title: 'String Methods', description: 'Use upper, lower, and strip on strings.', difficulty: 'easy', type: 'coding',
    lessonId: 'u7-l1', unitId: 'u7',
    starterCode: `# Use string methods\n\n`,
    solution: `text = "  Hello World  "\nprint(text.upper())\nprint(text.lower())\nprint(text.strip())`,
    explanation: {
      overview: 'Strings have built-in methods for common operations.',
      steps: [
        { number: 1, title: 'upper()', content: 'Convert to uppercase.', code: 'print(text.upper())' },
        { number: 2, title: 'lower()', content: 'Convert to lowercase.', code: 'print(text.lower())' },
        { number: 3, title: 'strip()', content: 'Remove whitespace.', code: 'print(text.strip())' }
      ],
      keyConcepts: ['upper()', 'lower()', 'strip()'],
      commonMistakes: ['Methods return new strings', 'Not storing the result'],
      relatedTopics: ['u2-l1-e2']
    },
    hints: ['upper() makes it uppercase', 'lower() makes it lowercase', 'strip() removes spaces'],
    tags: ['python', 'strings', 'methods'], estimatedTime: '5 mins'
  }
];
