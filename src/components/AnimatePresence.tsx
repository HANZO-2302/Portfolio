// 'use clien';
// import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';

export default function Animate() {
  // const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        // key={pathname} // Уникальный ключ
        className="pointer-events-none fixed inset-0 bg-gray-900 z-40"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        // onAnimationComplete={() => console.log("Animation complete")}
      />
    </AnimatePresence>
  );
}
