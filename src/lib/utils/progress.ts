'use client';

import { useSyncExternalStore, useCallback } from 'react';

export interface Progress {
  completedExercises: string[];
  lastAccessed: Record<string, number>;
  startedAt: number;
}

const STORAGE_KEY = 'codehs-progress';
const EMPTY_PROGRESS: Progress = {
  completedExercises: [],
  lastAccessed: {},
  startedAt: 0,
};

let cachedProgress: Progress | null = null;
let cachedRaw: string | null = null;

const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function getSnapshot(): Progress {
  if (typeof window === 'undefined') {
    return EMPTY_PROGRESS;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === cachedRaw && cachedProgress !== null) {
      return cachedProgress;
    }

    if (!raw) {
      cachedRaw = null;
      cachedProgress = EMPTY_PROGRESS;
      return cachedProgress;
    }

    cachedRaw = raw;
    cachedProgress = JSON.parse(raw);
    return cachedProgress as Progress;
  } catch {
    return EMPTY_PROGRESS;
  }
}

function getServerSnapshot(): Progress {
  return EMPTY_PROGRESS;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cachedRaw = null;
      callback();
    }
  };

  window.addEventListener('storage', handleStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', handleStorage);
  };
}

function persistProgress(updated: Progress) {
  if (typeof window === 'undefined') return;
  try {
    const serialized = JSON.stringify(updated);
    localStorage.setItem(STORAGE_KEY, serialized);
    cachedRaw = serialized;
    cachedProgress = updated;
    notifyListeners();
  } catch (err) {
    console.error('Failed to save progress to localStorage', err);
  }
}

export function useProgress() {
  const progress = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleExercise = useCallback((exerciseId: string) => {
    const current = getSnapshot();
    const isCurrentlyDone = current.completedExercises.includes(exerciseId);
    const completed = isCurrentlyDone
      ? current.completedExercises.filter((id) => id !== exerciseId)
      : [...current.completedExercises, exerciseId];

    const updated: Progress = {
      ...current,
      completedExercises: completed,
      lastAccessed: {
        ...current.lastAccessed,
        [exerciseId]: Date.now(),
      },
      startedAt: current.startedAt || Date.now(),
    };

    persistProgress(updated);
  }, []);

  const recordAccess = useCallback((exerciseId: string) => {
    const current = getSnapshot();
    const updated: Progress = {
      ...current,
      lastAccessed: {
        ...current.lastAccessed,
        [exerciseId]: Date.now(),
      },
      startedAt: current.startedAt || Date.now(),
    };
    persistProgress(updated);
  }, []);

  const resetProgress = useCallback(() => {
    const empty: Progress = {
      completedExercises: [],
      lastAccessed: {},
      startedAt: Date.now(),
    };
    persistProgress(empty);
  }, []);

  const isCompleted = useCallback(
    (exerciseId: string) => {
      return progress.completedExercises.includes(exerciseId);
    },
    [progress.completedExercises]
  );

  const getCompletionCount = useCallback(() => {
    return progress.completedExercises.length;
  }, [progress.completedExercises]);

  const getCompletionPercentage = useCallback(
    (totalExercises: number) => {
      if (!totalExercises) return 0;
      return Math.min(100, Math.round((progress.completedExercises.length / totalExercises) * 100));
    },
    [progress.completedExercises]
  );

  const getLastAccessedExerciseId = useCallback(() => {
    const entries = Object.entries(progress.lastAccessed);
    if (entries.length === 0) return null;
    entries.sort((a, b) => b[1] - a[1]);
    return entries[0][0];
  }, [progress.lastAccessed]);

  return {
    progress,
    toggleExercise,
    recordAccess,
    resetProgress,
    isCompleted,
    getCompletionCount,
    getCompletionPercentage,
    getLastAccessedExerciseId,
  };
}
