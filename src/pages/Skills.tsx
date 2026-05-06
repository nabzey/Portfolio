import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import Layout from '@/components/Layout';
import { Server, Terminal, Users, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Développement Mobile & Frontend',
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      skills: [
        { name: 'Flutter / Dart', level: 85 },
        { name: 'React Native', level: 85 },
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend & Base de données',
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      skills: [
        { name: 'Node.js & Express', level: 85 },
        { name: 'PHP', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      title: 'DevOps & Outils',
      icon: <Terminal className="w-6 h-6 text-orange-500" />,
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'GitHub Actions (CI/CD)', level: 85 },
        { name: 'Figma', level: 85 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      skills: [
        { name: 'Communication', level: 95 },
        { name: 'Travail en équipe', level: 90 },
        { name: 'Résolution de problèmes', level: 95 },
        { name: 'Gestion des priorités', level: 85 },
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Mes Compétences
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez mon expertise technique et mes compétences comportementales à travers mes différents domaines d'intervention.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100 dark:border-gray-700">
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;