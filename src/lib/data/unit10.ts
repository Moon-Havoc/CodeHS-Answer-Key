import { Exercise } from '../types';

export const unit10Exercises: Exercise[] = [
  {
    id: 'u10-l1-e1', number: 1, title: 'Final Project', description: 'Build a number guessing game that takes user input and gives hints.', difficulty: 'hard', type: 'coding',
    lessonId: 'u10-l1', unitId: 'u10',
    starterCode: `# Number Guessing Game\nimport random\n\n`,
    solution: `import random\n\nsecret = random.randint(1, 100)\nguess = 0\n\nwhile guess != secret:\n    guess = int(input("Guess a number (1-100): "))\n    if guess < secret:\n        print("Too low!")\n    elif guess > secret:\n        print("Too high!")\n    else:\n        print("You got it!")`,
    explanation: {
      overview: 'Combine everything you\'ve learned: loops, conditionals, input, and random.',
      steps: [
        { number: 1, title: 'Generate Secret', content: 'Use random.randint().', code: 'secret = random.randint(1, 100)' },
        { number: 2, title: 'Loop Until Correct', content: 'Use while loop.', code: 'while guess != secret:' },
        { number: 3, title: 'Get Input', content: 'Use input() and convert to int.', code: 'guess = int(input("Guess: "))' },
        { number: 4, title: 'Give Hints', content: 'Use if/elif/else.', code: 'if guess < secret:\n    print("Too low!")' }
      ],
      keyConcepts: ['Loops', 'Conditionals', 'Input', 'Random'],
      commonMistakes: ['Not converting input to int', 'Infinite loop', 'Off-by-one'],
      relatedTopics: []
    },
    hints: ['Use while loop', 'Convert input to int', 'Give hints with if/elif'],
    tags: ['python', 'project', 'guessing_game'], estimatedTime: '20 mins'
  }
];
