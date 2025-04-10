'use client';

import { motion } from 'motion/react';
export default function Rotate() {
  return (
    <motion.div
      className="p-6 bg-white rounded-md text-indigo-600 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Я плавно появляюсь!
    </motion.div>
  );
}

