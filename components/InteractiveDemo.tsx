
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const InteractiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi! I\'m Lumina. I can help you with math, science, history, or even coding. What are you studying today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await sendMessageToGemini(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-5/12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Try it yourself.</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Experience the power of Lumina firsthand. Ask a tough question, request an explanation of a complex theory, or ask for a study plan.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <i className="fas fa-check-circle text-indigo-500"></i>
                <span className="text-gray-300">Natural conversation flow</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check-circle text-indigo-500"></i>
                <span className="text-gray-300">Instant accurate answers</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check-circle text-indigo-500"></i>
                <span className="text-gray-300">Multimodal reasoning capabilities</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-7/12 w-full">
            <div className="glass rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="bg-white/5 px-8 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-robot text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Lumina AI Tutor</h4>
                    <span className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 text-gray-500">
                  <i className="fas fa-search cursor-pointer hover:text-white transition-colors"></i>
                  <i className="fas fa-ellipsis-v cursor-pointer hover:text-white transition-colors"></i>
                </div>
              </div>

              {/* Chat Messages */}
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth"
              >
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl p-4 ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-white/5 border border-white/10 text-gray-300'}`}>
                      <p className="text-sm md:text-base whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSubmit} className="p-6 bg-white/5 border-t border-white/10">
                <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything (e.g., Explain Quantum Entanglement)" 
                    className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 pr-14 text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-gray-500"
                  />
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-colors disabled:opacity-50"
                  >
                    <i className="fas fa-paper-plane text-white text-sm"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
