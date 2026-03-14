'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';

export default function Animate() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="pointer-events-none fixed inset-0 z-20 bg-zinc-400 dark:bg-zinc-800"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </AnimatePresence>
  );
}
