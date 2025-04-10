'use client';

import Animate from '@/components/AnimatePresence';

export default function illustrator() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <main className="grow flex items-center justify-center ">
        <h1 className=" text-gray-100">Projects</h1>
        <Animate />
      </main>
    </div>
  );
}
