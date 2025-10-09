import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import profileImage from "@/assets/profile.jpeg";

// Composant pour l'animation machine à écrire
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

// Composant Chatbot
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string; isUser: boolean}>>([
    { text: "Bonjour ! Je suis l'assistant virtuel de Zeynab. Comment puis-je vous aider à découvrir son portfolio ?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");

  const portfolioInfo = {
    name: "BA Zeynab",
    role: "Développeuse Fullstack, DevOps & UI/UX Designer",
    education: "Formation intensive à la Sonatel Academy, BTS Informatique Industrielle et Réseaux",
    skills: ["React", "TypeScript", "Node.js", "Python", "DevOps", "UI/UX Design", "Docker", "AWS"],
    projects: [
      "Application Todo List (TypeScript/Node.js)",
      "Système de Gestion de Cargaison GP",
      "Plateforme de Gestion des Apprenants",
      "Application Bancaire MaxITSA",
      "Application de Gestion des Salaires"
    ],
    pricing: {
      website: "Site web : 100 000 FRCS (négociable - contactez Zeynab directement)",
      webapp: "Application web : 200 000 - 500 000 FRCS selon la complexité des fonctionnalités",
      design: "Design UI/UX : 200 000 FRCS",
      contact: "Pour marchander ou discuter du projet, appelez Zeynab via son portfolio"
    },
    contact: "Disponible pour collaborations et opportunités professionnelles"
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);

    // Réponses automatiques basées sur les mots-clés
    const lowerInput = inputValue.toLowerCase();
    let response = "";

    if (lowerInput.includes("bonjour") || lowerInput.includes("salut") || lowerInput.includes("hello")) {
      response = "Bonjour ! Je suis l'assistant de Zeynab BA. Je peux vous parler de ses compétences, projets, tarifs ou vous aider à la contacter pour vos projets web.";
    } else if (lowerInput.includes("prix") || lowerInput.includes("tarif") || lowerInput.includes("coût") || lowerInput.includes("combien")) {
      if (lowerInput.includes("site") || lowerInput.includes("web")) {
        response = portfolioInfo.pricing.website;
      } else if (lowerInput.includes("application") || lowerInput.includes("app")) {
        response = portfolioInfo.pricing.webapp + "\n\nPouvez-vous me décrire les fonctionnalités dont vous avez besoin pour que je vous donne une estimation plus précise ?";
      } else if (lowerInput.includes("design") || lowerInput.includes("ui") || lowerInput.includes("ux")) {
        response = portfolioInfo.pricing.design;
      } else {
        response = `Voici nos tarifs :\n• ${portfolioInfo.pricing.website}\n• ${portfolioInfo.pricing.webapp}\n• ${portfolioInfo.pricing.design}\n\n${portfolioInfo.pricing.contact}`;
      }
    } else if (lowerInput.includes("compétence") || lowerInput.includes("skill") || lowerInput.includes("techno")) {
      response = `Zeynab maîtrise : ${portfolioInfo.skills.join(", ")}. Elle est spécialisée en développement FULL STACK, DevOps et design UI/UX.`;
    } else if (lowerInput.includes("projet") || lowerInput.includes("réalisation")) {
      response = `Voici ses principaux projets : ${portfolioInfo.projects.join(", ")}. Découvrez-les en détail dans la section Projets.`;
    } else if (lowerInput.includes("formation") || lowerInput.includes("éducation") || lowerInput.includes("diplôme")) {
      response = portfolioInfo.education;
    } else if (lowerInput.includes("contact") || lowerInput.includes("collaborer") || lowerInput.includes("travailler")) {
      response = "Zeynab est ouverte aux collaborations ! Utilisez le formulaire de contact ou appelez-la directement pour discuter de votre projet.";
    } else if (lowerInput.includes("expérience") || lowerInput.includes("cv")) {
      response = "Zeynab a une solide expérience pratique acquise lors de sa formation à la Sonatel Academy et de ses projets personnels.";
    } else if (lowerInput.includes("disponible") || lowerInput.includes("libre")) {
      response = "Zeynab est disponible pour de nouveaux projets ! Contactez-la pour discuter de vos besoins.";
    } else {
      response = "Je peux vous renseigner sur les compétences, projets, tarifs ou vous mettre en contact avec Zeynab. Que souhaitez-vous savoir ?";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);

    setInputValue("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 h-96 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <h3 className="font-semibold">Assistant Portfolio</h3>
              <p className="text-sm opacity-90">Zeynab BA</p>
            </div>
            <div className="flex-1 p-4 space-y-3 overflow-y-auto h-64">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.isUser ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs px-3 py-2 rounded-lg ${
                    msg.isUser
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Posez votre question..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '×' : '💬'}
        </motion.div>
      </motion.button>
    </div>
  );
};

const Portfolio = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 relative overflow-hidden">
      {/* Animations glaciales/crystallines background */}
      <div className="absolute inset-0">
        {/* Cristaux flottants */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 dark:from-blue-400/20 dark:to-cyan-400/20 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Formes cristallines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`crystal-${i}`}
            className="absolute w-16 h-16 border border-blue-200/20 dark:border-blue-400/10 rotate-45"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              rotate: [45, 135, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Particules de glace */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`ice-${i}`}
            className="absolute w-1 h-6 bg-gradient-to-b from-transparent via-blue-200/40 to-transparent dark:via-blue-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Navigation />

      {/* Hero Section avec animation machine à écrire */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
        <motion.div
          className="container max-w-6xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl">
              <img
                src={profileImage}
                alt="BA Zeynab"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 mb-4">
              {showName && <TypewriterText text="BA Zeynab" delay={500} />}
            </div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Développeuse Fullstack
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Passionnée par la création d'expériences digitales exceptionnelles.
              Spécialisée en développement FULL STACK, DevOps et design UI/UX.
              Formation intensive à la Sonatel Academy.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              {["React", "TypeScript", "Node.js", "DevOps", "UI/UX", "Python"].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2 + index * 0.1, type: "spring", stiffness: 400, damping: 10 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sections suivantes à implémenter */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            À propos de moi
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cards à propos */}
            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Formation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Formation intensive à la Sonatel Academy en développement web et mobile FULL STACK.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Expérience</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  BTS Informatique Industrielle et Réseaux avec expérience pratique en développement.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">DevOps & UI/UX</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Spécialisée en DevOps (Docker, AWS) et design d'interfaces utilisateur modernes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Compétences
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "FULL STACK", skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
              { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
              { category: "DevOps", skills: ["Docker", "AWS", "CI/CD", "Kubernetes"] },
              { category: "Design", skills: ["Figma", "Adobe XD", "UI/UX", "Prototyping"] }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-center">{category.category}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mes Projets
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Todo List App",
                description: "Application de gestion de tâches avec authentification",
                tech: ["TypeScript", "Node.js", "React"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "GP Cargo",
                description: "Système de gestion de cargaison multimodal",
                tech: ["Node.js", "React", "MySQL"],
                color: "from-green-500 to-teal-500"
              },
              {
                title: "Gestion Apprenants",
                description: "Plateforme éducative avec scan QR code",
                tech: ["PHP", "JavaScript", "MySQL"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "MaxITSA Banking",
                description: "Application bancaire avec API REST",
                tech: ["PHP", "API REST", "PostgreSQL"],
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Gestion Salaires",
                description: "Application multi-entreprises de paie",
                tech: ["Node.js", "React", "MySQL"],
                color: "from-indigo-500 to-purple-500"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color} mb-4`}></div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contactez-moi
          </motion.h2>

          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Intéressé par une collaboration ? N'hésitez pas à me contacter !
              </p>
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://github.com/nabzey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/zeynab-ba-4342a021a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                rows={5}
                placeholder="Votre message"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer avec couleurs cohérentes */}
      <footer className="py-12 px-4 bg-gradient-to-r from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="container max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
              BA Zeynab
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Développeuse Fullstack • DevOps • UI/UX Designer
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://github.com/nabzey" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/zeynab-ba-4342a021a" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                LinkedIn
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 BA Zeynab. Tous droits réservés.
            </p>
          </motion.div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default Portfolio;