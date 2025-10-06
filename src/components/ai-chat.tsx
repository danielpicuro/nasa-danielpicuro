'use client';

import { useState } from 'react';
import { Sparkles, X, Send, Minimize2 } from 'lucide-react';

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>(
    []
  );
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);

    // TODO: Implement AI integration here
    // For now, just add a placeholder response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content:
            'AI response will be implemented here. This is a placeholder for the AI integration.',
        },
      ]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="  fixed bottom-24 right-6 w-96 h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="!flex items-center !justify-between p-4 border-b border-border bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <div className="!flex items-center !gap-2">
              <div className="!p-2 !bg-gradient-to-br !from-purple-500 !to-pink-500 !rounded-lg">
                <Sparkles className="!h-4 !w-4 !text-white" />
              </div>
              <div>
                <h3 className="!font-semibold !text-foreground">AI Assistant</h3>
                <p className="!text-xs !text-muted-foreground">Ask me anything about the project</p>
              </div>
            </div>
            <div className="!flex items-center !gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="!p-1.5 !rounded-lg !text-muted-foreground !hover:text-foreground !hover:bg-background/50 !transition-colors"
              >
                <Minimize2 className="!h-4 !w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="!p-1.5 !rounded-lg !text-muted-foreground !hover:text-foreground !hover:bg-background/50 !transition-colors"
              >
                <X className="!h-4 !w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="!flex-1 !overflow-y-auto !p-4 !space-y-4">
            {messages.length === 0 ? (
              <div className="!flex !flex-col !items-center !justify-center !h-full !text-center">
                <div className="!p-4 !bg-gradient-to-br !from-purple-500/20 !to-pink-500/20 !rounded-full !mb-4">
                  <Sparkles className="!h-8 !w-8 !text-purple-400" />
                </div>
                <h4 className="!font-semibold !text-foreground !mb-2">Welcome to AI Assistant</h4>
                <p className="!text-sm !text-muted-foreground !max-w-xs">
                  I can help you analyze data, answer questions about the project, and provide
                  insights.
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`!max-w-[80%] !rounded-2xl !px-4 !py-2 ${
                      message.role === 'user'
                        ? '!bg-gradient-to-br !from-purple-500 !to-pink-500 !text-white'
                        : '!bg-muted !text-foreground'
                    }`}
                  >
                    <p className="!text-sm">{message.content}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="!p-4 !border-t !border-border !bg-background/50">
            <div className="!flex !items-center !gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="!flex-1 !px-4 !py-2 !bg-background !border !border-border !rounded-lg !text-sm !focus:outline-none !focus:ring-2 !focus:ring-purple-500/50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="!p-2 !bg-gradient-to-br !from-purple-500 !to-pink-500 !text-white !rounded-lg !hover:opacity-90 !transition-opacity !disabled:opacity-50 !disabled:cursor-not-allowed"
              >
                <Send className="!h-4 !w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="!fixed !bottom-6 !right-6 !p-4 !bg-gradient-to-br !from-purple-500 !to-pink-500 !text-white !rounded-full !shadow-lg !hover:shadow-xl !hover:scale-110 !transition-all !z-50 !animate-pulse"
      >
        {isOpen ? <X className="!h-6 !w-6" /> : <Sparkles className="!h-6 !w-6" />}
      </button>
    </>
  );
}
