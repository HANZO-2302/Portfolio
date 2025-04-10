'use client';

import Animate from '@/components/AnimatePresence';

export default function illustrator() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center bg-gray-900 p-8 text-gray-100">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Animate />
        <h1>Projects illustrator</h1>
      </main>
    </div>
  );
}
