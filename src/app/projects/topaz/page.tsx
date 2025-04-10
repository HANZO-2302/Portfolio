'use client';

import Animate from '@/components/AnimatePresence';

export default function Topaz() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <main className="flex grow items-center justify-center">
        <Animate />
        <h1 className="text-gray-100">Projects Topaz</h1>
      </main>
    </div>
  );
}
