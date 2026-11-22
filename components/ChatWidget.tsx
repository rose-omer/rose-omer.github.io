import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { streamChatResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Merhaba! Ben AI asistanı. Ömer Faruk Köse\'nin portfolyosu ve OmerKSoft projeleri hakkında bana soru sorabilirsiniz.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    let fullResponse = '';
    // Create a placeholder for the assistant's response
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    try {
      const stream = streamChatResponse(userMessage);
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newHistory = [...prev];
          const lastMsg = newHistory[newHistory.length - 1];
          if (lastMsg.role === 'assistant') {
            lastMsg.content = fullResponse;
          }
          return newHistory;
        });
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Bir hata oluştu." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="AI asistanla sohbeti aç"
          className="bg-primary hover:bg-indigo-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center animate-bounce-subtle"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-secondary border border-slate-700 rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col h-[500px] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="bg-primary/20 p-1.5 rounded-lg">
                <Bot size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Portfolio AI</h3>
                <p className="text-xs text-slate-400">Gemini 2.5 Flash ile çalışır</p>
              </div>
            </div>
            <button 
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Sohbeti kapat"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-slate-900 border-t border-slate-700">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Bir soru sor..."
                aria-label="Soru"
                className="w-full bg-slate-800 text-white placeholder-slate-400 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-700"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Gönder"
                className="absolute right-2 p-1.5 text-primary hover:text-indigo-400 disabled:opacity-50 transition-colors"
              >
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;