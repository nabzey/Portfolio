import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Typewriter from '@/components/Typewriter';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <Typewriter
                texts={[
                  t('name'),
                  "FULL STACK Developer",
                  "UI/UX Designer"
                ]}
                speed={100}
                delay={2000}
              />
            </h1>

            <p className="text-xl md:text-2xl text-cyan-100 mb-12">
              FULL STACK Developer • UI/UX Designer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/projects">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('viewWork')}
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                className="px-8 py-4 border-2 border-cyan-300 text-cyan-100 font-semibold rounded-full hover:bg-cyan-300 hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('contactMe')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
