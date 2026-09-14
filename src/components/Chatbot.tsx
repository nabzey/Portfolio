import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useZeynabData } from '@/hooks/useZeynabData';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  options?: string[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const zeynabData = useZeynabData();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = language === 'en'
        ? `Hello! I'm ${zeynabData.name}'s assistant. How can I help you today?`
        : `Bonjour ! Je suis l'assistant de ${zeynabData.name}. Comment puis-je vous aider aujourd'hui ?`;
      
      const options = language === 'en' 
        ? ['Skills', 'Projects', 'Pricing', 'Contact']
        : ['Compétences', 'Projets', 'Tarifs', 'Contact'];

      setTimeout(() => {
        addMessage(greeting, true, options);
      }, 500);
    }
  }, [isOpen, language, zeynabData]);

  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random().toString(),
      text,
      isBot,
      options,
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;

    setInputValue('');
    addMessage(text.trim(), false);
    setIsTyping(true);

    setTimeout(() => {
      handleBotResponse(text.trim().toLowerCase());
      setIsTyping(false);
    }, 800);
  };

  const handleBotResponse = (message: string) => {
    const isEn = language === 'en';
    
    if (message.includes('compétence') || message.includes('skill')) {
      const resp = isEn 
        ? `${zeynabData.name} is a Full Stack & Mobile Developer. She masters Flutter, React Native, React, Node.js, and more!`
        : `${zeynabData.name} est Développeuse Full Stack & Mobile. Elle maîtrise Flutter, React Native, React, Node.js et bien d'autres !`;
      addMessage(resp, true, isEn ? ['Projects', 'Contact'] : ['Projets', 'Contact']);
      return;
    }

    if (message.includes('projet') || message.includes('project')) {
      const resp = isEn 
        ? `She recently built WestaMarket (Mobile App), LUXURY, and VOYAGE-221 API. Check the Projects page!`
        : `Elle a récemment développé WestaMarket (App Mobile), LUXURY, et l'API VOYAGE-221. Allez voir la page Projets !`;
      addMessage(resp, true, isEn ? ['Pricing', 'Contact'] : ['Tarifs', 'Contact']);
      return;
    }

    if (message.includes('prix') || message.includes('tarif') || message.includes('pricing')) {
      const resp = isEn 
        ? `Pricing:\n• Website: ${zeynabData.services.website.price}\n• Web App: ${zeynabData.services.webapp.price}\n• UI/UX: ${zeynabData.services.design.price}`
        : `Tarifs indicatifs :\n• Site Vitrine : ${zeynabData.services.website.price}\n• Application Web/Mobile : ${zeynabData.services.webapp.price}\n• UI/UX Design : ${zeynabData.services.design.price}`;
      addMessage(resp, true, isEn ? ['Contact'] : ['Contacter Zeynab']);
      return;
    }

    if (message.includes('contact')) {
      const resp = isEn 
        ? `You can reach her via email at ${zeynabData.contact.email} or on LinkedIn!`
        : `Vous pouvez la joindre par email à ${zeynabData.contact.email} ou sur LinkedIn !`;
      addMessage(resp, true);
      return;
    }

    // Default
    const defaultResp = isEn 
      ? `I can give you information about her skills, projects, and pricing.`
      : `Je peux vous renseigner sur ses compétences, ses projets ou ses tarifs. Que choisissez-vous ?`;
    addMessage(defaultResp, true, isEn ? ['Skills', 'Projects', 'Pricing'] : ['Compétences', 'Projets', 'Tarifs']);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-violet hover:bg-violet-dark text-white p-4 rounded-full shadow-lg border-2 border-white dark:border-gray-800"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-violet p-4 text-white flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold">Assistant Virtuel</h3>
                <p className="text-xs text-white/70">Répond instantanément</p>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50">
              {messages.map((message) => (
                <div key={message.id} className={`flex flex-col ${message.isBot ? 'items-start' : 'items-end'}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl shadow-sm text-sm ${
                      message.isBot
                        ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-none'
                        : 'bg-violet text-white rounded-tr-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                  </div>
                  
                  {/* Options Buttons */}
                  {message.options && (
                    <div className="flex flex-wrap gap-2 mt-3 w-full">
                      {message.options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => handleSendMessage(opt)}
                          className="text-xs px-3 py-1.5 bg-violet-light hover:bg-violet/20 text-violet border border-violet/20 rounded-full transition-colors"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start">
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-3 rounded-2xl rounded-tl-none flex space-x-1 shadow-sm">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Écrivez un message..."
                  className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-full px-4 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-violet outline-none"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="p-2 bg-violet hover:bg-violet-dark disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white rounded-full transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
