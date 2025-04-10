'use client';

import Animate from '@/components/AnimatePresence';

export default function illustrator() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8  bg-gray-900 text-gray-100 ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <Animate />
        <h1>Projects illustrator</h1>
      </main>
    </div>
  );
}
