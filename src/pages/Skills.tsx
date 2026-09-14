import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Palette, Code2, Server, Cloud } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const cardStyles = [
  { bg: 'bg-violet-light', icon: Palette, iconColor: 'text-violet' },
  { bg: 'bg-sky-50', icon: Code2, iconColor: 'text-sky-600' },
  { bg: 'bg-emerald-50', icon: Server, iconColor: 'text-emerald-600' },
  { bg: 'bg-amber-50', icon: Cloud, iconColor: 'text-amber-600' },
];

const Skills = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-24 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-violet mb-4">MES COMPÉTENCES</p>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-ink mb-4">
            Un équilibre entre design et développement.
          </h1>
          <p className="text-ink/60">
            J&apos;allie créativité et rigueur technique pour créer des produits complets, de l&apos;idée à la mise en production.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => {
            const style = cardStyles[i % cardStyles.length];
            const Icon = style.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-card p-8 ${style.bg}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center mb-6 ${style.iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-5">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-ink/65">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
