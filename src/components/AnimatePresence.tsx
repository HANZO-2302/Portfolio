'use clien';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';

export default function Animate() {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {/* mode="wait" */}
      <motion.div
        key={pathname} // Уникальный ключ
        className="pointer-events-none fixed inset-0 z-40 bg-gray-300 dark:bg-gray-900"
        initial={{ opacity: '100%' }}
        animate={{ opacity: '0%' }}
        exit={{ opacity: '100%' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        // onAnimationComplete={() => console.log("Animation complete")}
      />
    </AnimatePresence>
  );
}
