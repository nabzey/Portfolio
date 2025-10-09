import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

const Education = () => {
  const education = [
    {
      degree: "Développement Web & Mobile",
      school: "Sonatel Academy",
      period: "Février 2025 – En cours",
      location: "Dakar, Sénégal",
      icon: "📱"
    },
    {
      degree: "BTS Informatique Industrielle et Réseaux",
      school: "CFPT Sénégal-Japon",
      period: "2020 – 2022",
      location: "Dakar, Sénégal",
      icon: "🎓"
    },
    {
      degree: "L1 Systèmes Réseaux & Télécommunication",
      school: "Université de Bambey",
      period: "2020 – 2021",
      location: "Bambey, Sénégal",
      icon: "📡"
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Lycée Moderne de Rufisque",
      period: "2020",
      location: "Rufisque, Sénégal",
      icon: "🏫"
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
          <h1 className="text-4xl font-bold text-white mb-4">Education</h1>
          <p className="text-lg text-cyan-100">
            My academic background in computer science and telecommunications.
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
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
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-cyan-300 font-medium text-lg">{edu.school}</p>
                    <p className="text-sm text-cyan-200">{edu.location}</p>
                  </div>
                </div>
                <span className="text-sm text-cyan-200 mt-2 md:mt-0 px-3 py-1 bg-cyan-500/20 rounded-full">
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Education;