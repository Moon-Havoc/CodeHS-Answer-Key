'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  BookOpen,
  Code2,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Filter,
} from 'lucide-react';
import { units, getAllExercises } from '@/lib/data/exercises';
import { useProgress } from '@/lib/utils/progress';

export default function HomePage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set(['u2']));

  const { isCompleted, progress, getLastAccessedExerciseId, getCompletionPercentage } = useProgress();

  const allExercises = useMemo(() => getAllExercises(), []);
  const totalExercisesCount = allExercises.length;
  const completedCount = progress.completedExercises.length;
  const overallPercentage = getCompletionPercentage(totalExercisesCount);

  const lastAccessedId = getLastAccessedExerciseId();
  const lastAccessedExercise = useMemo(() => {
    return lastAccessedId ? allExercises.find((e) => e.id === lastAccessedId) : null;
  }, [lastAccessedId, allExercises]);

  const toggleUnit = (unitId: string) => {
    setExpandedUnits((prev) => {
      const next = new Set(prev);
      if (next.has(unitId)) next.delete(unitId);
      else next.add(unitId);
      return next;
    });
  };

  const expandAll = () => {
    setExpandedUnits(new Set(units.map((u) => u.id)));
  };

  const collapseAll = () => {
    setExpandedUnits(new Set());
  };

  const filteredUnits = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return units
      .map((unit) => {
        const filteredLessons = unit.lessons
          .map((lesson) => {
            const filteredExercises = lesson.exercises.filter((ex) => {
              if (selectedDifficulty !== 'all' && ex.difficulty !== selectedDifficulty) {
                return false;
              }
              if (filterType !== 'all') {
                if (filterType === 'karel' && ex.type !== 'karel') return false;
                if (filterType === 'coding' && ex.type !== 'coding') return false;
                if (filterType === 'completed' && !isCompleted(ex.id)) return false;
                if (filterType === 'uncompleted' && isCompleted(ex.id)) return false;
              }
              if (q) {
                const matchCode = ex.codehsCode?.toLowerCase().includes(q);
                const matchTitle = ex.title.toLowerCase().includes(q);
                const matchDesc = ex.description.toLowerCase().includes(q);
                const matchTag = ex.tags?.some((t) => t.toLowerCase().includes(q));
                const matchLesson = lesson.title.toLowerCase().includes(q);
                return matchCode || matchTitle || matchDesc || matchTag || matchLesson;
              }
              return true;
            });
            return { ...lesson, exercises: filteredExercises };
          })
          .filter((lesson) => lesson.exercises.length > 0);

        return {
          ...unit,
          lessons: filteredLessons,
          totalExercisesInUnit: unit.lessons.reduce((acc, l) => acc + l.exercises.length, 0),
          filteredExercisesCount: filteredLessons.reduce((acc, l) => acc + l.exercises.length, 0),
        };
      })
      .filter((unit) => (searchQuery ? unit.lessons.length > 0 : true));
  }, [searchQuery, selectedDifficulty, filterType, isCompleted]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Header */}
      <div className="mb-10 pb-8 border-b border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
              <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300">
                CodeHS Python 3
              </span>
              <span>•</span>
              <span>Intro to Coding Elective</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Curriculum Answer Key
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Exact solutions and autograder reference code for every lesson in the course.
            </p>
          </div>

          {/* Progress / Resume Card */}
          <div className="flex items-center gap-3 shrink-0">
            {lastAccessedExercise ? (
              <Link
                href={`/exercises/${lastAccessedExercise.id}`}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-200 transition-colors"
              >
                <div className="text-left">
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Resume</span>
                  <span className="font-medium truncate max-w-[140px] block">
                    {lastAccessedExercise.codehsCode} {lastAccessedExercise.title}
                  </span>
                </div>
                <ArrowRight size={14} className="text-zinc-400" />
              </Link>
            ) : null}

            <div className="px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs">
              <span className="text-[10px] uppercase font-mono text-zinc-500 block">Progress</span>
              <span className="font-mono text-zinc-200">
                {completedCount}/{totalExercisesCount} ({overallPercentage}%)
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-6 relative max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={15} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by lesson (e.g. '2.4.4', '2.12.4') or name ('Pancakes', 'Fireman')..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-16 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700 hidden sm:inline-block">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 text-xs text-zinc-400">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 font-medium text-zinc-500 mr-1">
            <Filter size={13} /> Filter:
          </div>

          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-md p-0.5">
            {['all', 'easy', 'medium', 'hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-2.5 py-1 rounded capitalize transition-colors ${
                  selectedDifficulty === diff
                    ? 'bg-zinc-800 text-zinc-100 font-medium'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-md p-0.5">
            {[
              { id: 'all', label: 'All' },
              { id: 'karel', label: 'Karel' },
              { id: 'coding', label: 'Python' },
              { id: 'completed', label: 'Completed' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setFilterType(t.id)}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filterType === t.id
                    ? 'bg-zinc-800 text-zinc-100 font-medium'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <button onClick={expandAll} className="hover:text-zinc-200 transition-colors">
            Expand All
          </button>
          <span className="text-zinc-700">•</span>
          <button onClick={collapseAll} className="hover:text-zinc-200 transition-colors">
            Collapse All
          </button>
        </div>
      </div>

      {/* Curriculum Units List */}
      <div className="space-y-4">
        {filteredUnits.map((unit) => {
          const isExpanded = expandedUnits.has(unit.id);
          const totalInUnit = unit.totalExercisesInUnit;
          const completedInUnit = unit.lessons.reduce((sum, lesson) => {
            return sum + lesson.exercises.filter((e) => isCompleted(e.id)).length;
          }, 0);
          const unitPercentage =
            totalInUnit > 0 ? Math.round((completedInUnit / totalInUnit) * 100) : 0;

          return (
            <div
              key={unit.id}
              className="rounded-xl border border-zinc-800/80 bg-zinc-950 overflow-hidden transition-colors"
            >
              {/* Unit Header Bar */}
              <div
                onClick={() => toggleUnit(unit.id)}
                className="p-4 sm:p-5 cursor-pointer flex items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors select-none"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-mono font-bold text-zinc-300 shrink-0">
                    {unit.number}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm sm:text-base font-semibold text-zinc-100 truncate">
                        Unit {unit.number}: {unit.title}
                      </h2>
                    </div>
                    <p className="text-xs text-zinc-400 truncate mt-0.5">
                      {unit.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                    {completedInUnit}/{totalInUnit} ({unitPercentage}%)
                  </span>
                  <div className="text-zinc-500">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              </div>

              {/* Unit Lessons & Exercises */}
              {isExpanded && (
                <div className="border-t border-zinc-800/80 p-4 sm:p-5 bg-zinc-950/60 space-y-4">
                  {unit.lessons.map((lesson) => (
                    <div key={lesson.id} className="space-y-1.5">
                      <div className="text-xs font-mono text-zinc-500 font-medium px-1">
                        Lesson {lesson.number}: {lesson.title}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {lesson.exercises.map((exercise) => {
                          const done = isCompleted(exercise.id);

                          return (
                            <Link
                              key={exercise.id}
                              href={`/exercises/${exercise.id}`}
                              className="group flex items-center justify-between p-2.5 rounded-lg border border-zinc-850 bg-zinc-900/40 hover:bg-zinc-900 hover:border-zinc-700 transition-colors"
                            >
                              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                <span className="text-zinc-600 group-hover:text-zinc-400 shrink-0">
                                  {done ? (
                                    <CheckCircle2 size={14} className="text-emerald-500" />
                                  ) : (
                                    <Code2 size={13} />
                                  )}
                                </span>

                                <span className="text-xs font-mono font-semibold text-zinc-400 shrink-0">
                                  {exercise.codehsCode}
                                </span>

                                <span
                                  className={`text-xs font-medium truncate transition-colors ${
                                    done
                                      ? 'text-zinc-400'
                                      : 'text-zinc-200 group-hover:text-white'
                                  }`}
                                >
                                  {exercise.title}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <span className="text-[10px] font-mono capitalize text-zinc-500">
                                  {exercise.difficulty}
                                </span>
                                <ArrowRight
                                  size={13}
                                  className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-transform"
                                />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {filteredUnits.length === 0 && (
          <div className="p-10 text-center rounded-xl border border-zinc-800 bg-zinc-950">
            <BookOpen className="mx-auto text-zinc-600 mb-2" size={32} />
            <h3 className="text-sm font-semibold text-zinc-200">No matching lessons found</h3>
            <p className="text-xs text-zinc-500 mt-1">Try searching by lesson code (e.g. 2.4.4) or reset your filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDifficulty('all');
                setFilterType('all');
              }}
              className="mt-3 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-md text-xs font-medium transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
