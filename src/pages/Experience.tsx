import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

const Experience = () => {
  const experiences = [
    {
      title: "Chargée service clientèle",
      company: "FOUNDEVER",
      period: "2023 – 2025",
      description: "Relation client, gestion des appels et résolution de réclamations dans un environnement international.",
      icon: "📞"
    },
    {
      title: "Développeuse Junior",
      company: "CTIC Dakar",
      period: "2022 – 2023",
      description: "Création d'interfaces utilisateur pour une application de suivi médical utilisant React et Node.js.",
      icon: "💻"
    },
    {
      title: "Projet de fin d'études",
      company: "CFPT Sénégal-Japon",
      period: "2022",
      description: "Contrôle d'accès à parking automatique avec système embarqué et interface web.",
      icon: "🚗"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
          <p className="text-lg text-cyan-100">
            My professional journey combining development and customer service experience.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center text-2xl">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-cyan-300 font-medium text-lg">{exp.company}</p>
                  </div>
                </div>
                <span className="text-sm text-cyan-200 mt-2 md:mt-0 px-3 py-1 bg-cyan-500/20 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-200 leading-relaxed pl-16 md:pl-0">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;