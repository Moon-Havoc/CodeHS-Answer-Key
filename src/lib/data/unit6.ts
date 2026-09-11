import { Exercise } from '../types';

export const unit6Exercises: Exercise[] = [
  {
    id: 'u6-l1-e1', number: 1, title: 'List Basics', description: 'Create a list and access its elements.', difficulty: 'easy', type: 'coding',
    lessonId: 'u6-l1', unitId: 'u6',
    starterCode: `# Create and access a list\n\n`,
    solution: `fruits = ["apple", "banana", "cherry"]\nprint(fruits[0])\nprint(fruits[1])\nprint(fruits[2])`,
    explanation: {
      overview: 'Lists store multiple values in order.',
      steps: [
        { number: 1, title: 'Create List', content: 'Use square brackets.', code: 'fruits = ["apple", "banana", "cherry"]' },
        { number: 2, title: 'Access Elements', content: 'Use indexing.', code: 'print(fruits[0])  # apple' }
      ],
      keyConcepts: ['Lists', 'Indexing', 'Zero-based indexing'],
      commonMistakes: ['Index out of range', 'Wrong index'],
      relatedTopics: ['u6-l2-e1']
    },
    hints: ['Use [] to create lists', 'Indexing starts at 0'],
    tags: ['python', 'lists', 'indexing'], estimatedTime: '5 mins'
  },
  {
    id: 'u6-l2-e1', number: 2, title: 'List Methods', description: 'Use append, remove, and len with lists.', difficulty: 'easy', type: 'coding',
    lessonId: 'u6-l2', unitId: 'u6',
    starterCode: `# Use list methods\n\n`,
    solution: `fruits = ["apple", "banana"]\nfruits.append("cherry")\nprint(fruits)\n\nfruits.remove("banana")\nprint(fruits)\n\nprint(len(fruits))`,
    explanation: {
      overview: 'Lists have built-in methods for common operations.',
      steps: [
        { number: 1, title: 'Append', content: 'Add to the end.', code: 'fruits.append("cherry")' },
        { number: 2, title: 'Remove', content: 'Remove an item.', code: 'fruits.remove("banana")' },
        { number: 3, title: 'Length', content: 'Get the count.', code: 'print(len(fruits))' }
      ],
      keyConcepts: ['append()', 'remove()', 'len()'],
      commonMistakes: ['Removing non-existent item', 'Wrong method name'],
      relatedTopics: ['u6-l1-e1']
    },
    hints: ['append() adds to end', 'remove() deletes by value', 'len() counts items'],
    tags: ['python', 'lists', 'methods'], estimatedTime: '5 mins'
  }
];
