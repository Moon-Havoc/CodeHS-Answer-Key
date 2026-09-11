import { Exercise } from '../types';

export const unit8Exercises: Exercise[] = [
  {
    id: 'u8-l1-e1', number: 1, title: 'Dictionary Basics', description: 'Create and access a dictionary.', difficulty: 'easy', type: 'coding',
    lessonId: 'u8-l1', unitId: 'u8',
    starterCode: `# Create a dictionary\n\n`,
    solution: `person = {"name": "Alice", "age": 15, "grade": "A"}\nprint(person["name"])\nprint(person["age"])`,
    explanation: {
      overview: 'Dictionaries store key-value pairs.',
      steps: [
        { number: 1, title: 'Create Dict', content: 'Use curly braces with key:value pairs.', code: 'person = {"name": "Alice", "age": 15}' },
        { number: 2, title: 'Access Values', content: 'Use the key in brackets.', code: 'print(person["name"])' }
      ],
      keyConcepts: ['Dictionaries', 'Key-value pairs', 'Access by key'],
      commonMistakes: ['Using wrong key', 'Key not found'],
      relatedTopics: ['u8-l2-e1']
    },
    hints: ['Use {} for dicts', 'Access with ["key"]'],
    tags: ['python', 'dictionaries'], estimatedTime: '5 mins'
  }
];
