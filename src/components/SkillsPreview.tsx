import { motion } from "framer-motion";
import { Palette, Code2, Server, Cloud } from "lucide-react";
import { skillCategories } from "@/data/portfolio";

const cardStyles = [
  { bg: "bg-violet-light", icon: Palette, iconColor: "text-violet" },
  { bg: "bg-sky-50", icon: Code2, iconColor: "text-sky-600" },
  { bg: "bg-emerald-50", icon: Server, iconColor: "text-emerald-600" },
  { bg: "bg-amber-50", icon: Cloud, iconColor: "text-amber-600" },
];

const SkillsPreview = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-violet mb-4">MES COMPÉTENCES</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink leading-tight">
              Un équilibre entre<br />design et développement.
            </h2>
          </div>
          <p className="text-sm text-ink/60 md:max-w-sm">
            J&apos;allie créativité et rigueur technique pour créer des produits complets, de l&apos;idée à la mise en production.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => {
            const style = cardStyles[i % cardStyles.length];
            const Icon = style.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-card p-6 ${style.bg}`}
              >
                <div className={`w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center mb-5 ${style.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-ink mb-4">{category.title}</h3>
                <ul className="space-y-2">
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
    </section>
  );
};

export default SkillsPreview;
