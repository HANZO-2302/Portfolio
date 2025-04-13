'use client';

import Animate from '@/components/AnimatePresence';

export default function Premiere() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <main className="flex flex-grow items-center justify-center text-gray-100">
        <Animate />
        <h1>Projects Premiere Pro</h1>
      </main>
    </div>
  );
}
