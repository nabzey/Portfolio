import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Briefcase, Building2, Terminal } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Stagiaire Développeuse Mini App",
      company: "Sonatel",
      period: "2026 – en cours",
      description: "Développement de Mini Programs WeChat (WXML, WXSS, JS). Intégration d'API via wx.request (JSON). Mise en place d'authentification OAuth. Conception d'UI performantes et gestion des états. Travail en équipe avec backend/design (revues, itérations).",
      icon: <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Développeuse Mobile Freelance",
      company: "Nexa",
      period: "Mars 2026",
      description: "Développement d'applications mobiles avec Flutter (iOS/Android). Intégration d'API, gestion des comptes utilisateurs et des transactions. Livraison de fonctionnalités en autonomie (de la spécification à la production).",
      icon: <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    },
    {
      title: "Développeuse Fullstack",
      company: "Hamza Solution",
      period: "2022 – 2023",
      description: "Développement d'une plateforme de télémédecine (Laravel + React + Flutter). Création d'APIs sécurisées, gestion des utilisateurs et des rôles. Participation aux sprints Agile (tests, améliorations continues).",
      icon: <Building2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
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
            Expériences Professionnelles
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Mon parcours professionnel en tant que développeuse Fullstack et Mobile.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-gray-50 dark:bg-gray-900 rounded-xl flex items-center justify-center border border-gray-100 dark:border-gray-800 shadow-sm">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-4 md:mt-0 px-4 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full inline-block">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-0 md:pl-[76px]">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;