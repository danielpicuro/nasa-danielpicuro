'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

interface AiCompanionContextType {
  chatHistory: Message[];
  setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
  setInitialPrompt: (prompt: string) => void;
  pageContext: string | null;
  setPageContext: (context: string | null) => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
}

const AiCompanionContext = createContext<AiCompanionContextType | undefined>(undefined);

export function AiCompanionProvider({ children }: { children: ReactNode }) {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [pageContext, setPageContext] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const setInitialPrompt = useCallback((prompt: string) => {
    setChatHistory([
      {
        id: `initial-${Date.now()}`,
        role: 'model',
        text: prompt,
      },
    ]);
  }, []);

  return (
    <AiCompanionContext.Provider
      value={{
        chatHistory,
        setChatHistory,
        setInitialPrompt,
        pageContext,
        setPageContext,
        isLoading,
        setIsLoading,
        language,
        setLanguage,
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
