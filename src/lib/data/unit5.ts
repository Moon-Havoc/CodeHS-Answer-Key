import { Exercise } from '../types';

export const unit5Exercises: Exercise[] = [
  {
    id: 'u5-l1-e1', number: 1, title: 'Say Hello', description: 'Define a function that prints "Hello!".', difficulty: 'easy', type: 'coding',
    lessonId: 'u5-l1', unitId: 'u5',
    starterCode: `# Define a function\n\n`,
    solution: `def say_hello():\n    print("Hello!")\n\nsay_hello()`,
    explanation: {
      overview: 'Functions are reusable blocks of code defined with def.',
      steps: [
        { number: 1, title: 'Define Function', content: 'Use def followed by the name and ().', code: 'def say_hello():\n    print("Hello!")' },
        { number: 2, title: 'Call Function', content: 'Use the name followed by ().', code: 'say_hello()' }
      ],
      keyConcepts: ['def keyword', 'Function definition', 'Function call'],
      commonMistakes: ['Forgetting def', 'Missing colon', 'Not calling the function'],
      relatedTopics: ['u5-l2-e1']
    },
    hints: ['Start with def', 'Add a colon', 'Call it at the end'],
    tags: ['python', 'functions', 'def'], estimatedTime: '5 mins'
  },
  {
    id: 'u5-l2-e1', number: 2, title: 'Greet Function', description: 'Define a function that takes a name and prints a greeting.', difficulty: 'easy', type: 'coding',
    lessonId: 'u5-l2', unitId: 'u5',
    starterCode: `# Function with parameter\n\n`,
    solution: `def greet(name):\n    print("Hello, " + name + "!")\n\ngreet("Alice")`,
    explanation: {
      overview: 'Parameters let functions accept input values.',
      steps: [
        { number: 1, title: 'Add Parameter', content: 'Put the parameter name in parentheses.', code: 'def greet(name):' },
        { number: 2, title: 'Use Parameter', content: 'Use it inside the function.', code: 'print("Hello, " + name + "!")' },
        { number: 3, title: 'Call with Value', content: 'Pass a value when calling.', code: 'greet("Alice")' }
      ],
      keyConcepts: ['Parameters', 'Arguments', 'Return values'],
      commonMistakes: ['Not passing arguments', 'Wrong parameter name'],
      relatedTopics: ['u5-l1-e1']
    },
    hints: ['Parameter goes in ()', 'Use it in the function', 'Pass value when calling'],
    tags: ['python', 'functions', 'parameters'], estimatedTime: '5 mins'
  },
  {
    id: 'u5-l3-e1', number: 3, title: 'Return Value', description: 'Define a function that returns the sum of two numbers.', difficulty: 'easy', type: 'coding',
    lessonId: 'u5-l3', unitId: 'u5',
    starterCode: `# Function with return\n\n`,
    solution: `def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)`,
    explanation: {
      overview: 'return sends a value back from the function.',
      steps: [
        { number: 1, title: 'Use return', content: 'return sends the result back.', code: 'return a + b' },
        { number: 2, title: 'Store Result', content: 'Capture the returned value.', code: 'result = add(3, 5)' }
      ],
      keyConcepts: ['return keyword', 'Return values', 'Storing results'],
      commonMistakes: ['Using print instead of return', 'Forgetting to store the result'],
      relatedTopics: ['u5-l2-e1']
    },
    hints: ['Use return not print', 'Store the result in a variable'],
    tags: ['python', 'functions', 'return'], estimatedTime: '5 mins'
  }
];
