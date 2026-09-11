import { Unit, Exercise } from '../types';
import { unit2Exercises } from './unit2';
import { unit3Exercises } from './unit3';
import { unit4Exercises } from './unit4';
import { unit5Exercises } from './unit5';
import { unit6Exercises } from './unit6';
import { unit7Exercises } from './unit7';
import { unit8Exercises } from './unit8';
import { unit9Exercises } from './unit9';
import { unit10Exercises } from './unit10';

export const units: Unit[] = [
  {
    id: 'u2',
    number: 2,
    title: 'Karel in Python',
    description: 'Learn computational thinking, logic, control structures, and decomposition with Karel the Dog.',
    icon: '🐕',
    color: 'blue',
    lessons: [
      { id: 'u2-l1', number: 1, title: 'Intro to Programming With Karel', description: 'Meet Karel and master street & avenue navigation', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l1') },
      { id: 'u2-l2', number: 2, title: 'More Basic Karel', description: 'Compound movement and turn_right patterns', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l2') },
      { id: 'u2-l3', number: 3, title: 'Karel Can\'t Turn Right', description: 'Building custom commands and abstraction', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l3') },
      { id: 'u2-l4', number: 4, title: 'Functions in Karel', description: 'Writing clean, reusable function definitions', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l4') },
      { id: 'u2-l5', number: 5, title: 'Top Down Design', description: 'Decomposing complex world problems into manageable pieces', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l5') },
      { id: 'u2-l6', number: 6, title: 'Commenting Your Code', description: 'Writing clear inline and precondition documentation', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l6') },
      { id: 'u2-l8', number: 7, title: 'Super Karel', description: 'Leveraging built-in turn_right() and turn_around()', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l8') },
      { id: 'u2-l9', number: 8, title: 'For Loops', description: 'Definite iteration and repeating actions with loops', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l9') },
      { id: 'u2-l10', number: 9, title: 'If Statements', description: 'Conditional execution and sensing Karel world state', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l10') },
      { id: 'u2-l11', number: 10, title: 'If/Else Statements', description: 'Two-way branching logic and obstacle handling', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l11') },
      { id: 'u2-l12', number: 11, title: 'While Loops in Karel', description: 'Indefinite iteration using dynamic conditions', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l12') },
      { id: 'u2-l13', number: 12, title: 'Control Structures Example', description: 'Combining while loops, for loops, and conditionals', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l13') },
      { id: 'u2-l14', number: 13, title: 'Debugging Strategies', description: 'Identifying syntax, runtime, and logic errors in grid worlds', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l14') },
      { id: 'u2-l15', number: 14, title: 'Algorithms', description: 'Designing systematic procedural solutions', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l15') },
      { id: 'u2-l16', number: 15, title: 'Ultra Karel', description: 'Advanced problem solving and world navigation', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l16') },
      { id: 'u2-l17', number: 16, title: 'Karel Challenges', description: 'Comprehensive capstone puzzles testing all Karel concepts', unitId: 'u2', exercises: unit2Exercises.filter(e => e.lessonId === 'u2-l17') }
    ]
  },
  {
    id: 'u3',
    number: 3,
    title: 'Conditionals & Booleans',
    description: 'Master Boolean expressions, truth values, and branch decisions with if, elif, and else.',
    icon: '🔀',
    color: 'purple',
    lessons: [
      { id: 'u3-l1', number: 1, title: 'Boolean Variables & Expressions', description: 'True/False values and comparison operators', unitId: 'u3', exercises: unit3Exercises.filter(e => e.lessonId === 'u3-l1') },
      { id: 'u3-l2', number: 2, title: 'If-Elif-Else Decision Trees', description: 'Multi-branch conditional logic and decision flows', unitId: 'u3', exercises: unit3Exercises.filter(e => e.lessonId === 'u3-l2') }
    ]
  },
  {
    id: 'u4',
    number: 4,
    title: 'Loops & Iteration',
    description: 'Repeat code efficiently using while loops, for loops, and the range() function.',
    icon: '🔁',
    color: 'green',
    lessons: [
      { id: 'u4-l1', number: 1, title: 'While Loops', description: 'Counter variables and conditional repetition', unitId: 'u4', exercises: unit4Exercises.filter(e => e.lessonId === 'u4-l1') },
      { id: 'u4-l2', number: 2, title: 'For Loops & Range', description: 'Iterating over numerical sequences with range()', unitId: 'u4', exercises: unit4Exercises.filter(e => e.lessonId === 'u4-l2') }
    ]
  },
  {
    id: 'u5',
    number: 5,
    title: 'Functions & Return Values',
    description: 'Structure programs with parameterized functions, local variables, and return statements.',
    icon: '⚡',
    color: 'amber',
    lessons: [
      { id: 'u5-l1', number: 1, title: 'Defining Functions', description: 'The def keyword, naming, and function invocations', unitId: 'u5', exercises: unit5Exercises.filter(e => e.lessonId === 'u5-l1') },
      { id: 'u5-l2', number: 2, title: 'Parameters & Arguments', description: 'Passing data into functions dynamically', unitId: 'u5', exercises: unit5Exercises.filter(e => e.lessonId === 'u5-l2') },
      { id: 'u5-l3', number: 3, title: 'Return Values', description: 'Returning computed results from functions to callers', unitId: 'u5', exercises: unit5Exercises.filter(e => e.lessonId === 'u5-l3') }
    ]
  },
  {
    id: 'u6',
    number: 6,
    title: 'Lists & Sequences',
    description: 'Store, access, append, slice, and manipulate ordered sequences of data.',
    icon: '📋',
    color: 'teal',
    lessons: [
      { id: 'u6-l1', number: 1, title: 'List Basics & Indexing', description: 'Zero-based indexing and list access', unitId: 'u6', exercises: unit6Exercises.filter(e => e.lessonId === 'u6-l1') },
      { id: 'u6-l2', number: 2, title: 'List Methods', description: 'append(), remove(), pop(), and len() operations', unitId: 'u6', exercises: unit6Exercises.filter(e => e.lessonId === 'u6-l2') }
    ]
  },
  {
    id: 'u7',
    number: 7,
    title: 'Strings & Text Manipulation',
    description: 'Process textual data with indexing, string methods, splitting, and formatting.',
    icon: '🔤',
    color: 'rose',
    lessons: [
      { id: 'u7-l1', number: 1, title: 'String Methods', description: 'Case transformations, stripping whitespace, and formatting', unitId: 'u7', exercises: unit7Exercises.filter(e => e.lessonId === 'u7-l1') }
    ]
  },
  {
    id: 'u8',
    number: 8,
    title: 'Dictionaries',
    description: 'Manage structured associative data using key-value pairs and lookups.',
    icon: '📖',
    color: 'indigo',
    lessons: [
      { id: 'u8-l1', number: 1, title: 'Dictionary Basics', description: 'Keys, values, assignment, and access syntax', unitId: 'u8', exercises: unit8Exercises.filter(e => e.lessonId === 'u8-l1') }
    ]
  },
  {
    id: 'u9',
    number: 9,
    title: 'Modules & Libraries',
    description: 'Extend Python capabilities using built-in modules like random and math.',
    icon: '📦',
    color: 'pink',
    lessons: [
      { id: 'u9-l1', number: 1, title: 'Importing & Random Module', description: 'Using import and generating random values', unitId: 'u9', exercises: unit9Exercises.filter(e => e.lessonId === 'u9-l1') }
    ]
  },
  {
    id: 'u10',
    number: 10,
    title: 'Final Projects & Challenges',
    description: 'Synthesize all Python and algorithmic concepts into complete interactive applications.',
    icon: '🏆',
    color: 'orange',
    lessons: [
      { id: 'u10-l1', number: 1, title: 'Capstone Games & Tools', description: 'Comprehensive projects combining all course skills', unitId: 'u10', exercises: unit10Exercises.filter(e => e.lessonId === 'u10-l1') }
    ]
  }
];

export const codehsCodeMap: Record<string, string> = {
  'u2-l1-e1': '2.1.4',
  'u2-l1-e2': '2.1.5',
  'u2-l1-e3': '2.1.6',
  'u2-l2-e1': '2.2.4',
  'u2-l2-e2': '2.2.5',
  'u2-l2-e3': '2.2.6',
  'u2-l3-e1': '2.3.4',
  'u2-l3-e2': '2.3.5',
  'u2-l4-e1': '2.4.4',
  'u2-l4-e2': '2.4.5',
  'u2-l4-e3': '2.4.6',
  'u2-l4-e4': '2.4.7',
  'u2-l5-e1': '2.5.4',
  'u2-l5-e2': '2.5.5',
  'u2-l6-e1': '2.6.4',
  'u2-l8-e1': '2.8.4',
  'u2-l9-e1': '2.9.5',
  'u2-l9-e2': '2.9.6',
  'u2-l9-e3': '2.9.7',
  'u2-l9-e4': '2.9.8',
  'u2-l10-e1': '2.10.5',
  'u2-l11-e1': '2.11.5',
  'u2-l12-e1': '2.12.4',
  'u2-l12-e2': '2.12.5',
  'u2-l12-e3': '2.12.6',
  'u2-l13-e1': '2.13.4',
  'u2-l14-e1': '2.14.3',
  'u2-l14-e2': '2.14.4',
  'u2-l14-e3': '2.14.7',
  'u2-l14-e4': '2.14.8',
  'u2-l15-e1': '2.15.6',
  'u2-l16-e1': '2.16.5',
  'u2-l16-e2': '2.16.6',
  'u2-l17-e1': '2.17.1',
  'u2-l17-e2': '2.17.2',
  'u2-l17-e3': '2.17.3',
  'u2-l17-e4': '2.17.4',
  'u2-l17-e5': '2.17.5',
  'u3-l1-e1': '3.1.2',
  'u3-l2-e1': '3.2.2',
  'u4-l1-e1': '4.1.2',
  'u4-l2-e1': '4.2.2',
  'u5-l1-e1': '5.1.2',
  'u5-l2-e1': '5.2.2',
  'u5-l3-e1': '5.3.2',
  'u6-l1-e1': '6.1.2',
  'u6-l2-e1': '6.2.2',
  'u7-l1-e1': '7.1.2',
  'u8-l1-e1': '8.1.2',
  'u9-l1-e1': '9.1.2',
  'u10-l1-e1': '10.1.2',
};

// Enrich all unit exercises with their official CodeHS curriculum code
units.forEach(unit => {
  unit.lessons.forEach(lesson => {
    lesson.exercises.forEach(exercise => {
      exercise.codehsCode = codehsCodeMap[exercise.id] || `${unit.number}.${lesson.number}.${exercise.number}`;
    });
  });
});

export function getAllExercises(): Exercise[] {
  return units.flatMap(unit => unit.lessons.flatMap(lesson => lesson.exercises));
}

export function getExerciseById(id: string): Exercise | undefined {
  return getAllExercises().find(exercise => exercise.id === id);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find(unit => unit.id === id);
}

export function searchExercises(query: string): Exercise[] {
  const lower = query.toLowerCase().trim();
  if (!lower) return [];

  return getAllExercises().filter(exercise => {
    const codeMatch = exercise.codehsCode?.toLowerCase().includes(lower);
    const titleMatch = exercise.title.toLowerCase().includes(lower);
    const descMatch = exercise.description.toLowerCase().includes(lower);
    const idMatch = exercise.id.toLowerCase().includes(lower);
    const tagMatch = exercise.tags?.some(tag => tag.toLowerCase().includes(lower));
    const conceptMatch = exercise.explanation?.keyConcepts?.some(c => c.toLowerCase().includes(lower));
    return codeMatch || titleMatch || descMatch || idMatch || tagMatch || conceptMatch;
  });
}
