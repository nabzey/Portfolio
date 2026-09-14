import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { GraduationCap, BookOpen, Award, Radio } from 'lucide-react';
import { education } from '@/data/portfolio';

const icons = [GraduationCap, BookOpen, Award, Radio];

const Education = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-violet mb-4">FORMATION</p>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-ink mb-4">
            Mon parcours académique
          </h1>
          <p className="text-ink/60">
            Mon parcours académique en informatique et développement web/mobile.
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-card p-8 shadow-sm border border-ink/5"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex items-center space-x-5">
                    <div className="w-14 h-14 bg-violet-light rounded-xl flex items-center justify-center text-violet shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink">{edu.degree}</h3>
                      <p className="text-violet font-semibold mt-1">{edu.school}</p>
                      <p className="text-sm text-ink/50 mt-1">{edu.location}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-ink/60 mt-4 md:mt-0 px-4 py-1.5 bg-secondary rounded-full inline-block whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Education;
