'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Terminal, BookMarked, CheckCircle2, Menu, X, FileCode2 } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useProgress } from '@/lib/utils/progress';
import { units } from '@/lib/data/exercises';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { progress, getCompletionPercentage } = useProgress();

  const totalExercises = useMemo(() => {
    return units.reduce((acc, u) => acc + u.lessons.reduce((lacc, l) => lacc + l.exercises.length, 0), 0);
  }, []);

  const completedCount = progress.completedExercises.length;
  const percentage = getCompletionPercentage(totalExercises);

  const openCommandPalette = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-command-palette'));
    }
  };

  const navLinks = [
    { href: '/', label: 'Curriculum', icon: BookMarked, active: pathname === '/' || pathname.startsWith('/exercises') },
    { href: '/reference', label: 'Reference Sheet', icon: FileCode2, active: pathname === '/reference' },
    { href: '/progress', label: 'My Progress', icon: CheckCircle2, active: pathname === '/progress' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#09090b]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-4">
          {/* Logo & Course Info */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-zinc-100">
                <Terminal size={14} className="text-zinc-200" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-zinc-100 text-sm tracking-tight">CodeHS</span>
                <span className="text-zinc-400 text-sm font-medium">Answer Key</span>
                <span className="text-[10px] uppercase font-mono font-medium px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/60 hidden sm:inline-block">
                  Python
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      link.active
                        ? 'bg-zinc-800 text-zinc-100 border border-zinc-700/80'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                    }`}
                  >
                    <Icon size={13} className={link.active ? 'text-zinc-200' : 'text-zinc-500'} />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Center / Right: Quick Search Button & Progress Pill */}
          <div className="flex items-center gap-3">
            {/* Quick Search Trigger */}
            <button
              onClick={openCommandPalette}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors text-xs w-48 sm:w-60 justify-between"
              title="Search exercises (⌘K)"
            >
              <div className="flex items-center gap-2 truncate">
                <Search size={13} className="text-zinc-500" />
                <span className="truncate">Search lessons...</span>
              </div>
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.2 text-[10px] font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Progress Badge */}
            <Link
              href="/progress"
              className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors text-xs"
              title="View your learning progress"
            >
              <span className="text-zinc-400 font-mono text-[11px]">
                {completedCount}/{totalExercises}
              </span>
              <span className="text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-1 rounded border border-emerald-500/20">
                {percentage}%
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#09090b] p-4 space-y-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openCommandPalette();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs"
          >
            <span className="flex items-center gap-2">
              <Search size={14} /> Search lessons...
            </span>
            <kbd className="px-1.5 py-0.5 text-xs bg-zinc-800 border border-zinc-700 rounded font-mono">⌘K</kbd>
          </button>

          <div className="space-y-1 pt-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                    link.active
                      ? 'bg-zinc-800 text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  <Icon size={14} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 px-3">
            <span>Progress: {completedCount} of {totalExercises}</span>
            <span className="text-emerald-400 font-mono font-medium">{percentage}%</span>
          </div>
        </div>
      )}
    </header>
  );
}
