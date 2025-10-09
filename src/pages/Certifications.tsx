import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Layout from '@/components/Layout';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certificat informatique & internet ForneN',
      issuer: 'ForneN',
      date: '2023',
      description: 'Certification en informatique et internet délivré par ForneN.',
    },
    {
      title: 'Certificat Azure DevOps Boards',
      issuer: 'Coursera',
      date: '2023',
      description: 'Certification sur les pratiques DevOps avec Azure Boards.',
    },
    {
      title: 'Certificat Hedera',
      issuer: 'Hedera',
      date: '2023',
      description: 'Certification sur la blockchain Hedera et ses applications.',
    },
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
          <h1 className="text-4xl font-bold text-white mb-4">Certifications</h1>
          <p className="text-lg text-cyan-100">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-white/20"
            >
              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 text-cyan-300 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-300 font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-cyan-200 text-sm mb-3">
                    {cert.date}
                  </p>
                  <p className="text-gray-200">
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