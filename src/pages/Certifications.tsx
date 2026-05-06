import React from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';
import Layout from '@/components/Layout';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certificat Professionnel de Spécialisation en Développement Web et Mobile',
      issuer: 'Orange Digital Center',
      date: '2025',
      description: 'Certification de spécialisation en développement Fullstack Web et Mobile.',
      icon: <BadgeCheck className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Certificat informatique & internet ForneN',
      issuer: 'ForneN',
      date: '2023',
      description: 'Certification en informatique et internet délivré par ForneN.',
      icon: <Award className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Certificat Azure DevOps Boards',
      issuer: 'Coursera',
      date: '2023',
      description: 'Certification sur les pratiques DevOps avec Azure Boards.',
      icon: <Award className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Certificat Hedera',
      issuer: 'Hedera',
      date: '2023',
      description: 'Certification sur la blockchain Hedera et ses applications.',
      icon: <Award className="w-8 h-8 text-blue-500" />
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Certifications
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Mes certifications professionnelles et accomplissements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all group"
            >
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shrink-0 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {cert.issuer}
                  </p>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Certifications;