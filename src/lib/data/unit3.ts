import { Exercise } from '../types';

export const unit3Exercises: Exercise[] = [
  {
    id: 'u3-l1-e1',
    number: 1,
    title: 'Boolean Variables',
    description: 'Create boolean variables and use them in conditions.',
    difficulty: 'easy',
    type: 'coding',
    lessonId: 'u3-l1',
    unitId: 'u3',
    starterCode: `# Create boolean variables\n\n`,
    solution: `is_sunny = True\nis_raining = False\n\nif is_sunny:\n    print("It's sunny!")\n\nif is_raining:\n    print("It's raining!")\nelse:\n    print("It's not raining!")`,
    explanation: {
      overview: 'Booleans represent True or False. Use them in if statements.',
      steps: [
        { number: 1, title: 'Create Booleans', content: 'Store True or False.', code: 'is_sunny = True\nis_raining = False' },
        { number: 2, title: 'Use in Conditions', content: 'Check with if.', code: 'if is_sunny:\n    print("It\'s sunny!")' }
      ],
      keyConcepts: ['Boolean values', 'if statements', 'Truthiness'],
      commonMistakes: ['lowercase true/false', 'Missing colon', 'Bad indentation'],
      relatedTopics: ['u3-l2-e1']
    },
    hints: ['True/False capitalized', 'Colon after if', 'Indent the block'],
    tags: ['python', 'booleans', 'if'],
    estimatedTime: '5 mins'
  },
  {
    id: 'u3-l2-e1',
    number: 2,
    title: 'Is It Raining?',
    description: 'Check the weather and give advice.',
    difficulty: 'easy',
    type: 'coding',
    lessonId: 'u3-l2',
    unitId: 'u3',
    starterCode: `weather = "rainy"\n`,
    solution: `weather = "rainy"\n\nif weather == "rainy":\n    print("Bring an umbrella!")\nelif weather == "sunny":\n    print("Wear sunscreen!")\nelse:\n    print("Have a good day!")`,
    explanation: {
      overview: 'if/elif/else checks multiple conditions.',
      steps: [
        { number: 1, title: 'First Condition', content: 'Use if.', code: 'if weather == "rainy":\n    print("Bring an umbrella!")' },
        { number: 2, title: 'More Conditions', content: 'Use elif.', code: 'elif weather == "sunny":\n    print("Wear sunscreen!")' },
        { number: 3, title: 'Default', content: 'Use else.', code: 'else:\n    print("Have a good day!")' }
      ],
      keyConcepts: ['== comparison', 'elif', 'else'],
      commonMistakes: ['= instead of ==', 'Missing colon', 'Bad indentation'],
      relatedTopics: ['u3-l1-e1']
    },
    hints: ['== compares, = assigns', 'elif = "else if"', 'Colon at end of condition'],
    tags: ['python', 'if', 'elif', 'else'],
    estimatedTime: '5 mins'
  }
];
