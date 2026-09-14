import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';
import profileImage from '@/assets/profile.jpeg';
import { profile } from '@/data/portfolio';

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-violet mb-4">À PROPOS</p>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-ink mb-4">{t('aboutTitle')}</h1>
          <p className="text-ink/60">{t('aboutSubtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-violet-light -z-10" aria-hidden="true" />
            <img
              src={profileImage}
              alt="Zeynab"
              className="w-full max-w-md rounded-panel shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <p className="text-ink/60 leading-relaxed">{t('aboutDescription')}</p>

            <div className="flex items-center gap-2 text-sm text-ink/60">
              <MapPin className="w-4 h-4 text-violet" />
              {profile.location}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
