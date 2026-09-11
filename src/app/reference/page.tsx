'use client';

import { useState } from 'react';
import {
  FileCode2,
  Search,
  Code2,
} from 'lucide-react';
import CodeBlock from '@/components/ui/CodeBlock';

export default function ReferencePage() {
  const [activeTab, setActiveTab] = useState<'karel' | 'python'>('karel');
  const [filterQuery, setFilterQuery] = useState('');

  const karelSections = [
    {
      title: 'Basic Karel Commands',
      desc: 'The fundamental primitives Karel can execute on any street/avenue grid.',
      code: `# Standard Karel commands
move()           # Moves Karel forward 1 grid space
turn_left()      # Rotates Karel 90 degrees counter-clockwise
put_ball()       # Places 1 tennis ball on current grid spot
take_ball()      # Picks up 1 tennis ball from current spot`,
    },
    {
      title: 'SuperKarel Commands',
      desc: 'Inherited when importing SuperKarel. Replaces the need for repetitive turn_left() triplets.',
      code: `# SuperKarel built-in convenience methods
from superkarel import *

turn_right()     # Rotates Karel 90 degrees clockwise
turn_around()    # Rotates Karel 180 degrees backwards
paint(color)     # Colors the current grid cell (e.g. color["red"])`,
    },
    {
      title: 'Karel Sensing Conditions',
      desc: 'Boolean conditions used in if/else branching and while loops.',
      code: `# Wall & Obstacle sensors
front_is_clear()    front_is_blocked()
left_is_clear()     left_is_blocked()
right_is_clear()    right_is_blocked()

# Tennis Ball sensors
balls_present()     no_balls_present()

# Compass Direction sensors
facing_north()      not_facing_north()
facing_south()      not_facing_south()
facing_east()       not_facing_east()
facing_west()       not_facing_west()`,
    },
    {
      title: 'Standard Karel Idioms & Patterns',
      desc: 'Essential algorithmic patterns for traversing streets without crashing.',
      code: `# 1. Traverse to the end of a street
while front_is_clear():
    move()

# 2. Pick up all balls on a single spot
while balls_present():
    take_ball()

# 3. Clean an entire row of balls
while front_is_clear():
    if balls_present():
        take_ball()
    move()
if balls_present():   # Fencepost problem check
    take_ball()`,
    },
  ];

  const pythonSections = [
    {
      title: 'Console I/O & Variables',
      desc: 'Taking user input and printing formatted results.',
      code: `# Input always returns a string! Convert explicitly:
name = input("What is your name? ")
age = int(input("Enter your age: "))
price = float(input("Enter item price: "))

# Printing with concatenation or commas
print("Hello " + name + "!")
print("Next year you will be", age + 1)`,
    },
    {
      title: 'Conditionals & Boolean Operators',
      desc: 'Branching logic using if, elif, else, and logical expressions.',
      code: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

# Logical operators: and, or, not
if age >= 16 and has_permit:
    print("Eligible to drive with supervision")`,
    },
    {
      title: 'Loops: for and while',
      desc: 'Iteration over numerical ranges and conditional loops.',
      code: `# Repeat 5 times (0, 1, 2, 3, 4)
for i in range(5):
    print("Iteration:", i)

# Custom range: range(start, stop, step)
for i in range(2, 11, 2):  # 2, 4, 6, 8, 10
    print(i)

# Indefinite while loop
count = 0
while count < 3:
    print(count)
    count += 1`,
    },
    {
      title: 'Functions & Return Values',
      desc: 'Decomposing code into reusable modular functions.',
      code: `# Function with parameters and return value
def calculate_rectangle_area(width, height):
    area = width * height
    return area

# Calling function and capturing result
result = calculate_rectangle_area(5, 10)
print("Area is:", result)  # 50`,
    },
    {
      title: 'Lists & Sequences',
      desc: 'Ordered collections, indexing, and list operations.',
      code: `fruits = ["apple", "banana", "cherry"]

# Access by zero-based index
print(fruits[0])   # "apple"
print(len(fruits)) # 3

# Mutation methods
fruits.append("orange") # Adds to end
fruits.pop(0)          # Removes at index
fruits.remove("banana")# Removes by value

# Iterating over list elements
for item in fruits:
    print("Fruit:", item)`,
    },
  ];

  const currentSections = activeTab === 'karel' ? karelSections : pythonSections;
  const filtered = currentSections.filter(
    (s) =>
      s.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(filterQuery.toLowerCase()) ||
      s.code.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
            <FileCode2 size={14} /> Quick Reference Guide
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            CodeHS Syntax & Karel Cheat Sheet
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Quickly look up Karel commands, world conditions, control structures, and Python 3 syntax.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-2xl">
          <button
            onClick={() => setActiveTab('karel')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'karel'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>🐕</span> Karel Reference
          </button>
          <button
            onClick={() => setActiveTab('python')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'python'
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 size={14} /> Python 3 Basics
          </button>
        </div>
      </div>

      {/* Filter search */}
      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder={`Search ${activeTab === 'karel' ? 'Karel commands' : 'Python syntax'}...`}
          className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-700"
        />
      </div>

      {/* Reference Sections Grid */}
      <div className="space-y-6">
        {filtered.map((sec, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-800/80 bg-[#0d1424] p-6 shadow-sm hover:border-slate-700/80 transition-all"
          >
            <div className="mb-3">
              <h2 className="text-base font-bold text-white tracking-tight">{sec.title}</h2>
              <p className="text-xs text-slate-400 mt-0.5">{sec.desc}</p>
            </div>

            <CodeBlock code={sec.code} fileName={activeTab === 'karel' ? 'karel_guide.py' : 'python_guide.py'} />
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="p-12 text-center border border-slate-800 rounded-2xl bg-[#0d1424]">
            <p className="text-slate-400 text-sm">No reference items match &ldquo;{filterQuery}&rdquo;</p>
          </div>
        )}
      </div>
    </div>
  );
}
