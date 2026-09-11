import { Exercise } from '../types';

export const unit4Exercises: Exercise[] = [
  {
    id: 'u4-l1-e1',
    number: 1,
    title: 'Counting Loop',
    description: 'Print numbers 1 through 10 with a while loop.',
    difficulty: 'easy',
    type: 'coding',
    lessonId: 'u4-l1',
    unitId: 'u4',
    starterCode: `# Print 1-10 with while loop\n\n`,
    solution: `count = 1\nwhile count <= 10:\n    print(count)\n    count = count + 1`,
    explanation: {
      overview: 'While loops repeat while a condition is true.',
      steps: [
        { number: 1, title: 'Initialize', content: 'Start count at 1.', code: 'count = 1' },
        { number: 2, title: 'Loop', content: 'While count <= 10.', code: 'while count <= 10:\n    print(count)\n    count = count + 1' },
        { number: 3, title: 'Increment', content: 'Add 1 each time.', code: 'count = count + 1' }
      ],
      keyConcepts: ['while loop', 'Counter variables', 'Incrementing'],
      commonMistakes: ['No increment = infinite loop', 'Wrong comparison', 'Off-by-one'],
      relatedTopics: ['u4-l2-e1']
    },
    hints: ['Start at 1', 'Loop while count <= 10', 'Increment each time'],
    tags: ['python', 'while', 'loops'],
    estimatedTime: '5 mins'
  },
  {
    id: 'u4-l2-e1',
    number: 2,
    title: 'For Loop Range',
    description: 'Print numbers 0-9 using a for loop with range().',
    difficulty: 'easy',
    type: 'coding',
    lessonId: 'u4-l2',
    unitId: 'u4',
    starterCode: `# Print 0-9 with for loop\n\n`,
    solution: `for i in range(10):\n    print(i)`,
    explanation: {
      overview: 'for loops iterate over a sequence. range() generates numbers.',
      steps: [
        { number: 1, title: 'Use range()', content: 'range(10) gives 0-9.', code: 'for i in range(10):\n    print(i)' }
      ],
      keyConcepts: ['for loop', 'range()', 'Iteration'],
      commonMistakes: ['range(10) is 0-9, not 1-10', 'Forgetting the colon'],
      relatedTopics: ['u4-l1-e1']
    },
    hints: ['range(10) gives 0 through 9', 'for i in range(...)', 'Colon at end'],
    tags: ['python', 'for', 'range', 'loops'],
    estimatedTime: '5 mins'
  }
];
