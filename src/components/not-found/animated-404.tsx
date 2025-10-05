'use client';

import { motion } from 'framer-motion';

export function Animated404() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="!relative"
    >
      <motion.h1
        className="!text-[180px] md:!text-[240px] !font-bold !text-transparent !bg-clip-text !bg-gradient-to-r !from-cyan-400 !via-blue-500 !to-purple-600"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      >
        404
      </motion.h1>

      {/* Decorative elements */}
      <motion.div
        className="!absolute !-top-10 !-left-10 !w-32 !h-32 !bg-cyan-500/20 !rounded-full !blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="!absolute !-bottom-10 !-right-10 !w-40 !h-40 !bg-purple-500/20 !rounded-full !blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
