import { motion } from 'motion/react';

export default function GradientButton() {
  return (
    <motion.div>
      <motion.div
        className="absolute inset-0 z-0 h-14 w-full max-w-sm rounded-xl bg-gradient-to-r from-blue-700 via-indigo-500 to-cyan-600 shadow-lg/50"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 3,
          delay: 3,
          repeatDelay: 6,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute inset-0 z-0 h-14 w-full max-w-sm rounded-xl bg-gradient-to-r from-emerald-700 via-green-400 to-yellow-500 shadow-lg/50"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 3,
          delay: 5,
          repeatDelay: 6,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute inset-0 z-0 h-14 w-full max-w-sm rounded-xl bg-gradient-to-r from-indigo-600 via-red-500 to-orange-500 shadow-lg/50"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 3,
          delay: 7,
          repeatDelay: 6,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'linear',
        }}
      />

      {/* Основной блок — верхний слой */}
      <div className="h-14 w-full max-w-sm rounded-xl bg-gradient-to-r from-yellow-500 via-green-600 to-emerald-700 p-[1px] shadow-lg/50">
        <div className="relative z-10 flex h-full w-full items-center justify-center rounded-[calc(theme(borderRadius.xl)-1px)] bg-gray-300 text-white dark:bg-gray-800">
          <span className="text-2xl font-medium text-gray-900 dark:text-white">Soft Skills</span>
        </div>
      </div>
    </motion.div>
  );
}
