'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, Clock, ArrowRight, Code2, CheckCircle2 } from 'lucide-react';
import { searchExercises } from '@/lib/data/exercises';
import { useProgress } from '@/lib/utils/progress';
import { Suspense, useState, useMemo } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const { isCompleted } = useProgress();

  const results = useMemo(() => {
    return query ? searchExercises(query) : [];
  }, [query]);

  const difficultyBadge = (d: string) => {
    switch (d) {
      case 'easy':
        return (
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Easy
          </span>
        );
      case 'medium':
        return (
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Medium
          </span>
        );
      case 'hard':
        return (
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20">
            Hard
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">
            {d}
          </span>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Search Input Hero */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Search Curriculum</h1>
        <p className="text-slate-400 text-sm mb-6">
          Find any CodeHS Python challenge by title, concept, lesson, or keyword.
        </p>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type keywords, e.g. 'turn_right', 'while', 'nested loops', 'strings'..."
            className="w-full bg-[#0d1424] border border-slate-700/80 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
          />
        </div>
      </div>

      {query && (
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4 px-1">
          <span>
            Found <strong className="text-white font-semibold">{results.length}</strong> result
            {results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </span>
        </div>
      )}

      {/* Results List */}
      <div className="space-y-3">
        {results.map((exercise) => {
          const done = isCompleted(exercise.id);

          return (
            <Link
              key={exercise.id}
              href={`/exercises/${exercise.id}`}
              className="block p-4 sm:p-5 rounded-2xl border border-slate-800/80 bg-[#0d1424] hover:border-slate-700 hover:bg-slate-800/40 transition-all group shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border ${
                      done
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : 'border-slate-700 bg-slate-800 text-slate-400'
                    }`}
                  >
                    {done ? <CheckCircle2 size={16} /> : <Code2 size={16} />}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold text-base text-white group-hover:text-sky-400 transition-colors truncate">
                        {exercise.title}
                      </h2>
                      {done && (
                        <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                          Solved
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {exercise.description}
                    </p>
                    <div className="flex items-center gap-3 mt-2.5 flex-wrap">
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        Unit {exercise.unitId.replace('u', '')}
                      </span>
                      {difficultyBadge(exercise.difficulty)}
                      <span className="flex items-center gap-1 text-slate-500 text-xs">
                        <Clock size={12} />
                        {exercise.estimatedTime}
                      </span>
                    </div>
                  </div>
                </div>

                <ArrowRight
                  className="text-slate-600 group-hover:text-sky-400 group-hover:translate-x-1 transition-all shrink-0 mr-1"
                  size={18}
                />
              </div>
            </Link>
          );
        })}
      </div>

      {query && results.length === 0 && (
        <div className="text-center py-16 rounded-2xl border border-slate-800 bg-[#0d1424] p-8 mt-4">
          <Search className="mx-auto text-slate-600 mb-3" size={40} />
          <h2 className="text-base font-semibold text-slate-200">No matching exercises</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            We couldn&apos;t find any challenges matching your query. Try searching for broader terms like
            &ldquo;loop&rdquo;, &ldquo;karel&rdquo;, or &ldquo;if&rdquo;.
          </p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-12 text-slate-500 text-sm">
          Loading search results...
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
