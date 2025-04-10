'use clien';
import { motion } from 'motion/react';

export default function AnimatedGradient() {
  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center text-white font-bold text-4xl"
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
