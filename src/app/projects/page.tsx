'use client';

import Animate from '@/components/AnimatePresence';

export default function illustrator() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <main className="flex grow items-center justify-center">
        <h1 className="text-gray-100">Projects</h1>
        <Animate />
      </main>
    </div>
  );
}
