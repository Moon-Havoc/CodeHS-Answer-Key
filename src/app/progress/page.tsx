'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Clock,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Code2,
  Award,
  Circle,
  ExternalLink,
} from 'lucide-react';
import { units, getAllExercises } from '@/lib/data/exercises';
import { useProgress } from '@/lib/utils/progress';

export default function ProgressPage() {
  const { progress, resetProgress, isCompleted, getCompletionPercentage } = useProgress();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const allExercises = useMemo(() => getAllExercises(), []);
  const totalExercises = allExercises.length;
  const completedExercisesList = useMemo(() => {
    return allExercises.filter((e) => isCompleted(e.id));
  }, [allExercises, isCompleted]);

  const percentage = getCompletionPercentage(totalExercises);

  // Unit breakdown stats
  const unitStats = useMemo(() => {
    return units.map((unit) => {
      const unitExercises = unit.lessons.flatMap((l) => l.exercises);
      const total = unitExercises.length;
      const completed = unitExercises.filter((e) => isCompleted(e.id)).length;
      const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
      return {
        ...unit,
        total,
        completed,
        percentage: pct,
        uncompletedExercises: unitExercises.filter((e) => !isCompleted(e.id)),
      };
    });
  }, [isCompleted]);

  // Last accessed exercises sorted by timestamp
  const recentlyPracticed = useMemo(() => {
    const entries = Object.entries(progress.lastAccessed);
    entries.sort((a, b) => b[1] - a[1]);
    return entries
      .map(([id, timestamp]) => {
        const ex = allExercises.find((e) => e.id === id);
        return ex ? { exercise: ex, timestamp } : null;
      })
      .filter((item): item is { exercise: (typeof allExercises)[0]; timestamp: number } => item !== null)
      .slice(0, 8);
  }, [progress.lastAccessed, allExercises]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
            <Award size={14} /> Learning Dashboard
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Your Progress</h1>
          <p className="text-slate-400 text-sm mt-1">
            Track your CodeHS Python mastery, completed challenges, and curriculum pacing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {showResetConfirm ? (
            <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 p-2 rounded-xl text-xs">
              <span className="text-rose-300 font-medium">Reset all progress data?</span>
              <button
                onClick={() => {
                  resetProgress();
                  setShowResetConfirm(false);
                }}
                className="px-2.5 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-semibold"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-2 py-1 text-slate-400 hover:text-white"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/80 text-slate-400 hover:text-slate-200 text-xs transition-colors"
            >
              <RotateCcw size={13} /> Reset Progress
            </button>
          )}
        </div>
      </div>

      {/* Hero Stats Card */}
      <div className="p-8 rounded-3xl border border-slate-800/80 bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#080d17] mb-10 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                {percentage}%
              </span>
              <span className="text-slate-400 text-sm font-medium">Overall Course Completed</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-slate-800/90 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
              <div
                className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400" />
                <span>
                  <strong className="text-white font-semibold">{completedExercisesList.length}</strong> of{' '}
                  {totalExercises} Exercises Solved
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-sky-400" />
                <span>
                  <strong className="text-white font-semibold">
                    {totalExercises - completedExercisesList.length}
                  </strong>{' '}
                  Remaining
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center border-t md:border-t-0 md:border-l border-slate-800/80 pt-6 md:pt-0 md:pl-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all"
            >
              Continue Learning <ArrowRight size={14} />
            </Link>
            <span className="text-[11px] text-slate-500 mt-2">Pick up where you left off</span>
          </div>
        </div>
      </div>

      {/* Unit By Unit Breakdown */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
          <Code2 className="text-sky-400" size={18} /> Unit-by-Unit Completion
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {unitStats.map((stat) => (
            <div
              key={stat.id}
              className="p-5 rounded-2xl border border-slate-800/80 bg-[#0d1424] hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      {stat.icon}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-sky-400 tracking-wider">
                        Unit {stat.number}
                      </span>
                      <h3 className="font-bold text-sm text-white truncate max-w-[170px]">
                        {stat.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {stat.percentage}%
                  </span>
                </div>

                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-emerald-400 rounded-full transition-all duration-300"
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                <span>
                  {stat.completed} / {stat.total} exercises
                </span>

                {stat.uncompletedExercises.length > 0 ? (
                  <Link
                    href={`/exercises/${stat.uncompletedExercises[0].id}`}
                    className="text-sky-400 hover:text-sky-300 text-xs font-medium flex items-center gap-1"
                  >
                    Next <ArrowRight size={12} />
                  </Link>
                ) : (
                  <span className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                    <CheckCircle2 size={12} /> Mastered
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Practiced Exercises */}
      {recentlyPracticed.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
            <Clock className="text-indigo-400" size={18} /> Recently Accessed
          </h2>

          <div className="border border-slate-800/80 rounded-2xl bg-[#0d1424] divide-y divide-slate-800/60 overflow-hidden">
            {recentlyPracticed.map(({ exercise, timestamp }) => {
              const done = isCompleted(exercise.id);
              const dateStr = new Date(timestamp).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={exercise.id}
                  className="p-4 flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 border ${
                        done
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'border-slate-700 bg-slate-800 text-slate-500'
                      }`}
                    >
                      {done ? <CheckCircle2 size={14} /> : <Circle size={10} />}
                    </div>

                    <div className="min-w-0">
                      <Link
                        href={`/exercises/${exercise.id}`}
                        className="font-medium text-sm text-slate-200 hover:text-sky-400 transition-colors truncate block"
                      >
                        {exercise.title}
                      </Link>
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        Unit {exercise.unitId.replace('u', '')} • {exercise.estimatedTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-slate-500 hidden sm:inline">{dateStr}</span>
                    <Link
                      href={`/exercises/${exercise.id}`}
                      className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                      title="Open exercise"
                    >
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
