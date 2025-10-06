'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AiCompanionContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  chatHistory: Message[];
  setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
  setInitialPrompt: (prompt: string) => void;
}

const AiCompanionContext = createContext<AiCompanionContextType | undefined>(undefined);

export function AiCompanionProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const setInitialPrompt = (prompt: string) => {
    setChatHistory([
      {
        role: 'model',
        text: prompt,
      },
    ]);
  };

  return (
    <AiCompanionContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        chatHistory,
        setChatHistory,
        setInitialPrompt,
      }}
    >
      {children}
    </AiCompanionContext.Provider>
  );
}

export function useAiCompanion() {
  const context = useContext(AiCompanionContext);
  if (context === undefined) {
    throw new Error('useAiCompanion must be used within an AiCompanionProvider');
  }
  return context;
}
