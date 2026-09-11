'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronDown, CheckCircle2, Circle, Search, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Unit } from '@/lib/types';
import { useProgress } from '@/lib/utils/progress';

interface SidebarProps {
  units: Unit[];
  activeExerciseId?: string;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export default function Sidebar({
  units,
  activeExerciseId,
  isOpenMobile,
  onCloseMobile,
}: SidebarProps) {
  const pathname = usePathname();
  const { isCompleted } = useProgress();
  const [searchFilter, setSearchFilter] = useState('');

  // Find active unit to keep it expanded by default
  const activeUnitId = useMemo(() => {
    if (!activeExerciseId) return units[0]?.id;
    for (const unit of units) {
      for (const lesson of unit.lessons) {
        if (lesson.exercises.some((e) => e.id === activeExerciseId)) {
          return unit.id;
        }
      }
    }
    return units[0]?.id;
  }, [activeExerciseId, units]);

  // Track explicit user toggles
  const [collapsedUnits, setCollapsedUnits] = useState<Set<string>>(new Set());
  const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set());

  const isUnitOpen = (unitId: string) => {
    if (collapsedUnits.has(unitId)) return false;
    if (expandedUnits.has(unitId)) return true;
    return unitId === activeUnitId || unitId === 'u2';
  };

  const toggleUnit = (unitId: string) => {
    const currentlyOpen = isUnitOpen(unitId);
    if (currentlyOpen) {
      setCollapsedUnits((prev) => new Set([...prev, unitId]));
      setExpandedUnits((prev) => {
        const next = new Set(prev);
        next.delete(unitId);
        return next;
      });
    } else {
      setExpandedUnits((prev) => new Set([...prev, unitId]));
      setCollapsedUnits((prev) => {
        const next = new Set(prev);
        next.delete(unitId);
        return next;
      });
    }
  };

  const filteredUnits = useMemo(() => {
    const q = searchFilter.toLowerCase().trim();
    if (!q) return units;
    return units
      .map((u) => {
        const filteredLessons = u.lessons
          .map((l) => ({
            ...l,
            exercises: l.exercises.filter(
              (e) =>
                e.title.toLowerCase().includes(q) ||
                e.id.toLowerCase().includes(q) ||
                e.codehsCode?.toLowerCase().includes(q) ||
                l.title.toLowerCase().includes(q)
            ),
          }))
          .filter((l) => l.exercises.length > 0);

        return { ...u, lessons: filteredLessons };
      })
      .filter((u) => u.lessons.length > 0);
  }, [searchFilter, units]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed lg:sticky top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-72 bg-[#09090b] border-r border-zinc-800 overflow-y-auto flex flex-col transition-transform duration-150 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Sidebar Header & Filter */}
        <div className="p-3 border-b border-zinc-800 sticky top-0 bg-[#09090b] z-10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-medium text-zinc-400 uppercase tracking-wider">
              Lessons
            </span>
            {onCloseMobile && (
              <button
                onClick={onCloseMobile}
                className="lg:hidden p-1 text-zinc-400 hover:text-white rounded"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" size={13} />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter lessons..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md pl-7 pr-3 py-1 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-700"
            />
          </div>
        </div>

        {/* Units Accordion */}
        <div className="p-2 space-y-0.5 flex-1">
          {filteredUnits.map((unit) => {
            const isOpen = isUnitOpen(unit.id);
            const totalInUnit = unit.lessons.reduce((sum, l) => sum + l.exercises.length, 0);
            const completedInUnit = unit.lessons.reduce((sum, l) => {
              return sum + l.exercises.filter((e) => isCompleted(e.id)).length;
            }, 0);

            return (
              <div key={unit.id} className="rounded-md overflow-hidden">
                <button
                  onClick={() => toggleUnit(unit.id)}
                  className={`w-full flex items-center justify-between p-2 rounded-md text-left text-xs transition-colors ${
                    isOpen
                      ? 'bg-zinc-850 text-zinc-200 font-medium'
                      : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span className="text-zinc-500 shrink-0">
                      {isOpen ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                    </span>
                    <span className="truncate">
                      Unit {unit.number}: {unit.title}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-500 shrink-0">
                    {completedInUnit}/{totalInUnit}
                  </span>
                </button>

                {isOpen && (
                  <div className="ml-3 pl-2.5 border-l border-zinc-800/80 space-y-2.5 my-1">
                    {unit.lessons.map((lesson) => (
                      <div key={lesson.id} className="space-y-0.5">
                        <p className="text-[10px] font-mono font-medium text-zinc-500 px-2 py-0.5 uppercase tracking-wider truncate">
                          Lesson {lesson.number}
                        </p>

                        <div className="space-y-0.5">
                          {lesson.exercises.map((exercise) => {
                            const isCurrent =
                              exercise.id === activeExerciseId ||
                              pathname === `/exercises/${exercise.id}`;
                            const done = isCompleted(exercise.id);

                            return (
                              <Link
                                key={exercise.id}
                                href={`/exercises/${exercise.id}`}
                                onClick={onCloseMobile}
                                className={`flex items-center justify-between px-2 py-1.5 rounded-md text-xs transition-colors ${
                                  isCurrent
                                    ? 'bg-zinc-800 text-white font-medium'
                                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                                }`}
                              >
                                <div className="flex items-center gap-1.5 truncate pr-2">
                                  {exercise.codehsCode && (
                                    <span className="text-[10px] font-mono text-zinc-500 shrink-0">
                                      {exercise.codehsCode}
                                    </span>
                                  )}
                                  <span className="truncate">{exercise.title}</span>
                                </div>
                                <span className="shrink-0">
                                  {done ? (
                                    <CheckCircle2 size={12} className="text-emerald-500" />
                                  ) : (
                                    <Circle size={8} className="text-zinc-700" />
                                  )}
                                </span>
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
        </div>
      </aside>
    </>
  );
}
