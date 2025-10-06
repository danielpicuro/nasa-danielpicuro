'use client';

import { useState } from 'react';
import { InteractiveAiIcon } from './interactive-ai-icon';
import { AiChatModal } from './ai-chat-modal';

export function AiCompanion() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="!fixed !bottom-8 !right-8 !z-40"
      onMouseEnter={openModal}
      onMouseLeave={closeModal}
    >
      <InteractiveAiIcon />
      <AiChatModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
