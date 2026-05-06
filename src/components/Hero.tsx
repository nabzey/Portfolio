import { useState, useEffect } from "react";
import profileImage from "@/assets/profile.jpeg";
import { motion } from "framer-motion";

// Composant pour l'animation machine à écrire en boucle
const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Pause avant suppression
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setTimeout(() => setCurrentIndex(0), 500); // Pause avant recommencer
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text]);

  return (
    <span className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-4 text-blue-500"
      >
        |
      </motion.span>
    </span>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Spectacular Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Massive floating orbs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className={`absolute w-${32 + (i % 3) * 16} h-${32 + (i % 3) * 16} ${
              i % 4 === 0 ? 'bg-gradient-to-r from-blue-500/10 to-purple-600/10' :
              i % 4 === 1 ? 'bg-gradient-to-r from-pink-500/10 to-orange-500/10' :
              i % 4 === 2 ? 'bg-gradient-to-r from-green-500/10 to-cyan-500/10' :
              'bg-gradient-to-r from-yellow-500/10 to-red-500/10'
            } rounded-full blur-3xl`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 400 - 200, 0],
              y: [0, Math.random() * 400 - 200, 0],
              scale: [1, 1.5, 1],
              rotate: [0, 360, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${
              i % 2 === 0 ? 'w-24 h-24 border-4 border-blue-400/20 rotate-45' :
              'w-32 h-16 border-4 border-purple-400/20 rounded-full'
            }`}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Shooting particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-white to-transparent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Pulsing energy rings */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute border-2 border-blue-400/20 rounded-full"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${30 + Math.random() * 40}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Lightning-like effects */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`lightning-${i}`}
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
            style={{
              left: `${25 + Math.random() * 50}%`,
              top: `${20 + Math.random() * 60}%`,
              height: `${200 + Math.random() * 100}px`,
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scaleY: [0, 1, 0.8, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="container max-w-6xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, staggerChildren: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-blue-200 dark:border-blue-800"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.span
                  className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Développeuse Fullstack
              </motion.div>
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4"
              >
                <TypewriterText text="BA Zeynab" />
              </motion.div>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                variants={itemVariants}
              />
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Développeuse Fullstack en formation à la Sonatel Academy, spécialisée dans la création d'applications web modernes et intuitives.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.a> 
              <motion.a
                href="/zeynabcv.CV.pdf"
                download="zeynabcv.CV.pdf"
                className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Télécharger CV
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-6 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/nabzey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/zeynab-ba-4342a021a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 shadow-2xl"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.img
                  src={profileImage}
                  alt="BA Zeynab - Développeuse Fullstack"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                ZB
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
