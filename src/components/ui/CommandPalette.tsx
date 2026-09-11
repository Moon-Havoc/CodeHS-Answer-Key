'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Code2, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { units } from '@/lib/data/exercises';
import { useProgress } from '@/lib/utils/progress';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { isCompleted } = useProgress();

  const allExercises = useMemo(() => {
    return units.flatMap((unit) =>
      unit.lessons.flatMap((lesson) =>
        lesson.exercises.map((exercise) => ({
          ...exercise,
          unitNumber: unit.number,
          unitTitle: unit.title,
          lessonTitle: lesson.title,
        }))
      )
    );
  }, []);

  const filteredExercises = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) {
      return allExercises.slice(0, 7);
    }
    return allExercises
      .filter((e) => {
        return (
          e.title.toLowerCase().includes(q) ||
          e.id.toLowerCase().includes(q) ||
          e.codehsCode?.toLowerCase().includes(q) ||
          e.unitTitle.toLowerCase().includes(q) ||
          e.lessonTitle.toLowerCase().includes(q) ||
          e.tags?.some((t) => t.toLowerCase().includes(q)) ||
          e.description.toLowerCase().includes(q)
        );
      })
      .slice(0, 15);
  }, [query, allExercises]);

  const openPalette = useCallback(() => {
    setQuery('');
    setSelectedIndex(0);
    setIsOpen(true);
  }, []);

  const closePalette = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) {
            setQuery('');
            setSelectedIndex(0);
          }
          return !prev;
        });
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        closePalette();
      }
    };

    const handleCustomOpen = () => {
      openPalette();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleCustomOpen);
    };
  }, [isOpen, openPalette, closePalette]);

  // Handle arrow keys and enter
  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredExercises.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredExercises.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = filteredExercises[selectedIndex];
      if (target) {
        navigateToExercise(target.id);
      }
    }
  };

  const navigateToExercise = (id: string) => {
    setIsOpen(false);
    router.push(`/exercises/${id}`);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={closePalette}
    >
      <div
        className="w-full max-w-2xl bg-[#0d1424] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden shadow-black/80 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyNavigation}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-[#0b111e]">
          <Search className="text-slate-400 shrink-0" size={19} />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search exercises, concepts, e.g. 'for loop', 'turn_right', 'lists'..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-500 hover:text-slate-300 p-1 rounded-md"
            >
              <X size={16} />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-xs text-slate-400 bg-slate-800/80 border border-slate-700 rounded-md font-mono">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div ref={listRef} className="overflow-y-auto p-2 space-y-1 divide-y divide-transparent">
          {filteredExercises.length > 0 ? (
            filteredExercises.map((exercise, idx) => {
              const active = idx === selectedIndex;
              const completed = isCompleted(exercise.id);

              return (
                <div
                  key={exercise.id}
                  onClick={() => navigateToExercise(exercise.id)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                    active
                      ? 'bg-indigo-600/15 border border-indigo-500/30 text-white'
                      : 'hover:bg-slate-800/40 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        active
                          ? 'bg-indigo-500/20 text-indigo-400'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Code2 size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {exercise.codehsCode && (
                          <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-1.5 py-0.2 rounded shrink-0">
                            {exercise.codehsCode}
                          </span>
                        )}
                        <span className="font-semibold text-sm truncate text-slate-100">
                          {exercise.title}
                        </span>
                        {completed && (
                          <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 rounded">
                            Done
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5 truncate">
                        <span>Unit {exercise.unitNumber}</span>
                        <span>•</span>
                        <span className="truncate">{exercise.lessonTitle}</span>
                        <span>•</span>
                        <span className="capitalize">{exercise.difficulty}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-xs font-mono text-slate-500">{exercise.estimatedTime}</span>
                    <ArrowRight
                      size={14}
                      className={`${active ? 'text-indigo-400 translate-x-0.5' : 'text-slate-600'} transition-transform`}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center">
              <BookOpen className="mx-auto text-slate-600 mb-2" size={32} />
              <p className="text-sm text-slate-400">No exercises found matching &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-600 mt-1">Try keywords like &ldquo;while&rdquo;, &ldquo;karel&rdquo;, &ldquo;if&rdquo;, or &ldquo;project&rdquo;</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-slate-800/80 bg-[#090e18] flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono">↵</kbd> Select
            </span>
          </div>
          <span className="flex items-center gap-1 text-slate-400">
            <Sparkles size={12} className="text-indigo-400" /> {allExercises.length} Exercises available
          </span>
        </div>
      </div>
    </div>
  );
}
