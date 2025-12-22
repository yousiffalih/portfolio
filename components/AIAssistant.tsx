
import React, { useState } from 'react';
import { PortfolioData, Message } from '../types';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'model', text: `Bonjour ! Je suis l'assistant de ${data.userInfo.name}.` }]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: { systemInstruction: `Tu es l'assistant de ${data.userInfo.name}, un ${data.userInfo.title}.` }
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || "Erreur" }]);
    } catch {
      setMessages(prev => [...prev, { role: 'model', text: "Service indisponible." }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      {isOpen ? (
        <div className="glass w-80 h-96 rounded-2xl flex flex-col overflow-hidden border border-white/10 shadow-2xl">
          <div className="bg-indigo-600 p-3 text-white flex justify-between">
            <span className="text-xs">Nova_Bot v1.0</span>
            <button onClick={() => setIsOpen(false)}><i className="fas fa-times"></i></button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-900/50">
            {messages.map((m, i) => (
              <div key={i} className={`text-[10px] p-2 rounded-lg ${m.role === 'user' ? 'bg-indigo-600 ml-8' : 'bg-slate-800 mr-8'}`}>{m.text}</div>
            ))}
          </div>
          <div className="p-2 flex gap-2">
            <input className="flex-1 bg-slate-800 rounded p-1 text-[10px] outline-none" value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} />
            <button onClick={handleSend} className="bg-indigo-600 px-2 rounded"><i className="fas fa-paper-plane text-[10px]"></i></button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <i className="fas fa-robot text-white"></i>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
