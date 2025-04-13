'use client';
import BackgroundDots from '@/components/folderBackgroundDots/BackgroundDots';
import Animate from '@/components/AnimatePresence';

export default function illustrator() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <main className="flex flex-grow items-center justify-center text-gray-100">
        <h1>Projects</h1>
        <BackgroundDots />
        <Animate />
      </main>
    </div>
  );
}
