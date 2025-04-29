'use client';

import Animate from '@/components/AnimatePresence';

export default function After() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-grow items-center justify-center">
        <Animate />
        <h1>Projects After Effects</h1>
      </main>
    </div>
  );
}
