import { Exercise } from '../types';

export const unit2Exercises: Exercise[] = [
  // === 1.1 Introduction to Programming With Karel ===
  {
    id: 'u2-l1-e1', number: 1, title: 'Your First Karel Program', type: 'karel', difficulty: 'easy',
    lessonId: 'u2-l1', unitId: 'u2', estimatedTime: '5 mins',
    description: 'Move Karel across the street to the tennis ball at the far end, then pick it up.',
    starterCode: `# Move Karel to pick up the balls\n# Use move() to move forward\n# Use take_ball() to collect balls\n\n`,
    solution: `move()\nmove()\nmove()\nmove()\ntake_ball()`,
    explanation: {
      overview: 'Learn the basic Karel commands: move(), take_ball(), and turn_left(). These are the building blocks for all Karel programs.',
      steps: [
        { number: 1, title: 'Understand the Goal', content: 'Karel needs to move from her starting position to the balls. The balls are 2 spaces forward, then 1 more space after the first ball.' },
        { number: 2, title: 'Move Forward', content: 'Use move() twice to reach the first ball.', code: 'move()\nmove()' },
        { number: 3, title: 'Pick Up the Ball', content: 'Use take_ball() to collect it.', code: 'move()\nmove()\ntake_ball()' },
        { number: 4, title: 'Complete the Journey', content: 'Move forward one more and pick up the second ball.', code: 'move()\nmove()\ntake_ball()\nmove()\ntake_ball()' }
      ],
      keyConcepts: ['move() - Moves Karel one space forward', 'take_ball() - Picks up a ball', 'Sequential execution - Commands run top to bottom'],
      commonMistakes: ['Forgetting to move() before take_ball()', 'Not enough move() calls'],
      relatedTopics: ['u2-l1-e2', 'u2-l1-e3']
    },
    hints: ['Count how many spaces Karel needs to move', 'Remember: move() moves one space', 'Be ON the ball before picking it up'],
    tags: ['karel', 'basics', 'move', 'take_ball']
  },
  {
    id: 'u2-l1-e2', number: 2, title: 'Short Stack', type: 'karel', difficulty: 'easy',
    lessonId: 'u2-l1', unitId: 'u2', estimatedTime: '5 mins',
    description: 'Build the short tennis-ball stack, then move Karel to the finishing square.',
    starterCode: `# Build a tower of 3 balls\n# Move to the position and put down balls\n\n`,
    solution: `move()\nput_ball()\nput_ball()\nmove()`,
    explanation: {
      overview: 'This exercise introduces put_ball(), which places a ball at Karel\'s current location.',
      steps: [
        { number: 1, title: 'Move to Position', content: 'Move Karel 2 spaces forward to the tower location.', code: 'move()\nmove()' },
        { number: 2, title: 'Build the Tower', content: 'Use put_ball() three times to stack 3 balls.', code: 'move()\nmove()\nput_ball()\nput_ball()\nput_ball()' }
      ],
      keyConcepts: ['put_ball() - Places a ball down', 'Stacking - Multiple balls on same spot'],
      commonMistakes: ['Using take_ball() instead of put_ball()', 'Not moving first'],
      relatedTopics: ['u2-l1-e1']
    },
    hints: ['Move to the tower location first', 'put_ball() places a ball down', 'Call put_ball() 3 times'],
    tags: ['karel', 'put_ball', 'basics']
  },
  {
    id: 'u2-l1-e3', number: 3, title: 'Dancing Karel', type: 'karel', difficulty: 'easy',
    lessonId: 'u2-l1', unitId: 'u2', estimatedTime: '5 mins',
    description: 'Debug the dance routine so Karel completes the required moves and finishes facing the original direction.',
    starterCode: `# Debug this program\n# Karel should move twice and complete one full turn.\n\nmov()\nmove()\nturn_left()\nturn_left()\nturn_left()\nturn_left()`,
    solution: `move()\nmove()\nturn_left()\nturn_left()\nturn_left()\nturn_left()`,
    explanation: {
      overview: 'Debugging is finding and fixing errors in code. There is a typo in the move() function call.',
      steps: [
        { number: 1, title: 'Read the Error', content: 'Python says it doesn\'t recognize "mov()".' },
        { number: 2, title: 'Find the Typo', content: '"mov()" should be "move()".', code: 'mov()  # Wrong!\nmove() # Correct!' },
        { number: 3, title: 'Fix It', content: 'Change mov() to move().', code: 'move()\nturn_left()\nmove()\nput_ball()' }
      ],
      keyConcepts: ['Debugging - Finding and fixing errors', 'Typos break programs', 'Error messages tell you what went wrong'],
      commonMistakes: ['Not reading error messages', 'Missing typos'],
      relatedTopics: ['u2-l1-e1']
    },
    hints: ['Read the error message', 'Check each function name', 'Compare to correct function names'],
    tags: ['karel', 'debugging', 'typos']
  },

  // === 1.2 More Basic Karel ===
  {
    id: 'u2-l2-e1', number: 4, title: 'Make a Tower', type: 'karel', difficulty: 'easy',
    lessonId: 'u2-l2', unitId: 'u2', estimatedTime: '5 mins',
    description: 'Build the tower by following the required path and placing tennis balls on each marked square.',
    starterCode: `# Build a tower of balls\n\n`,
    solution: `move()\nput_ball()\nturn_left()\nmove()\nput_ball()\nmove()\nput_ball()\nmove()\nturn_left()\nturn_left()\nturn_left()`,
    explanation: {
      overview: 'Combine movement with put_ball() to build structures.',
      steps: [
        { number: 1, title: 'Move to Position', content: 'Move forward to the tower location.', code: 'move()\nmove()' },
        { number: 2, title: 'Build Tower', content: 'Put down 3 balls.', code: 'move()\nmove()\nput_ball()\nput_ball()\nput_ball()' }
      ],
      keyConcepts: ['move() to reach position', 'put_ball() to build'],
      commonMistakes: ['Wrong number of move() calls', 'Wrong number of put_ball() calls'],
      relatedTopics: ['u2-l1-e2']
    },
    hints: ['Count the spaces to the tower spot', 'Put down 3 balls'],
    tags: ['karel', 'put_ball', 'towers']
  },
  {
    id: 'u2-l2-e2', number: 5, title: 'Pyramid of Karel', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l2', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Build a pyramid of balls. Place 1 ball on the first level, 2 on the second, and 3 on the third. You\'ll need to move and stack balls in a pattern.',
    starterCode: `# Build a pyramid of balls\n# Level 1: 1 ball, Level 2: 2 balls, Level 3: 3 balls\n\n`,
    solution: `put_ball()\nmove()\nput_ball()\nturn_left()\nmove()\nput_ball()\nturn_left()\nturn_left()\nturn_left()\nmove()\nput_ball()\nturn_left()\nturn_left()\nturn_left()\nmove()\nput_ball()\nturn_left()\nturn_left()\nmove()\nmove()\nput_ball()\nturn_left()\nturn_left()\nturn_left()`,
    explanation: {
      overview: 'Build a pyramid by placing balls in a specific pattern with turns to navigate between levels.',
      steps: [
        { number: 1, title: 'Level 1', content: 'Place 1 ball, move forward, place another.', code: 'put_ball()\nmove()\nput_ball()' },
        { number: 2, title: 'Turn to Level 2', content: 'Turn left, move, turn left to face the next level.', code: 'turn_left()\nmove()\nput_ball()' },
        { number: 3, title: 'Navigate Between Levels', content: 'Use turn_left() sequences to change direction.', code: 'turn_left()\nturn_left()\nturn_left()\nmove()' },
        { number: 4, title: 'Complete Pattern', content: 'Follow the verified pyramid pattern.', code: 'put_ball()\nturn_left()\nturn_left()\nturn_left()\nmove()\nput_ball()\nturn_left()\nturn_left()\nturn_left()\nmove()\nput_ball()' }
      ],
      keyConcepts: ['Complex navigation', 'Turn sequences', 'Multi-level construction'],
      commonMistakes: ['Wrong turn sequences', 'Missing balls at each position', 'Wrong navigation between levels'],
      relatedTopics: ['u2-l2-e1']
    },
    hints: ['Use turn_left() sequences to change direction', 'Place balls at each position', 'Navigate between levels carefully'],
    tags: ['karel', 'patterns', 'pyramid', 'navigation']
  },
  {
    id: 'u2-l2-e3', number: 6, title: 'Go Through the Door', type: 'karel', difficulty: 'easy',
    lessonId: 'u2-l2', unitId: 'u2', estimatedTime: '5 mins',
    description: 'Debug the navigation program so Karel travels through the doorway and reaches the finish square.',
    starterCode: `# Debug: Karel needs to go through the door\n\nturn_left()\nmove()\nmove()\nturn_left()\nmove()`,
    solution: `turn_left()\nmove()\nmove()\nturn_left()\nturn_left()\nturn_left()\nmove()\nmove()\nmove()\nturn_left()\nturn_left()\nturn_left()\nmove()\nturn_left()\nmove()`,
    explanation: {
      overview: 'Debugging practice - find and fix the errors in the code. Since turn_right() is not available yet, use turn_left() sequences.',
      steps: [
        { number: 1, title: 'Read the Problem', content: 'Karel needs to navigate through a door. Look at what the code does vs what it should do.' },
        { number: 2, title: 'Find Errors', content: 'The code needs to turn right but turn_right() is not available yet.' },
        { number: 3, title: 'Fix', content: 'Use 4 turn_left() calls to turn right (360 degree turn).', code: 'move()\nturn_left()\nmove()\nturn_left()\nturn_left()\nturn_left()\nmove()' }
      ],
      keyConcepts: ['Debugging', 'Reading code carefully', 'Turn directions', '4 turn_left() = full rotation'],
      commonMistakes: ['Wrong turn direction', 'Missing turns', 'Using unavailable functions'],
      relatedTopics: ['u2-l1-e3']
    },
    hints: ['4 turn_left()s = full rotation (turn right)', 'turn_right() is not available yet', 'Check each turn direction'],
    tags: ['karel', 'debugging', 'navigation']
  },

  // === 1.3 Karel Can't Turn Right ===
  {
    id: 'u2-l3-e1', number: 7, title: 'Fireman Karel', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l3', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Navigate Fireman Karel through the course. Define turn_right() with three turn_left() calls before using it.',
    starterCode: `# Define turn_right() first!\ndef turn_right():\n    turn_left()\n    turn_left()\n    turn_left()\n\n`,
    solution: `def turn_right():\n    turn_left()\n    turn_left()\n    turn_left()\n\nturn_right()\nmove()\nmove()\nmove()\nturn_left()`,
    explanation: {
      overview: 'Functions let you create reusable code. turn_right() is 3 turn_left() calls.',
      steps: [
        { number: 1, title: 'Define turn_right()', content: 'Create the function with def.', code: 'def turn_right():\n    turn_left()\n    turn_left()\n    turn_left()' },
        { number: 2, title: 'Navigate', content: 'Use turn_right() to navigate.', code: 'move()\nturn_right()\nmove()\ntake_ball()' },
        { number: 3, title: 'Complete', content: 'Turn right again and move to safety.', code: 'move()\nturn_right()\nmove()\ntake_ball()\nturn_right()\nmove()\nmove()' }
      ],
      keyConcepts: ['def - Defines a function', 'Function reuse', 'turn_right() = 3 turn_left()s'],
      commonMistakes: ['Not defining function first', 'Indentation errors'],
      relatedTopics: ['u2-l1-e1']
    },
    hints: ['turn_right() is 3 turn_left() calls', 'Define before using', 'Watch your indentation'],
    tags: ['karel', 'functions', 'def']
  },
  {
    id: 'u2-l3-e2', number: 8, title: 'Slide Karel', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l3', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Use a custom turn_right() helper to follow the slide path and place the required tennis balls.',
    starterCode: `# Karel needs to slide sideways\n# Use turn_left() to change direction\n\n`,
    solution: `def turn_right():\n    turn_left()\n    turn_left()\n    turn_left()\n\nput_ball()\nmove()\nturn_right()\nmove()\nput_ball()\nmove()\nturn_left()\nmove()\nput_ball()`,
    explanation: {
      overview: 'Sometimes you need to think about direction changes to navigate.',
      steps: [
        { number: 1, title: 'Change Direction', content: 'Turn left to face the new direction.', code: 'turn_left()' },
        { number: 2, title: 'Move and Pick', content: 'Move to the ball and pick it up.', code: 'turn_left()\nmove()\ntake_ball()' },
        { number: 3, title: 'Turn Around', content: 'Turn around to go back.', code: 'turn_left()\nturn_left()\nturn_left()' },
        { number: 4, title: 'Continue', content: 'Move and pick up the next ball.', code: 'move()\nturn_left()\nmove()\ntake_ball()' }
      ],
      keyConcepts: ['Direction changes', 'Turn sequences', 'Navigation patterns'],
      commonMistakes: ['Wrong number of turns', 'Losing track of direction'],
      relatedTopics: ['u2-l3-e1']
    },
    hints: ['Turn left to change direction', '3 turn_left()s = turn around', 'Track which way Karel faces'],
    tags: ['karel', 'navigation', 'turns']
  },

  // === 1.4 Functions in Karel ===
  {
    id: 'u2-l4-e1', number: 9, title: 'Pancakes', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l4', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Define reusable helpers so Karel can make three stacks of three pancakes along the street.',
    starterCode: `# Define make_pancake() function\n# Then use it to make a stack of pancakes\n\ndef make_pancake():\n    put_ball()\n\n`,
    solution: `def make_pancakes():\n    put_ball()\n    put_ball()\n    put_ball()\n\ndef move_twice():\n    move()\n    move()\n\nmove()\nmake_pancakes()\nmove_twice()\nmake_pancakes()\nmove_twice()\nmake_pancakes()\nmove()`,
    explanation: {
      overview: 'Functions let you reuse code. Define once, call many times.',
      steps: [
        { number: 1, title: 'Define the Function', content: 'Create make_pancake() that puts down a ball.', code: 'def make_pancake():\n    put_ball()' },
        { number: 2, title: 'Call the Function', content: 'Call it 3 times to make 3 pancakes.', code: 'make_pancake()\nmake_pancake()\nmake_pancake()' }
      ],
      keyConcepts: ['Function definition', 'Function calls', 'Code reuse'],
      commonMistakes: ['Forgetting def', 'Not calling the function', 'Indentation errors'],
      relatedTopics: ['u2-l3-e1']
    },
    hints: ['Define with def', 'Call by name with ()', 'Call it 3 times'],
    tags: ['karel', 'functions', 'def']
  },
  {
    id: 'u2-l4-e2', number: 10, title: 'Backflip', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l4', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Create and call a backflip() helper to guide Karel through the complete backflip path.',
    starterCode: `# Define a backflip() function and use it twice.\n\n`,
    solution: `def move_twice():\n    move()\n    move()\n\ndef backflip():\n    move()\n    turn_left()\n    move()\n    turn_left()\n    move()\n    turn_left()\n    move()\n    turn_left()\n    move()\n\nmove_twice()\nbackflip()\nbackflip()`,
    explanation: {
      overview: 'Create a function that performs a sequence of actions.',
      steps: [
        { number: 1, title: 'Define backflip()', content: 'Turn around (2 turn_lefts) and move back.', code: 'def backflip():\n    turn_left()\n    turn_left()\n    move()' },
        { number: 2, title: 'Use It', content: 'Move forward then backflip.', code: 'move()\nmove()\nbackflip()' }
      ],
      keyConcepts: ['Function with multiple steps', 'Combining commands in functions'],
      commonMistakes: ['Not enough turns in function', 'Wrong function body'],
      relatedTopics: ['u2-l4-e1']
    },
    hints: ['Turn around = 2 turn_left()s', 'Then move()'],
    tags: ['karel', 'functions', 'turns']
  },
  {
    id: 'u2-l4-e3', number: 11, title: 'Digging Karel', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l4', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Use reusable helpers to place a tennis ball in each of the three holes along Karel\'s digging route.',
    starterCode: `# Define turn_right() and bury_ball() helpers.\n\n`,
    solution: `def turn_right():\n    turn_left()\n    turn_left()\n    turn_left()\n\ndef bury_ball():\n    turn_right()\n    move()\n    move()\n    move()\n    put_ball()\n    turn_left()\n    turn_left()\n\nmove()\nmove()\nbury_ball()\nmove()\nmove()\nmove()\nturn_right()\nmove()\nmove()\nmove()\nbury_ball()\nmove()\nmove()\nmove()\nturn_right()\nmove()\nmove()\nmove()\nbury_ball()\nmove()\nmove()\nmove()\nturn_right()\nmove()`,
    explanation: {
      overview: 'Functions can combine picking up balls with movement.',
      steps: [
        { number: 1, title: 'Define dig()', content: 'Pick up ball and move down.', code: 'def dig():\n    take_ball()\n    move()' },
        { number: 2, title: 'Use It', content: 'Call dig() 3 times.', code: 'dig()\ndig()\ndig()' }
      ],
      keyConcepts: ['Function combining actions', 'take_ball() + move()'],
      commonMistakes: ['Wrong order of actions', 'Not calling function enough times'],
      relatedTopics: ['u2-l4-e1']
    },
    hints: ['Pick up first, then move', 'Call 3 times for 3 layers'],
    tags: ['karel', 'functions', 'digging']
  },
  {
    id: 'u2-l4-e4', number: 12, title: 'Build a Shelter', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l4', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Debug the shelter-building route so Karel creates all four sides of the shelter.',
    starterCode: `# Debug: Build a shelter\n\nturn_left()\nmove()\nput_ball()\nmove()`,
    solution: `def turn_right():\n    turn_left()\n    turn_left()\n    turn_left()\n\nturn_left()\nmove()\nput_ball()\nmove()\nput_ball()\nmove()\nput_ball()\nturn_right()\nmove()\nput_ball()\nmove()\nput_ball()\nmove()\nput_ball()\nturn_right()\nmove()\nput_ball()\nmove()\nput_ball()\nmove()\nput_ball()\nturn_right()\nmove()\nmove()\nmove()\nturn_left()\nturn_left()`,
    explanation: {
      overview: 'Debugging functions - fix the order and structure.',
      steps: [
        { number: 1, title: 'Read Error', content: 'Python says build_wall is not defined. Functions must be defined before they are used.' },
        { number: 2, title: 'Fix Order', content: 'Move the def before the calls.', code: 'def build_wall():\n    put_ball()\n    put_ball()\n    put_ball()\n\nbuild_wall()\nmove()\nbuild_wall()' }
      ],
      keyConcepts: ['Functions must be defined before use', 'Definition order matters'],
      commonMistakes: ['Using function before defining it', 'Wrong indentation'],
      relatedTopics: ['u2-l4-e1']
    },
    hints: ['Functions must be defined before you call them', 'Move the def to the top'],
    tags: ['karel', 'debugging', 'functions']
  },

  // === 1.5 Top Down Design and Decomposition ===
  {
    id: 'u2-l5-e1', number: 13, title: 'The Two Towers', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l5', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Build two three-ball towers using helper functions. Karel must finish at the top of the second tower facing east.',
    starterCode: `# Build two towers of balls\n# Think about how to break this into smaller parts\n\n`,
    solution: `def turn_right():\n    turn_left()\n    turn_left()\n    turn_left()\n\ndef build_first_tower():\n    move()\n    turn_left()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    put_ball()\n    turn_left()\n    turn_left()\n    move()\n    move()\n    turn_left()\n\ndef build_second_tower():\n    move()\n    move()\n    turn_left()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    turn_right()\n\nbuild_first_tower()\nbuild_second_tower()`,
    explanation: {
      overview: 'Top-down design means breaking a big problem into smaller pieces.',
      steps: [
        { number: 1, title: 'Identify Patterns', content: 'We need to build a tower, move, then build another tower.' },
        { number: 2, title: 'Create Functions', content: 'Make build_tower() and move_between().', code: 'def build_tower():\n    put_ball()\n    put_ball()\n    put_ball()\n\ndef move_between():\n    move()\n    move()\n    move()' },
        { number: 3, title: 'Combine', content: 'Call the functions in order.', code: 'build_tower()\nmove_between()\nbuild_tower()' }
      ],
      keyConcepts: ['Top-down design', 'Decomposition', 'Breaking problems into functions'],
      commonMistakes: ['Not breaking into functions', 'Wrong number of moves between towers'],
      relatedTopics: ['u2-l4-e1']
    },
    hints: ['What pattern repeats?', 'Build a tower function', 'Build a move function'],
    tags: ['karel', 'functions', 'decomposition', 'top_down']
  },
  {
    id: 'u2-l5-e2', number: 14, title: 'Make a Z', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l5', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Debug the program so Karel places tennis balls in the shape of a Z.',
    starterCode: `# Debug: Make a Z shape\n\nmove()\nmove()\nmove()\nturn_left()\nmove()\nturn_left()\nmove()\nmove()\nmove()`,
    solution: `def turn_right():\n    turn_left()\n    turn_left()\n    turn_left()\n\ndef turn_around():\n    turn_left()\n    turn_left()\n\ndef put_balls_in_row():\n    move()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    put_ball()\n\ndef make_diagonal():\n    turn_right()\n    move()\n    turn_right()\n    move()\n    put_ball()\n    turn_left()\n    move()\n    turn_right()\n    move()\n    put_ball()\n    turn_left()\n    move()\n    turn_right()\n    move()\n\nput_balls_in_row()\nmake_diagonal()\nturn_around()\nput_ball()\nmove()\nput_ball()\nmove()\nput_ball()\nmove()\nput_ball()`,
    explanation: {
      overview: 'Trace the Z shape carefully and verify each step.',
      steps: [
        { number: 1, title: 'Trace the Z', content: 'A Z goes: right, down-left diagonal, right.' },
        { number: 2, title: 'Verify Each Step', content: 'Check each command matches the Z pattern.' },
        { number: 3, title: 'Fix Errors', content: 'Correct any wrong turns or moves.' }
      ],
      keyConcepts: ['Shape tracing', 'Debugging by tracing', 'Direction awareness'],
      commonMistakes: ['Wrong turn directions', 'Wrong number of moves'],
      relatedTopics: ['u2-l5-e1']
    },
    hints: ['Trace the Z shape step by step', 'Check each turn direction'],
    tags: ['karel', 'debugging', 'shapes']
  },

  // === 1.6 Commenting Your Code ===
  {
    id: 'u2-l6-e1', number: 15, title: 'The Two Towers + Comments', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l6', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Solve the Two Towers world and document the helper functions and main steps with useful comments.',
    starterCode: `# Add comments to explain your code\n# Comments start with #\n\n`,
    solution: `# Turn right using only Karel's basic turn_left command.\ndef turn_right():\n    turn_left()\n    turn_left()\n    turn_left()\n\n# Build the tower at the left side of the world.\ndef build_first_tower():\n    move()\n    turn_left()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    put_ball()\n    turn_left()\n    turn_left()\n    move()\n    move()\n    turn_left()\n\n# Build the tower at the right side and finish facing east.\ndef build_second_tower():\n    move()\n    move()\n    turn_left()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    turn_right()\n\n# Build both towers in order.\nbuild_first_tower()\nbuild_second_tower()`,
    explanation: {
      overview: 'Comments make your code easier to understand. Use # to add comments.',
      steps: [
        { number: 1, title: 'What are Comments?', content: 'Comments are notes in your code that Python ignores. They start with #.' },
        { number: 2, title: 'Add Function Comments', content: 'Explain what each function does.', code: '# Build the first tower\ndef build_tower():\n    put_ball()' },
        { number: 3, title: 'Add Inline Comments', content: 'Explain what each line does.', code: 'build_tower()   # Build first tower' }
      ],
      keyConcepts: ['# starts a comment', 'Comments explain code', 'Good comments help others read your code'],
      commonMistakes: ['Forgetting the # symbol', 'Commenting obvious things', 'Not commenting enough'],
      relatedTopics: ['u2-l5-e1']
    },
    hints: ['Use # to start a comment', 'Explain what functions do', 'Explain tricky parts'],
    tags: ['karel', 'comments', 'documentation']
  },

  // === 1.8 Super Karel ===
  {
    id: 'u2-l8-e1', number: 16, title: 'The Two Towers + SuperKarel', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l8', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Solve The Two Towers using SuperKarel\'s built-in turn_right() command. Karel must finish at the top of the second tower facing east.',
    starterCode: `# SuperKarel has turn_right() built in!\n# Use it to solve The Two Towers\n\n`,
    solution: `def build_first_tower():\n    move()\n    turn_left()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    put_ball()\n    turn_around()\n    move()\n    move()\n    turn_left()\n\ndef build_second_tower():\n    move()\n    move()\n    turn_left()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    turn_right()\n\nbuild_first_tower()\nbuild_second_tower()`,
    explanation: {
      overview: 'SuperKarel has extra commands like turn_right() that regular Karel doesn\'t have.',
      steps: [
        { number: 1, title: 'Know SuperKarel\'s Commands', content: 'SuperKarel has: move(), turn_left(), turn_right(), take_ball(), put_ball(), front_is_clear(), balls_present()' },
        { number: 2, title: 'Use turn_right()', content: 'No need to define it - it\'s built in!', code: 'turn_right()' },
        { number: 3, title: 'Solve', content: 'Build tower, turn, move, build again.', code: 'def build_tower():\n    put_ball()\n    put_ball()\n    put_ball()\n\nbuild_tower()\nturn_right()\nmove()\nmove()\nmove()\nturn_left()\nbuild_tower()' }
      ],
      keyConcepts: ['SuperKarel commands', 'turn_right() built-in', 'Using predefined functions'],
      commonMistakes: ['Defining turn_right() when not needed', 'Not knowing SuperKarel\'s commands'],
      relatedTopics: ['u2-l5-e1']
    },
    hints: ['SuperKarel already has turn_right()', 'You don\'t need to define it', 'Use the same tower pattern'],
    tags: ['karel', 'super_karel', 'turn_right']
  },

  // === 1.9 For Loops ===
  {
    id: 'u2-l9-e1', number: 17, title: 'Take \'em All', type: 'karel', difficulty: 'easy',
    lessonId: 'u2-l9', unitId: 'u2', estimatedTime: '5 mins',
    description: 'Move to the large stack of tennis balls, use a for loop to take all 100 balls, then move to the finishing square.',
    starterCode: `# Pick up all the balls\n# Use a for loop\n\n`,
    solution: `move()\n\nfor i in range(100):\n    take_ball()\n\nmove()`,
    explanation: {
      overview: 'For loops repeat code a set number of times. range(5) repeats 5 times.',
      steps: [
        { number: 1, title: 'Use for loop', content: 'for i in range(5) repeats 5 times.', code: 'for i in range(5):' },
        { number: 2, title: 'Add actions', content: 'Move and pick ball each time.', code: 'for i in range(5):\n    move()\n    take_ball()' }
      ],
      keyConcepts: ['for loop', 'range()', 'Repeating actions'],
      commonMistakes: ['Wrong range number', 'Indentation errors', 'Missing colon'],
      relatedTopics: ['u2-l9-e2']
    },
    hints: ['range(5) gives 0,1,2,3,4', 'Indent the loop body', 'Don\'t forget the colon'],
    tags: ['karel', 'for_loop', 'range']
  },
  {
    id: 'u2-l9-e2', number: 18, title: 'Dizzy Karel', type: 'karel', difficulty: 'easy',
    lessonId: 'u2-l9', unitId: 'u2', estimatedTime: '5 mins',
    description: 'Karel needs to spin around multiple times! Use a for loop to turn_left() 32 times (8 full rotations).',
    starterCode: `# Make Karel spin around\n# Use a for loop\n\n`,
    solution: `for i in range(32):\n    turn_left()`,
    explanation: {
      overview: 'A for loop can repeat turn commands. 32 turn_left()s = 8 full rotations (making Karel dizzy!).',
      steps: [
        { number: 1, title: 'Calculate Turns', content: '8 full rotations = 8 × 4 turns = 32 turns total.' },
        { number: 2, title: 'Use for loop', content: 'Repeat turn_left() 32 times for maximum dizziness.', code: 'for i in range(32):\n    turn_left()' }
      ],
      keyConcepts: ['for loop with turn_left()', 'Multiple rotations', '32 turns = 8 full rotations'],
      commonMistakes: ['Wrong number of turns', 'Using turn_right() when not available'],
      relatedTopics: ['u2-l9-e1']
    },
    hints: ['32 turn_left()s = 8 full rotations', 'range(32) repeats 32 times', 'Full rotation = 4 turn_left()s'],
    tags: ['karel', 'for_loop', 'rotation']
  },
  {
    id: 'u2-l9-e3', number: 19, title: 'For Loop Square', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l9', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Use a for loop to move around a square, placing a tennis ball at each corner.',
    starterCode: `# Trace a square using a for loop\n\n`,
    solution: `for i in range(4):\n    move()\n    put_ball()\n    turn_left()`,
    explanation: {
      overview: 'A square has 4 sides - use a for loop to repeat the pattern.',
      steps: [
        { number: 1, title: 'Identify Pattern', content: 'Each side: move, move, turn left.' },
        { number: 2, title: 'Use for loop', content: 'Repeat 4 times.', code: 'for i in range(4):\n    move()\n    move()\n    turn_left()' }
      ],
      keyConcepts: ['for loop for shapes', 'Pattern repetition', 'Square = 4 sides'],
      commonMistakes: ['Wrong number of moves per side', 'Forgetting to turn'],
      relatedTopics: ['u2-l9-e1', 'u2-l9-e2']
    },
    hints: ['Each side has 2 moves', 'Turn after each side', 'Repeat 4 times'],
    tags: ['karel', 'for_loop', 'shapes', 'square']
  },
  {
    id: 'u2-l9-e4', number: 20, title: 'Lots of Hurdles', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l9', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Define a jump_hurdle() helper, then use a for loop to clear all five hurdles.',
    starterCode: `# Jump over hurdles\n# Define jump_hurdle() function\n# Then call it in a loop\n\n`,
    solution: `def jump_hurdle():\n    turn_left()\n    move()\n    turn_right()\n    move()\n    turn_right()\n    move()\n    turn_left()\n\nfor i in range(5):\n    move()\n    move()\n    jump_hurdle()`,
    explanation: {
      overview: 'Define a function for the hurdle-jumping pattern, then call it in a loop. This is cleaner and easier to debug.',
      steps: [
        { number: 1, title: 'Define jump_hurdle()', content: 'Create a function that jumps one hurdle.', code: 'def jump_hurdle():\n    move()\n    turn_left()\n    move()\n    turn_right()\n    move()\n    turn_right()\n    move()\n    turn_left()' },
        { number: 2, title: 'Use for loop', content: 'Call jump_hurdle() 4 times.', code: 'for i in range(4):\n    jump_hurdle()' }
      ],
      keyConcepts: ['Function decomposition', 'Reusable functions', 'Loop with function calls'],
      commonMistakes: ['Not defining the function', 'Wrong hurdle pattern', 'Wrong loop count'],
      relatedTopics: ['u2-l9-e3']
    },
    hints: ['Define jump_hurdle() first', 'Each hurdle: move, turn left, move, turn right, move, turn right, move, turn left', 'Call the function 4 times'],
    tags: ['karel', 'for_loop', 'hurdles', 'functions']
  },

  // === 1.10 If Statements ===
  {
    id: 'u2-l10-e1', number: 21, title: 'Is There a Ball?', type: 'karel', difficulty: 'easy',
    lessonId: 'u2-l10', unitId: 'u2', estimatedTime: '5 mins',
    description: 'Karel must leave exactly one tennis ball on the starting square, whether the square begins empty or already has one.',
    starterCode: `# Check if there's a ball\n# Pick it up if there is one\n\n`,
    solution: `if balls_present():\n    take_ball()\n\nput_ball()\nmove()`,
    explanation: {
      overview: 'If statements let Karel make decisions based on conditions.',
      steps: [
        { number: 1, title: 'Check Condition', content: 'balls_present() returns True if Karel is on a ball.' },
        { number: 2, title: 'Use if', content: 'Only pick up if balls_present() is True.', code: 'if balls_present():\n    take_ball()' }
      ],
      keyConcepts: ['if statement', 'balls_present() condition', 'Conditional execution'],
      commonMistakes: ['Missing colon', 'Wrong indentation', 'Using wrong condition'],
      relatedTopics: ['u2-l10-e2']
    },
    hints: ['balls_present() checks for balls', 'if needs a colon', 'Indent the action'],
    tags: ['karel', 'if', 'conditions', 'on_ball']
  },

  // === 1.11 If/Else Statements ===
  {
    id: 'u2-l11-e1', number: 22, title: 'Right Side Up', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l11', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Karel can begin facing south or west. Use conditionals to make Karel finish facing east.',
    starterCode: `# Make Karel face right-side up\n# If facing south, turn around\n# If facing north, do nothing\n\n`,
    solution: `if facing_south():\n    turn_right()\n\nif facing_west():\n    turn_left()\n    turn_left()`,
    explanation: {
      overview: 'If/else lets Karel choose between two actions. Check direction and act accordingly.',
      steps: [
        { number: 1, title: 'Check Direction', content: 'facing_south() checks if Karel faces south.' },
        { number: 2, title: 'Turn if Needed', content: 'Turn around (2 turn_lefts) if facing south to face north.', code: 'if facing_south():\n    turn_left()\n    turn_left()' },
        { number: 3, title: 'Else Do Nothing', content: 'Use pass to do nothing if already facing right-side up.', code: 'else:\n    pass' }
      ],
      keyConcepts: ['if/else', 'facing_south()', 'pass keyword', 'turn_around = 2 turn_left()'],
      commonMistakes: ['Wrong condition', 'Forgetting else', 'Wrong turn direction'],
      relatedTopics: ['u2-l10-e1']
    },
    hints: ['facing_south() checks direction', '2 turn_left()s = turn around', 'pass = do nothing'],
    tags: ['karel', 'if_else', 'conditions']
  },

  // === 1.12 While Loops in Karel ===
  {
    id: 'u2-l12-e1', number: 23, title: 'Follow The Yellow Ball Road', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l12', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Karel needs to follow a path of balls. Use a while loop to keep moving while there are balls present.',
    starterCode: `# Follow the path of balls\n# Use a while loop\n\n`,
    solution: `while balls_present():\n    move()`,
    explanation: {
      overview: 'While loops repeat as long as a condition is true. Keep moving while balls are present.',
      steps: [
        { number: 1, title: 'Check for Balls', content: 'balls_present() checks if Karel is on a ball.' },
        { number: 2, title: 'Loop', content: 'While balls are present, keep moving forward.', code: 'while balls_present():\n    move()' }
      ],
      keyConcepts: ['while loop', 'balls_present()', 'Following ball paths'],
      commonMistakes: ['Infinite loops', 'Wrong condition', 'Using front_is_clear instead of balls_present'],
      relatedTopics: ['u2-l12-e2']
    },
    hints: ['balls_present() checks if Karel is on a ball', 'while repeats while condition is True', 'Keep moving while balls are present'],
    tags: ['karel', 'while_loop', 'conditions']
  },
  {
    id: 'u2-l12-e2', number: 24, title: 'Lay Row of Tennis Balls', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l12', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Karel needs to put down a row of balls. Use a while loop to put down balls until reaching the wall.',
    starterCode: `# Put down balls in a row\n# Use a while loop\n\n`,
    solution: `while front_is_clear():\n    put_ball()\n    move()\nput_ball()`,
    explanation: {
      overview: 'Place balls while moving forward until reaching a wall. Put a ball at each spot.',
      steps: [
        { number: 1, title: 'Loop While Moving', content: 'Put ball, move, and put ball again while front is clear.', code: 'while front_is_clear():\n    put_ball()\n    move()\n    put_ball()' }
      ],
      keyConcepts: ['while loop for placement', 'Ball at each position', 'Movement pattern'],
      commonMistakes: ['Wrong loop condition', 'Missing balls at positions'],
      relatedTopics: ['u2-l12-e1']
    },
    hints: ['Put ball, move, put ball in the loop', 'This places a ball at each position', 'front_is_clear() checks for wall'],
    tags: ['karel', 'while_loop', 'placement']
  },
  {
    id: 'u2-l12-e3', number: 25, title: 'Big Tower', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l12', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Turn Karel north, then build the tall tower by placing a ball on every empty square up to the existing top ball.',
    starterCode: `# Build a big tower\n# Use a while loop\n\n`,
    solution: `def face_north():\n    while not_facing_north():\n        turn_left()\n\ndef place_balls():\n    while no_balls_present():\n        put_ball()\n        if front_is_clear():\n            move()\n\nface_north()\nplace_balls()`,
    explanation: {
      overview: 'Stack balls vertically using a while loop.',
      steps: [
        { number: 1, title: 'Stack Up', content: 'Put ball and move up while possible.', code: 'while front_is_clear():\n    put_ball()\n    move()' },
        { number: 2, title: 'Final Ball', content: 'Put one at the top.', code: 'put_ball()' }
      ],
      keyConcepts: ['Vertical stacking', 'while loop pattern', 'Edge case'],
      commonMistakes: ['Missing final ball', 'Wrong direction'],
      relatedTopics: ['u2-l12-e2']
    },
    hints: ['Same pattern as Lay Row', 'Don\'t forget the last ball'],
    tags: ['karel', 'while_loop', 'towers']
  },

  // === 1.13 Control Structures Example ===
  {
    id: 'u2-l13-e1', number: 26, title: 'Random Hurdles', type: 'karel', difficulty: 'hard',
    lessonId: 'u2-l13', unitId: 'u2', estimatedTime: '15 mins',
    description: 'Run across first street and jump over hurdles in random locations. The world is 14 avenues wide.',
    starterCode: `# Jump over random hurdles\n# Use while loop to handle any number\n\n`,
    solution: `def jump_hurdle():\n    turn_left()\n    move()\n    turn_right()\n    move()\n    turn_right()\n    move()\n    turn_left()\n\nfor i in range(13):\n    if front_is_clear():\n        move()\n    else:\n        jump_hurdle()`,
    explanation: {
      overview: 'Random hurdles require flexible code that handles any number of obstacles.',
      steps: [
        { number: 1, title: 'Use while loop', content: 'Keep going while front is clear.' },
        { number: 2, title: 'Check for hurdles', content: 'If there\'s a hurdle, jump over it.' },
        { number: 3, title: 'Handle each case', content: 'Move forward or jump as needed.' }
      ],
      keyConcepts: ['while loop for unknown count', 'Combining conditions', 'Hurdle jumping pattern'],
      commonMistakes: ['Wrong loop condition', 'Missing hurdle cases', 'Infinite loops'],
      relatedTopics: ['u2-l9-e4', 'u2-l12-e1']
    },
    hints: ['while front_is_clear() handles any number', 'Check if hurdle exists', 'Jump pattern: up, over, down'],
    tags: ['karel', 'while_loop', 'hurdles', 'random']
  },

  // === 1.14 Debugging Strategies ===
  {
    id: 'u2-l14-e1', number: 27, title: 'Debug: The Two Towers', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l14', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Debug the Two Towers program. Find and fix the errors.',
    starterCode: `# Debug: The Two Towers\n\nbuild_tower()\nmove_between()\nbuild_tower()\n\ndef build_tower():\n    put_ball()\n    put_ball()\n    put_ball()\n\ndef move_between():\n    move()\n    move()`,
    solution: `def build_tower():\n    put_ball()\n    put_ball()\n    put_ball()\n\ndef move_between():\n    move()\n    move()\n    move()\n\nbuild_tower()\nmove_between()\nbuild_tower()`,
    explanation: {
      overview: 'Debugging means finding and fixing errors. Common issues: function order, missing moves.',
      steps: [
        { number: 1, title: 'Check Function Order', content: 'Functions must be defined before use.' },
        { number: 2, title: 'Check move_between', content: 'Need 3 moves, not 2.' },
        { number: 3, title: 'Fix', content: 'Move defs to top, add missing move().' }
      ],
      keyConcepts: ['Debugging strategy', 'Function definition order', 'Checking logic'],
      commonMistakes: ['Function before definition', 'Wrong move count'],
      relatedTopics: ['u2-l5-e1']
    },
    hints: ['Functions must be defined first', 'Count the moves between towers'],
    tags: ['karel', 'debugging', 'functions']
  },
  {
    id: 'u2-l14-e2', number: 28, title: 'Debug: Lots of Hurdles', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l14', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Debug the Lots of Hurdles program. Find and fix the errors.',
    starterCode: `# Debug: Lots of Hurdles\n\nfor i in range(4):\n    move()\n    turn_left()\n    move()\n    turn_right()\n    move()\n    turn_left()`,
    solution: `for i in range(4):\n    move()\n    turn_left()\n    move()\n    turn_right()\n    move()\n    turn_right()\n    move()\n    turn_left()`,
    explanation: {
      overview: 'Check the hurdle jumping pattern for missing steps.',
      steps: [
        { number: 1, title: 'Trace the Pattern', content: 'Each hurdle needs: move, turn left, move up, turn right, move over, turn right, move down, turn left.' },
        { number: 2, title: 'Find Missing Step', content: 'The original is missing a turn_right() and move().' },
        { number: 3, title: 'Fix', content: 'Add the missing steps.' }
      ],
      keyConcepts: ['Debugging by tracing', 'Checking pattern completeness'],
      commonMistakes: ['Missing steps in pattern', 'Wrong turn direction'],
      relatedTopics: ['u2-l9-e4']
    },
    hints: ['Trace each step of the hurdle', 'Compare to the correct pattern'],
    tags: ['karel', 'debugging', 'hurdles']
  },
  {
    id: 'u2-l14-e3', number: 29, title: 'Debug: Big Tower', type: 'karel', difficulty: 'medium',
    lessonId: 'u2-l14', unitId: 'u2', estimatedTime: '10 mins',
    description: 'Debug the Big Tower program. Find and fix the errors.',
    starterCode: `# Debug: Big Tower\n\nwhile front_is_clear():\n    put_ball()\n    move()\nput_ball()\nput_ball()`,
    solution: `while front_is_clear():\n    put_ball()\n    move()\nput_ball()`,
    explanation: {
      overview: 'The bug is putting too many balls at the end.',
      steps: [
        { number: 1, title: 'Analyze', content: 'After the loop, only one ball is needed at the top.' },
        { number: 2, title: 'Find Bug', content: 'Extra put_ball() call at the end.' },
        { number: 3, title: 'Fix', content: 'Remove the extra put_ball().' }
      ],
      keyConcepts: ['Debugging logic errors', 'Edge case handling'],
      commonMistakes: ['Extra function calls', 'Wrong end behavior'],
      relatedTopics: ['u2-l12-e3']
    },
    hints: ['How many balls at the end?', 'Check for duplicate calls'],
    tags: ['karel', 'debugging', 'towers']
  },
  {
    id: 'u2-l14-e4', number: 30, title: 'Debug: Random Hurdles', type: 'karel', difficulty: 'hard',
    lessonId: 'u2-l14', unitId: 'u2', estimatedTime: '15 mins',
    description: 'Debug the Random Hurdles program. Find and fix the errors.',
    starterCode: `# Debug: Random Hurdles\n\nwhile front_is_clear():\n    if front_is_clear():\n        move()\n    if not front_is_clear():\n        turn_left()\n        move()\n        turn_right()\n        move()\n        turn_right()\n        move()`,
    solution: `def jump_hurdle():\n    turn_left()\n    move()\n    turn_right()\n    move()\n    turn_right()\n    move()\n    turn_left()\n\nfor i in range(13):\n    if front_is_clear():\n        move()\n    else:\n        jump_hurdle()`,
    explanation: {
      overview: 'Debug complex conditional logic for random hurdles.',
      steps: [
        { number: 1, title: 'Analyze Logic', content: 'The condition for jumping hurdles is wrong.' },
        { number: 2, title: 'Fix Conditions', content: 'Need to check front_is_clear() AND not balls_present().' },
        { number: 3, title: 'Add Final Turn', content: 'Missing turn_left() at the end of hurdle jump.' }
      ],
      keyConcepts: ['Complex debugging', 'Multiple conditions', 'Logical operators'],
      commonMistakes: ['Wrong conditions', 'Missing turns', 'Logic errors'],
      relatedTopics: ['u2-l13-e1']
    },
    hints: ['Check the if conditions carefully', 'Don\'t forget the final turn_left()'],
    tags: ['karel', 'debugging', 'hurdles', 'conditions']
  },

  // === 1.15 Algorithms ===
  {
    id: 'u2-l15-e1', number: 31, title: 'Decorate the Fence', type: 'karel', difficulty: 'hard',
    lessonId: 'u2-l15', unitId: 'u2', estimatedTime: '15 mins',
    description: 'Karel needs to decorate a fence by placing balls on every other post. Use a pattern to alternate.',
    starterCode: `# Decorate the fence\n# Place balls on every other post\n\n`,
    solution: `put_ball()\nwhile front_is_clear():\n    move()\n    if front_is_clear():\n        move()\n        put_ball()`,
    explanation: {
      overview: 'Algorithms are step-by-step procedures. This one alternates ball placement.',
      steps: [
        { number: 1, title: 'Place First', content: 'Put a ball on the first post to start the pattern.', code: 'put_ball()' },
        { number: 2, title: 'Loop and Alternate', content: 'Use a while loop to move forward. If there is another post, move again and place a ball.', code: 'while front_is_clear():\n    move()\n    if front_is_clear():\n        move()\n        put_ball()' }
      ],
      keyConcepts: ['Algorithm design', 'Pattern recognition', 'Alternating placement'],
      commonMistakes: ['Wrong spacing', 'Off-by-one errors'],
      relatedTopics: ['u2-l9-e3']
    },
    hints: ['Place, skip 1, place, skip 1...', 'Start with put_ball()', 'Move 2 between each ball'],
    tags: ['karel', 'algorithms', 'patterns']
  },

  // === 1.16 Ultra Karel ===
  {
    id: 'u2-l16-e1', number: 32, title: 'Invert Colors', type: 'karel', difficulty: 'hard',
    lessonId: 'u2-l16', unitId: 'u2', estimatedTime: '15 mins',
    description: 'Move along the first street and invert every painted square: red becomes blue and blue becomes red.',
    starterCode: `# Invert the checkerboard colors\n# Pick up where there are balls\n# Put where there aren't\n\n`,
    solution: `def invert_color():\n    if color_is(color['red']):\n        paint(color['blue'])\n    else:\n        paint(color['red'])\n\ninvert_color()\nwhile front_is_clear():\n    move()\n    invert_color()`,
    explanation: {
      overview: 'Nested loops and conditionals to process a grid.',
      steps: [
        { number: 1, title: 'Understand Checkerboard', content: 'Alternating pattern of balls and empty spaces.' },
        { number: 2, title: 'Use Nested Loops', content: 'Outer loop for rows, inner for columns.' },
        { number: 3, title: 'Check Each Spot', content: 'If ball, pick up. If empty, put one down.' }
      ],
      keyConcepts: ['Nested loops', 'Grid traversal', 'Conditional placement'],
      commonMistakes: ['Wrong loop counts', 'Missing turns between rows', 'Wrong direction changes'],
      relatedTopics: ['u2-l9-e3']
    },
    hints: ['Use nested for loops', 'Check balls_present() at each spot', 'Turn at end of each row'],
    tags: ['karel', 'nested_loops', 'checkerboard', 'grid']
  },
  {
    id: 'u2-l16-e2', number: 33, title: 'Checkerboard Karel', type: 'karel', difficulty: 'hard',
    lessonId: 'u2-l16', unitId: 'u2', estimatedTime: '15 mins',
    description: 'Paint an 8-by-8 checkerboard using alternating black and red squares.',
    starterCode: `# Create a checkerboard pattern\n\n`,
    solution: `def paint_row():\n    for i in range(3):\n        paint(color['black'])\n        move()\n        paint(color['red'])\n        move()\n    paint(color['black'])\n    move()\n    paint(color['red'])\n\ndef move_up_left():\n    turn_left()\n    move()\n    turn_left()\n\ndef move_up_right():\n    turn_right()\n    move()\n    turn_right()\n\nfor i in range(3):\n    paint_row()\n    move_up_left()\n    paint_row()\n    move_up_right()\n\npaint_row()\nmove_up_left()\npaint_row()\n\n# Return to the bottom-left corner facing east.\nturn_left()\nfor i in range(7):\n    move()\nturn_left()`,
    explanation: {
      overview: 'A checkerboard alternates based on row + column position.',
      steps: [
        { number: 1, title: 'Math Pattern', content: 'If (row + col) is even, place ball.' },
        { number: 2, title: 'Traverse Grid', content: 'Use nested loops for rows and columns.' },
        { number: 3, title: 'Place Conditionally', content: 'Check the math pattern at each spot.' }
      ],
      keyConcepts: ['Mathematical patterns', 'Modulo operator', 'Grid traversal'],
      commonMistakes: ['Wrong pattern formula', 'Off-by-one in loops', 'Wrong turn directions'],
      relatedTopics: ['u2-l16-e1']
    },
    hints: ['(row + col) % 2 == 0 means place ball', 'Use nested for loops', 'Turn at end of each row'],
    tags: ['karel', 'checkerboard', 'math_patterns', 'grid']
  },

  // === 1.17 Karel Challenges ===
  {
    id: 'u2-l17-e1', number: 34, title: 'Fetch', type: 'karel', difficulty: 'hard',
    lessonId: 'u2-l17', unitId: 'u2', estimatedTime: '15 mins',
    description: 'Navigate to the tennis ball, pick it up, and return it to Karel\'s starting square.',
    starterCode: `# Fetch the ball and bring it back\n\n`,
    solution: `move()\nturn_left()\nmove()\nmove()\nmove()\nmove()\nturn_right()\nmove()\ntake_ball()\n\nturn_around()\nmove()\nmove()\nturn_left()\nmove()\nmove()\nmove()\nmove()\nturn_left()\nput_ball()`,
    explanation: {
      overview: 'Challenges combine everything you\'ve learned.',
      steps: [
        { number: 1, title: 'Go There', content: 'Move to the ball location.' },
        { number: 2, title: 'Pick Up', content: 'Pick up the ball.' },
        { number: 3, title: 'Return', content: 'Turn around and move back.' }
      ],
      keyConcepts: ['Navigation', 'Turn around pattern', 'Combining skills'],
      commonMistakes: ['Wrong number of moves', 'Forgetting to turn around'],
      relatedTopics: ['u2-l3-e1']
    },
    hints: ['Count the spaces there and back', 'Turn around = 2 turn_left()s'],
    tags: ['karel', 'challenge', 'navigation']
  },
  {
    id: 'u2-l17-e2', number: 35, title: 'Racing Karel', type: 'karel', difficulty: 'hard',
    lessonId: 'u2-l17', unitId: 'u2', estimatedTime: '15 mins',
    description: 'Run Karel around the racetrack eight times, leaving a stack of tennis balls at every corner.',
    starterCode: `# Race to the finish!\n\n`,
    solution: `def run_straight():\n    while front_is_clear():\n        move()\n    put_ball()\n    turn_left()\n\ndef run_lap():\n    for i in range(4):\n        run_straight()\n\nfor i in range(8):\n    run_lap()`,
    explanation: {
      overview: 'Speed is key - use the most efficient path.',
      steps: [
        { number: 1, title: 'Find Path', content: 'Identify the shortest route.' },
        { number: 2, title: 'Use Loops', content: 'for loop for repeated moves.', code: 'for i in range(6):\n    move()' },
        { number: 3, title: 'Finish', content: 'Put ball at the finish line.' }
      ],
      keyConcepts: ['Efficiency', 'Loop optimization', 'Direct paths'],
      commonMistakes: ['Taking long paths', 'Not using loops'],
      relatedTopics: ['u2-l9-e1']
    },
    hints: ['Use for loops for speed', 'Count the moves to the finish'],
    tags: ['karel', 'challenge', 'efficiency']
  },
  {
    id: 'u2-l17-e3', number: 36, title: 'Tower Builder', type: 'karel', difficulty: 'hard',
    lessonId: 'u2-l17', unitId: 'u2', estimatedTime: '15 mins',
    description: 'Build a three-ball tower on every odd-numbered avenue in the world.',
    starterCode: `# Build a tower 5 balls tall\n\n`,
    solution: `def build_tower():\n    turn_left()\n    put_ball()\n    move()\n    put_ball()\n    move()\n    put_ball()\n    turn_around()\n    move()\n    move()\n    turn_left()\n\nbuild_tower()\nwhile front_is_clear():\n    move()\n    if front_is_clear():\n        move()\n        build_tower()`,
    explanation: {
      overview: 'Use loops to build tall structures efficiently.',
      steps: [
        { number: 1, title: 'Use Loop', content: 'Repeat 5 times.', code: 'for i in range(5):' },
        { number: 2, title: 'Stack', content: 'Put ball and move up each time.', code: 'for i in range(5):\n    put_ball()\n    move()' }
      ],
      keyConcepts: ['Loop for building', 'Vertical movement', 'Efficient construction'],
      commonMistakes: ['Wrong loop count', 'Missing move() or put_ball()'],
      relatedTopics: ['u2-l9-e1', 'u2-l12-e3']
    },
    hints: ['range(5) for 5 balls', 'Put ball then move up'],
    tags: ['karel', 'challenge', 'towers', 'loops']
  },
  {
    id: 'u2-l17-e4', number: 37, title: 'Super Cleanup Karel', type: 'karel', difficulty: 'hard',
    lessonId: 'u2-l17', unitId: 'u2', estimatedTime: '15 mins',
    description: 'Clean every tennis ball from a world of any size. Karel starts in the bottom-left corner facing east.',
    starterCode: `# Clean up all balls\n\n`,
    solution: `def clean_spot():\n    while balls_present():\n        take_ball()\n\ndef clean_avenue():\n    clean_spot()\n    turn_left()\n\n    while front_is_clear():\n        move()\n        clean_spot()\n\n    turn_around()\n    while front_is_clear():\n        move()\n        clean_spot()\n\n    if left_is_clear():\n        turn_left()\n    if front_is_clear():\n        move()\n\nclean_avenue()\nwhile front_is_clear():\n    clean_avenue()\nclean_avenue()`,
    explanation: {
      overview: 'Systematically visit every spot and clean up balls.',
      steps: [
        { number: 1, title: 'Grid Traversal', content: 'Visit every spot in a grid pattern.' },
        { number: 2, title: 'Check and Clean', content: 'At each spot, check for balls and pick them up.' },
        { number: 3, title: 'Move to Next Row', content: 'Turn, move, turn to start the next row.' }
      ],
      keyConcepts: ['Systematic traversal', 'Nested loops', 'Conditional cleanup'],
      commonMistakes: ['Missing spots', 'Wrong turn patterns', 'Not checking all spots'],
      relatedTopics: ['u2-l16-e1']
    },
    hints: ['Visit every spot systematically', 'Check balls_present() at each spot', 'Turn at end of each row'],
    tags: ['karel', 'challenge', 'cleanup', 'grid']
  },
  {
    id: 'u2-l17-e5', number: 38, title: 'Double Tennis Balls', type: 'karel', difficulty: 'hard',
    lessonId: 'u2-l17', unitId: 'u2', estimatedTime: '15 mins',
    description: 'Double the number of tennis balls in the pile in front of Karel, then return to the starting position.',
    starterCode: `# Double the tennis balls\n# Where there's 1 ball, add another\n# Return to start when done\n\n`,
    solution: `move()\n\nwhile balls_present():\n    take_ball()\n    move()\n    put_ball()\n    put_ball()\n    turn_around()\n    move()\n    turn_around()\n\nmove()\nwhile balls_present():\n    take_ball()\n    turn_around()\n    move()\n    put_ball()\n    turn_around()\n    move()\n\nturn_around()\nmove()\nmove()\nturn_around()`,
    explanation: {
      overview: 'Double the balls by picking up each ball and putting down 2, then return to the starting position.',
      steps: [
        { number: 1, title: 'Move and Double', content: 'Move through doubling each ball.', code: 'while front_is_clear():\n    if balls_present():\n        take_ball()\n        put_ball()\n        put_ball()\n    move()' },
        { number: 2, title: 'Check Last Spot', content: 'Check the final position.', code: 'if balls_present():\n    take_ball()\n    put_ball()\n    put_ball()' },
        { number: 3, title: 'Return to Start', content: 'Turn around and move back to column 1.', code: 'turn_left()\nturn_left()\nwhile front_is_clear():\n    move()' }
      ],
      keyConcepts: ['Double balls pattern', 'Turn around = 2 turn_left()s', 'Return to start with while loop'],
      commonMistakes: ['Not checking the last spot', 'Forgetting to return to start', 'Wrong turn count'],
      relatedTopics: ['u2-l12-e1']
    },
    hints: ['Double each ball: take_ball(), put_ball(), put_ball()', 'Check the last spot after the loop', 'Turn around with 2 turn_left()s and move back'],
    tags: ['karel', 'challenge', 'transformation', 'return']
  }
];
