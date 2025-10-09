import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useZeynabData } from '@/hooks/useZeynabData';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const zeynabData = useZeynabData();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting using dynamic data
      const greeting = language === 'en'
        ? `Hello! I'm ${zeynabData.name}'s assistant. I'm here to help you learn about her services as a ${zeynabData.title.en.toLowerCase()} and get pricing information. How can I assist you today?`
        : `Bonjour ! Je suis l'assistant de ${zeynabData.name}. Je suis là pour vous aider à en savoir plus sur ses services en tant que ${zeynabData.title.fr.toLowerCase()} et obtenir des informations de prix. Comment puis-je vous aider aujourd'hui ?`;

      setTimeout(() => {
        addMessage(greeting, true);
      }, 500);
    }
  }, [isOpen, language, zeynabData]);

  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    addMessage(userMessage, false);

    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const response = generateResponse(userMessage.toLowerCase());
      addMessage(response, true);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();

    // Compétences techniques
    if (lowerMessage.includes('compétence') || lowerMessage.includes('skill') || lowerMessage.includes('techno') || lowerMessage.includes('savoir')) {
      const technicalSkills = zeynabData.skills.technical.join(', ');
      const behavioralSkills = zeynabData.skills.behavioral.join(', ');
      const tools = zeynabData.skills.tools.join(', ');

      return language === 'en'
        ? `${zeynabData.name} has strong technical skills including:\n\n• Programming: ${technicalSkills}\n• Soft Skills: ${behavioralSkills}\n• Tools & Technologies: ${tools}\n\nShe specializes in ${zeynabData.title.en.toLowerCase()}.`
        : `${zeynabData.name} possède de solides compétences techniques incluant :\n\n• Programmation : ${technicalSkills}\n• Compétences comportementales : ${behavioralSkills}\n• Outils & Technologies : ${tools}\n\nElle se spécialise en ${zeynabData.title.fr.toLowerCase()}.`;
    }

    // Expérience professionnelle
    if (lowerMessage.includes('expérience') || lowerMessage.includes('experience') || lowerMessage.includes('travail') || lowerMessage.includes('job')) {
      const experiences = zeynabData.experience.map(exp =>
        `• ${exp.title} at ${exp.company} (${exp.period})`
      ).join('\n');

      return language === 'en'
        ? `${zeynabData.name} has professional experience as:\n\n${experiences}\n\nShe combines development skills with customer service experience.`
        : `${zeynabData.name} a une expérience professionnelle en tant que :\n\n${experiences}\n\nElle combine des compétences en développement avec une expérience en service client.`;
    }

    // Formation
    if (lowerMessage.includes('formation') || lowerMessage.includes('education') || lowerMessage.includes('diplôme') || lowerMessage.includes('études')) {
      const education = zeynabData.education.map(edu =>
        `• ${edu.degree} at ${edu.school} (${edu.period})`
      ).join('\n');

      const certifications = zeynabData.certifications.map(cert =>
        cert.title
      ).join(', ');

      return language === 'en'
        ? `${zeynabData.name}'s education includes:\n\n${education}\n\nShe has certifications in ${certifications}.`
        : `La formation de ${zeynabData.name} inclut :\n\n${education}\n\nElle possède des certifications ${certifications}.`;
    }

    // Projets
    if (lowerMessage.includes('projet') || lowerMessage.includes('project') || lowerMessage.includes('réalisation') || lowerMessage.includes('work')) {
      const projects = zeynabData.projects.map(project =>
        `• ${project.title} (${project.tech.join(', ')})`
      ).join('\n');

      return language === 'en'
        ? `${zeynabData.name} has worked on several projects:\n\n${projects}\n\nAll projects showcase her FULL STACK development skills.`
        : `${zeynabData.name} a travaillé sur plusieurs projets :\n\n${projects}\n\nTous les projets mettent en valeur ses compétences en développement FULL STACK.`;
    }

    // Services et tarifs
    if (lowerMessage.includes('service') || lowerMessage.includes('prix') || lowerMessage.includes('tarif') || lowerMessage.includes('coût') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return language === 'en'
        ? `${zeynabData.name} offers professional services:\n\n• Website Development: ${zeynabData.services.website.price}\n• Web Application Development: ${zeynabData.services.webapp.price}\n• UI/UX Design: ${zeynabData.services.design.price}\n\nAll prices are in FCFA. Contact her for detailed quotes.`
        : `${zeynabData.name} propose des services professionnels :\n\n• Développement de site web : ${zeynabData.services.website.price}\n• Développement d'application web : ${zeynabData.services.webapp.price}\n• Design UI/UX : ${zeynabData.services.design.price}\n\nTous les prix sont en FCFA. Contactez-la pour des devis détaillés.`;
    }

    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('téléphone') || lowerMessage.includes('phone') || lowerMessage.includes('contacter')) {
      return language === 'en'
        ? `You can contact ${zeynabData.name} through:\n• Email: ${zeynabData.contact.email}\n• Phone/WhatsApp: ${zeynabData.contact.phone}\n• LinkedIn: ${zeynabData.contact.linkedin}\n• GitHub: ${zeynabData.contact.github}\n\nUse the contact form on this website for project inquiries!`
        : `Vous pouvez contacter ${zeynabData.name} via :\n• Email : ${zeynabData.contact.email}\n• Téléphone/WhatsApp : ${zeynabData.contact.phone}\n• LinkedIn : ${zeynabData.contact.linkedin}\n• GitHub : ${zeynabData.contact.github}\n\nUtilisez le formulaire de contact sur ce site pour vos demandes de projet !`;
    }

    // À propos/Personnalité
    if (lowerMessage.includes('qui') || lowerMessage.includes('who') || lowerMessage.includes('about') || lowerMessage.includes('personne') || lowerMessage.includes('profil')) {
      return language === 'en'
        ? zeynabData.about.en
        : zeynabData.about.fr;
    }

    // Certifications spécifiques
    if (lowerMessage.includes('certification') || lowerMessage.includes('certificat')) {
      const certifications = zeynabData.certifications.map(cert =>
        `• ${cert.title} - ${cert.issuer} (${cert.date})`
      ).join('\n');

      return language === 'en'
        ? `${zeynabData.name} has the following certifications:\n\n${certifications}`
        : `${zeynabData.name} possède les certifications suivantes :\n\n${certifications}`;
    }

    // Négociation
    if (lowerMessage.includes('négocier') || lowerMessage.includes('réduire') || lowerMessage.includes('discount') || lowerMessage.includes('negotiate')) {
      return language === 'en'
        ? `For pricing discussions or negotiations, please contact ${zeynabData.name} directly through the contact form or email. She'll be happy to discuss your specific project needs and find the best solution for you.`
        : `Pour les discussions de prix ou négociations, veuillez contacter ${zeynabData.name} directement via le formulaire de contact ou l'email. Elle sera heureuse de discuter des besoins spécifiques de votre projet et de trouver la meilleure solution pour vous.`;
    }

    // Réponses par défaut
    const defaultResponses = language === 'en'
      ? [
          `I'd be happy to tell you more about ${zeynabData.name}'s skills and experience. What would you like to know?`,
          `Feel free to ask about her technical skills, projects, education, or services. I'm here to help!`,
          `Is there something specific about ${zeynabData.name}'s background or work that interests you?`
        ]
      : [
          `Je serais ravi de vous en dire plus sur les compétences et l'expérience de ${zeynabData.name}. Que souhaitez-vous savoir ?`,
          `N'hésitez pas à demander des informations sur ses compétences techniques, projets, formation ou services. Je suis là pour aider !`,
          `Y a-t-il quelque chose de spécifique sur le parcours ou le travail de ${zeynabData.name} qui vous intéresse ?`
        ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <Bot className="w-6 h-6 text-cyan-300" />
                <span className="text-white font-semibold">Zeynab's Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-white/10 text-white'
                        : 'bg-cyan-500 text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 text-white p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={language === 'en' ? "Type your message..." : "Tapez votre message..."}
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-500 text-white p-2 rounded-full transition-colors"
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
