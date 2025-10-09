import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import Layout from '@/components/Layout';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Techniques',
      skills: [
        { name: 'HTML & CSS', level: 95 },
        { name: 'C', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'PHP', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'React', level: 90 },
        { name: 'Figma', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Modélisation', level: 70 },
        { name: 'Canva', level: 85 },
        { name: 'GitHub', level: 90 },
        { name: 'Réseaux', level: 75 },
        { name: 'Soudures', level: 70 },
      ],
    },
    {
      title: 'Comportementales',
      skills: [
        { name: 'Communication', level: 95 },
        { name: 'Travail en équipe', level: 90 },
        { name: 'Patience', level: 95 },
        { name: 'Gestion des priorités', level: 85 },
      ],
    },
    {
      title: 'Outils & Technologies',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'CI/CD (GitHub Actions)', level: 75 },
        { name: 'Deployment (Netlify, Vercel)', level: 85 },
        { name: 'Figma', level: 90 },
        { name: 'Prototyping', level: 80 },
        { name: 'Interaction Design', level: 85 },
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Skills</h1>
          <p className="text-lg text-cyan-100">
            My technical expertise across different domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-4 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-cyan-100 truncate">{skill.name}</span>
                      <span className="text-cyan-300 ml-2">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
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