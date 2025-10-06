'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { language, setLanguage } = useAiCompanion();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="!fixed !top-6 !right-6 !z-50 !bg-slate-800/50 !backdrop-blur-sm !border !border-white/20 !text-white !font-bold !w-12 !h-12 !rounded-full !flex !items-center !justify-center"
      aria-label="Toggle language"
    >
      {language.toUpperCase()}
    </motion.button>
  );
}
