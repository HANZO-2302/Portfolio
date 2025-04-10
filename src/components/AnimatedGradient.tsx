'use clien';
import { motion } from 'motion/react';

export default function AnimatedGradient() {
  return (
    <motion.div
      className="flex h-screen w-full items-center justify-center text-4xl font-bold text-white"
      style={{
        background: 'linear-gradient(90deg, #ff7eb3, #ff758c, #0128fb)',
        backgroundSize: '200% 200%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 0%', '0% 50%'],
      }}
      transition={{
        duration: 10,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    >
      Анимированный Градиент
    </motion.div>
  );
}
