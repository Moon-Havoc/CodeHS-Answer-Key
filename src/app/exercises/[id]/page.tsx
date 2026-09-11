import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getExerciseById, units } from '@/lib/data/exercises';
import ExerciseContent from '@/components/exercise/ExerciseContent';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return units.flatMap((unit) =>
    unit.lessons.flatMap((lesson) =>
      lesson.exercises.map((exercise) => ({ id: exercise.id }))
    )
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const exercise = getExerciseById(id);

  if (!exercise) {
    return {
      title: 'Exercise Not Found | CodeHS Assistant',
    };
  }

  return {
    title: `${exercise.title} | CodeHS Python Assistant`,
    description: exercise.description,
  };
}

export default async function ExercisePage({ params }: PageProps) {
  const { id } = await params;
  const exercise = getExerciseById(id);

  if (!exercise) {
    notFound();
  }

  return <ExerciseContent exercise={exercise} />;
}
