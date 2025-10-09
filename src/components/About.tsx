import { motion } from "framer-motion";

const About = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-200/30 to-orange-200/30 dark:from-pink-800/20 dark:to-orange-800/20 rounded-full blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="container max-w-4xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            À propos de moi
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div className="text-center mb-6" variants={iconVariants}>
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl">🎓</span>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Formation actuelle</h3>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
              Formation intensive à la <span className="font-semibold text-blue-600 dark:text-blue-400">Sonatel Academy</span> en développement web et mobile FULL STACK.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div className="text-center mb-6" variants={iconVariants}>
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl">💼</span>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Expérience</h3>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
              <span className="font-semibold text-green-600 dark:text-green-400">BTS Informatique Industrielle et Réseaux</span> du CFPT Sénégal-Japon avec expérience pratique en développement.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div className="text-center mb-6" variants={iconVariants}>
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl">🚀</span>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Passion</h3>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
              Création d'expériences utilisateur exceptionnelles et développement de systèmes robustes avec les dernières technologies.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          variants={cardVariants}
        >
          <div className="max-w-2xl mx-auto">
            <motion.h3
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mes valeurs
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-gray-600 dark:text-gray-300 font-medium">Apprentissage continu</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <p className="text-gray-600 dark:text-gray-300 font-medium">Excellence technique</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <p className="text-gray-600 dark:text-gray-300 font-medium">Innovation créative</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
