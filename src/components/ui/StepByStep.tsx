'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ListOrdered,
} from 'lucide-react';
import { Step } from '@/lib/types';
import CodeBlock from './CodeBlock';

interface StepByStepProps {
  steps: Step[];
  keyConcepts: string[];
  commonMistakes: string[];
}

export default function StepByStep({ steps, keyConcepts, commonMistakes }: StepByStepProps) {
  const [openSteps, setOpenSteps] = useState<Set<number>>(new Set([1]));

  const toggleStep = (num: number) => {
    setOpenSteps((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  };

  const expandAll = () => {
    setOpenSteps(new Set(steps.map((s) => s.number)));
  };

  const collapseAll = () => {
    setOpenSteps(new Set());
  };

  return (
    <div className="space-y-8 my-8">
      {/* Steps Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <ListOrdered size={18} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Step-by-Step Breakdown</h3>
              <p className="text-xs text-slate-400">Algorithmic milestones to construct your solution</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={expandAll} className="hover:text-slate-200 transition-colors">
              Expand All
            </button>
            <span>•</span>
            <button onClick={collapseAll} className="hover:text-slate-200 transition-colors">
              Collapse All
            </button>
          </div>
        </div>

        {/* Steps List */}
        <div className="space-y-3">
          {steps.map((step) => {
            const isOpen = openSteps.has(step.number);

            return (
              <div
                key={step.number}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#0c1220] border-slate-700 shadow-md'
                    : 'bg-[#0a0f1a] border-slate-800 hover:border-slate-700/80'
                }`}
              >
                <button
                  onClick={() => toggleStep(step.number)}
                  className="w-full flex items-center justify-between p-4 text-left select-none group"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                        isOpen
                          ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">
                      {step.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 group-hover:text-slate-300 transition-colors">
                    {isOpen ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-800/80 bg-[#070b14]/50">
                    <p className="text-sm text-slate-300 leading-relaxed pt-2">{step.content}</p>
                    {step.code && (
                      <div className="mt-3">
                        <CodeBlock code={step.code} fileName={`step_${step.number}.py`} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Concepts & Common Pitfalls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Key Concepts */}
        {keyConcepts && keyConcepts.length > 0 && (
          <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-500/5 to-transparent p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Lightbulb size={15} />
              </div>
              <h4 className="font-bold text-sm text-indigo-200">Key Computer Science Concepts</h4>
            </div>
            <ul className="space-y-2 mt-2">
              {keyConcepts.map((concept, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-indigo-400 shrink-0 mt-0.5" />
                  <span>{concept}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Common Pitfalls */}
        {commonMistakes && commonMistakes.length > 0 && (
          <div className="rounded-2xl border border-rose-500/20 bg-gradient-to-b from-rose-500/5 to-transparent p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <AlertTriangle size={15} />
              </div>
              <h4 className="font-bold text-sm text-rose-200">Common Mistakes & Traps</h4>
            </div>
            <ul className="space-y-2 mt-2">
              {commonMistakes.map((mistake, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
