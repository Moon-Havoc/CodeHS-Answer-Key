'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  PanelLeft,
  Terminal,
  AlertCircle,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Exercise } from '@/lib/types';
import { units } from '@/lib/data/exercises';
import CodeBlock from '@/components/ui/CodeBlock';
import Sidebar from '@/components/layout/Sidebar';
import { useProgress } from '@/lib/utils/progress';

interface ExerciseContentProps {
  exercise: Exercise;
}

export default function ExerciseContent({ exercise }: ExerciseContentProps) {
  const [copied, setCopied] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { isCompleted, toggleExercise, recordAccess } = useProgress();
  const completed = isCompleted(exercise.id);
  const router = useRouter();

  // Record that the student accessed this exercise
  useEffect(() => {
    recordAccess(exercise.id);
  }, [exercise.id, recordAccess]);

  const allExercises = units.flatMap((u) => u.lessons.flatMap((l) => l.exercises));
  const currentIndex = allExercises.findIndex((e) => e.id === exercise.id);
  const prevExercise = currentIndex > 0 ? allExercises[currentIndex - 1] : null;
  const nextExercise = currentIndex < allExercises.length - 1 ? allExercises[currentIndex + 1] : null;

  const unit = units.find((u) => u.id === exercise.unitId);
  const lesson = unit?.lessons.find((l) => l.id === exercise.lessonId);

  // Keyboard navigation for Previous ([) and Next (])
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === '[' && prevExercise) {
        router.push(`/exercises/${prevExercise.id}`);
      } else if (e.key === ']' && nextExercise) {
        router.push(`/exercises/${nextExercise.id}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevExercise, nextExercise, router]);

  const handleCopySolution = async () => {
    try {
      await navigator.clipboard.writeText(exercise.solution);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code', err);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-[#09090b]">
      {/* Curriculum Sidebar Navigation */}
      <Sidebar
        units={units}
        activeExerciseId={exercise.id}
        isOpenMobile={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-10 py-10">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between mb-8 gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 mr-2"
            >
              <PanelLeft size={14} />
              <span>Lessons</span>
            </button>

            <Link href="/" className="hover:text-zinc-200 transition-colors">
              Curriculum
            </Link>
            <span className="text-zinc-600">/</span>
            {unit && (
              <>
                <span className="text-zinc-400">Unit {unit.number}</span>
                <span className="text-zinc-600">/</span>
              </>
            )}
            {lesson && (
              <>
                <span className="text-zinc-400 truncate max-w-[180px]">{lesson.title}</span>
                <span className="text-zinc-600">/</span>
              </>
            )}
            <span className="text-zinc-200 font-medium truncate max-w-[220px]">
              {exercise.title}
            </span>
          </div>

          {exercise.codehsCode && (
            <span className="text-xs font-mono font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md">
              CodeHS {exercise.codehsCode}
            </span>
          )}
        </div>

        {/* Title Header & Action Bar */}
        <div className="pb-6 mb-8 border-b border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-400 mb-2">
                <span className="font-mono font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                  Lesson {exercise.codehsCode || exercise.id}
                </span>
                <span>•</span>
                <span className="capitalize">{exercise.difficulty}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-zinc-500" />
                  {exercise.estimatedTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                {exercise.title}
              </h1>
            </div>

            {/* Clean Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={handleCopySolution}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  copied
                    ? 'bg-emerald-500 text-zinc-950 shadow-xs'
                    : 'bg-zinc-100 hover:bg-white text-zinc-950 shadow-xs'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={14} className="stroke-[2.5]" />
                    <span>Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Solution</span>
                  </>
                )}
              </button>

              <button
                onClick={() => toggleExercise(exercise.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                  completed
                    ? 'bg-zinc-900 border-zinc-700 text-emerald-400'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                <CheckCircle2 size={15} className={completed ? 'text-emerald-400' : 'text-zinc-600'} />
                <span>{completed ? 'Completed' : 'Mark Done'}</span>
              </button>
            </div>
          </div>

          {/* Copied helper banner */}
          {copied && (
            <div className="mt-3 py-1.5 px-3 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-center gap-2 animate-in fade-in duration-100">
              <Check size={13} className="text-emerald-400 shrink-0" />
              <span>
                Code copied. Switch to CodeHS and paste into your editor (<kbd className="font-mono px-1 py-0.2 bg-zinc-800 rounded text-[10px]">Cmd+V</kbd> / <kbd className="font-mono px-1 py-0.2 bg-zinc-800 rounded text-[10px]">Ctrl+V</kbd>).
              </span>
            </div>
          )}
        </div>

        {/* Assignment Problem Description */}
        <div className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
            Assignment
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed whitespace-pre-line">
            {exercise.description}
          </p>
        </div>

        {/* Exact Solution Section (Direct, No Tabs) */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Terminal size={13} className="text-zinc-400" />
              Solution Code
            </h2>
            <span className="text-xs text-zinc-500 font-mono">Verified for CodeHS Autograder</span>
          </div>

          <CodeBlock
            code={exercise.solution}
            fileName={`solution_${exercise.codehsCode ? exercise.codehsCode.replace(/\./g, '_') : 'main'}.py`}
          />
        </div>

        {/* Autograder Checklist & Tips */}
        <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 mb-2">
            <AlertCircle size={14} className="text-zinc-400" />
            <span>CodeHS Autograder Notes</span>
          </div>
          <ul className="text-xs text-zinc-400 space-y-1.5 pl-4 list-disc marker:text-zinc-600">
            <li>Ensure indentation is exactly 4 spaces inside functions and control structures.</li>
            <li>Double-check that function calls match CodeHS exact names (e.g. <code className="font-mono text-zinc-300">take_ball()</code> and <code className="font-mono text-zinc-300">put_ball()</code>).</li>
            <li>Verify Karel&apos;s final ending location and facing direction before submitting.</li>
          </ul>
        </div>

        {/* Previous / Next Navigation */}
        <div className="flex items-center justify-between border-t border-zinc-800/80 pt-6 pb-12 gap-4">
          {prevExercise ? (
            <Link
              href={`/exercises/${prevExercise.id}`}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 transition-colors group max-w-[45%]"
            >
              <ArrowLeft
                size={15}
                className="text-zinc-500 group-hover:text-zinc-300 group-hover:-translate-x-0.5 transition-transform shrink-0"
              />
              <div className="text-left min-w-0">
                <span className="text-[10px] uppercase font-mono text-zinc-500 block">Previous</span>
                <p className="text-xs font-medium truncate text-zinc-300 mt-0.5">
                  {prevExercise.codehsCode ? `${prevExercise.codehsCode} ` : ''}{prevExercise.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextExercise ? (
            <Link
              href={`/exercises/${nextExercise.id}`}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 transition-colors group text-right max-w-[45%]"
            >
              <div className="text-right min-w-0">
                <span className="text-[10px] uppercase font-mono text-zinc-500 block">Next</span>
                <p className="text-xs font-medium truncate text-zinc-300 mt-0.5">
                  {nextExercise.codehsCode ? `${nextExercise.codehsCode} ` : ''}{nextExercise.title}
                </p>
              </div>
              <ArrowRight
                size={15}
                className="text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-transform shrink-0"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
