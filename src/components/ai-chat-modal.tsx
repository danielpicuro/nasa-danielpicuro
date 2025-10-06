'use client';

import { useState } from 'react';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { X, Send, Bot, User } from 'lucide-react';

export function AiChatModal() {
  const { isModalOpen, closeModal, chatHistory, setChatHistory } = useAiCompanion();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, text: input };
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
          history: newHistory.slice(0, -1), // Send history up to the user's message
          message: input,
        }),
      });

      if (!response.ok) {
        throw new Error('API error');
      }

      const { text } = await response.json();
      setChatHistory(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      setChatHistory(prev => [
        ...prev,
        { role: 'model', text: "Sorry, I'm having trouble connecting. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="!fixed !inset-0 !bg-black/50 !z-50 !flex !items-center !justify-center !backdrop-blur-sm">
      <div className="!bg-slate-800 !text-white !rounded-lg !shadow-2xl !w-[90%] !max-w-2xl !h-[70vh] !flex !flex-col">
        <header className="!flex !items-center !justify-between !p-4 !border-b !border-slate-700">
          <h2 className="!text-lg !font-semibold !flex !items-center !gap-2">
            <Bot className="!text-cyan-400" />
            Urban AI Companion
          </h2>
          <button onClick={closeModal} className="!p-1 !rounded-full hover:!bg-slate-700">
            <X />
          </button>
        </header>

        <div className="!flex-1 !p-4 !overflow-y-auto !space-y-4">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
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
    </div>
  );
}
