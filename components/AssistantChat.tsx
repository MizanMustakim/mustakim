
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AssistantChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hello! I'm Mustakim's AI assistant. Ask me anything about his research in Medical AI, NLP, or his experience at BIT." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `
        You are an AI assistant representing MD Mizanur Rahman Mustakim, a researcher at Beijing Institute of Technology.
        Profile Summary:
        - Medical AI & NLP Researcher.
        - Specialist in Deep Learning, Computer Vision, and KAN (Kolmogorov-Arnold Networks).
        - Major projects: Teeth Segmentation, Bone Age Prediction (1st Prize), ChatGPT Hallucination Detection.
        - Awards: CSC Scholarship, BIT Honor Graduate.
        - Skills: Python, PyTorch, OpenCV, BERT, IoT Security.

        User asked: "${userMsg}"
        Answer as a helpful and professional research assistant. Keep answers concise.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      const botText = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting to the neural network. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full cyber-gradient text-emerald-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-40"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-96 h-[500px] bg-emerald-950 border border-emerald-900 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="p-4 bg-emerald-900/50 border-b border-emerald-800/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg cyber-gradient flex items-center justify-center text-emerald-950">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-none">Research Assistant</h4>
                <span className="text-[10px] text-lime-400 font-medium">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-emerald-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-emerald-600 text-white rounded-tr-none' 
                  : 'bg-emerald-900/40 text-emerald-100 rounded-tl-none border border-emerald-800/50'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-emerald-900/40 p-3 rounded-2xl rounded-tl-none border border-emerald-800/50 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-emerald-400" />
                  <span className="text-xs text-emerald-400">Assistant is thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-emerald-900/50">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my research..."
                className="w-full bg-emerald-950 border border-emerald-900 rounded-xl px-4 py-3 pr-12 text-sm text-emerald-100 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-500 disabled:opacity-50"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssistantChat;
