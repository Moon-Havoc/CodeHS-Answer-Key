'use client';

import { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, Eye, EyeOff, Sparkles } from 'lucide-react';

interface HintsProps {
  hints: string[];
}

export default function Hints({ hints }: HintsProps) {
  const [revealedHints, setRevealedHints] = useState<Set<number>>(new Set());

  if (!hints || hints.length === 0) return null;

  const toggleHint = (index: number) => {
    setRevealedHints((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const revealAll = () => {
    setRevealedHints(new Set(hints.map((_, i) => i)));
  };

  const hideAll = () => {
    setRevealedHints(new Set());
  };

  const allRevealed = revealedHints.size === hints.length;

  return (
    <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent overflow-hidden my-6">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-amber-500/15 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Lightbulb size={17} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-sm text-amber-200">Progressive Hints</h3>
              <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                {revealedHints.size}/{hints.length} revealed
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Unlock hints one by one to solve the challenge independently.
            </p>
          </div>
        </div>

        <div>
          {allRevealed ? (
            <button
              onClick={hideAll}
              className="text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <EyeOff size={13} /> Hide all
            </button>
          ) : (
            <button
              onClick={revealAll}
              className="text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Eye size={13} /> Reveal all
            </button>
          )}
        </div>
      </div>

      {/* Hints List */}
      <div className="p-4 sm:p-5 space-y-3">
        {hints.map((hint, idx) => {
          const isRevealed = revealedHints.has(idx);

          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all ${
                isRevealed
                  ? 'bg-slate-900/80 border-slate-700/80'
                  : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleHint(idx)}
                className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left select-none"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 w-6 h-6 rounded-md flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-300">
                    Hint {idx + 1}: {idx === 0 ? 'Getting Started' : idx === 1 ? 'Logic & Conditions' : 'Implementation Detail'}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-xs font-medium hidden sm:inline">
                    {isRevealed ? 'Collapse' : 'Reveal'}
                  </span>
                  {isRevealed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>

              {isRevealed && (
                <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-200 border-t border-slate-800/60 leading-relaxed font-sans mt-1">
                  <div className="flex items-start gap-2.5 pt-2">
                    <Sparkles size={14} className="text-amber-400 shrink-0 mt-0.5" />
                    <div className="flex-1">{hint}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
