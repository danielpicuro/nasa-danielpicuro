'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { Bot } from 'lucide-react';

export function AiChatTrigger() {
  const { openModal } = useAiCompanion();

  return (
    <button
      onClick={openModal}
      className="!fixed !bottom-8 !right-8 !bg-cyan-500 hover:!bg-cyan-600 !text-white !p-4 !rounded-full !shadow-lg !z-40 !transition-transform hover:!scale-110"
      aria-label="Open AI Companion"
    >
      <Bot className="!w-8 !h-8" />
    </button>
  );
}
