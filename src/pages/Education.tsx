import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { GraduationCap, BookOpen, Award, Radio } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Licence 3 Développement Web & Mobile",
      school: "École Supérieure Professionnelle 221",
      period: "En cours",
      location: "Sénégal",
      icon: <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      degree: "Formation Développement Web/Mobile",
      school: "Sonatel Academy",
      period: "2025",
      location: "Dakar, Sénégal",
      icon: <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    },
    {
      degree: "BTS Informatique Industrielle",
      school: "CFPT Sénégal-Japon",
      period: "Terminé",
      location: "Dakar, Sénégal",
      icon: <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
    },
    {
      degree: "Licence 1 en Système Réseau & Télécommunication",
      school: "Université Alioune Diop",
      period: "2020 – 2021",
      location: "Bambey, Sénégal",
      icon: <Radio className="w-6 h-6 text-purple-600 dark:text-purple-400" />
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Formation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Mon parcours académique en informatique et développement web/mobile.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-gray-50 dark:bg-gray-900 rounded-xl flex items-center justify-center border border-gray-100 dark:border-gray-800 shadow-sm">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mt-1">
                      {edu.school}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {edu.location}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-4 md:mt-0 px-4 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full inline-block whitespace-nowrap">
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