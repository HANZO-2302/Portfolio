// 'use client';

// import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';

export default function Animate() {
  // const pathname = usePathname();
  return (
    <AnimatePresence>
      {/* mode="wait" */}
      <motion.div
        // key={pathname} // Уникальный ключ
        className="pointer-events-none fixed inset-0 z-20 bg-gray-400 dark:bg-gray-900"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        // onAnimationComplete={() => console.log("Animation complete")}
      />
    </AnimatePresence>
  );
}
