import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import profileImage from '@/assets/profile.jpeg';

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">{t('aboutTitle')}</h1>
          <p className="text-lg text-cyan-100">
            {t('aboutSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={profileImage}
              alt="Zeynab"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-200 leading-relaxed">
              {t('aboutDescription')}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">{t('values')}</h3>
              <ul className="space-y-2 text-cyan-100">
                <li>• {t('innovation')}</li>
                <li>• {t('userCentered')}</li>
                <li>• {t('continuousLearning')}</li>
                <li>• {t('collaboration')}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;