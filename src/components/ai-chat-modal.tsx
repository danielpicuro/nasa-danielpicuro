'use client';

import { useState, useEffect, useRef } from 'react';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AiChatModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export function AiChatModal({ isModalOpen, closeModal }: AiChatModalProps) {
  const { chatHistory, setChatHistory, pageContext, isLoading, setIsLoading } = useAiCompanion();
  const [input, setInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  console.log('AiChatModal rendering. chatHistory:', chatHistory);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: `user-${Date.now()}`, role: 'user' as const, text: input };
    const newHistory = [...chatHistory, userMessage];
    setChatHistory(newHistory);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          history: newHistory.slice(0, -1).map(({ role, text }) => ({ role, text })), // Strip IDs for API
          message: input,
          pageContext: pageContext,
        }),
      });

      if (!response.ok) {
        throw new Error('API error');
      }

      const { text } = await response.json();
      setChatHistory(prev => [...prev, { id: `model-${Date.now()}`, role: 'model', text }]);
    } catch (error) {
      setChatHistory(prev => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: 'model',
          text: "Sorry, I'm having trouble connecting. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="!fixed !bottom-28 !right-8 !z-50 !w-[90vw] !max-w-md !origin-bottom-right"
        >
          <div className="!relative !bg-slate-800 !text-white !rounded-lg !shadow-2xl !flex !flex-col !h-auto !max-h-[70vh]">
            {/* Speech bubble tail */}
            <div className="!absolute !bottom-0 !right-6 !w-0 !h-0 !border-l-[10px] !border-l-transparent !border-r-[10px] !border-r-transparent !border-t-[15px] !border-t-slate-800 !-mb-[14px]" />

            <header className="!flex !items-center !justify-between !p-4 !border-b !border-slate-700">
              <h2 className="!text-lg !font-semibold !flex !items-center !gap-2">
                <Bot className="!text-cyan-400" />
                Urban AI Companion
              </h2>
              <button onClick={closeModal} className="!p-1 !rounded-full hover:!bg-slate-700">
                <X />
              </button>
            </header>

            <div ref={chatContainerRef} className="!flex-1 !p-4 !overflow-y-auto !space-y-4">
              {chatHistory.map(msg => (
                <div
                  key={msg.id}
                  className={`!flex !gap-3 ${msg.role === 'user' ? '!justify-end' : '!justify-start'}`}
                >
                  {msg.role === 'model' && <Bot className="!text-cyan-400 !flex-shrink-0" />}
                  <div
                    className={`!max-w-[80%] !p-3 !rounded-lg ${msg.role === 'user' ? '!bg-cyan-600' : '!bg-slate-700'}`}
                  >
                    <p className="!text-sm">{msg.text}</p>
                  </div>
                  {msg.role === 'user' && <User className="!flex-shrink-0" />}
                </div>
              ))}
              {isLoading && (
                <div className="!flex !gap-3 !justify-start">
                  <Bot className="!text-cyan-400 !flex-shrink-0 !animate-pulse" />
                  <div className="!max-w-[80%] !p-3 !rounded-lg !bg-slate-700">
                    <p className="!text-sm !animate-pulse">Thinking...</p>
                  </div>
                </div>
              )}
            </div>

            <footer className="!p-4 !border-t !border-slate-700">
              <div className="!flex !items-center !gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && handleSend()}
                  placeholder="Ask your AI companion..."
                  className="!w-full !bg-slate-700 !border !border-slate-600 !rounded-lg !p-2 !focus:!outline-none !focus:!ring-2 !focus:!ring-cyan-500"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="!bg-cyan-600 !p-2 !rounded-lg disabled:!bg-slate-600"
                >
                  <Send />
                </button>
              </div>
            </footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
