import { motion } from "framer-motion";
import { Terminal, Briefcase, Building2 } from "lucide-react";
import { experiences } from "@/data/portfolio";

const icons = [Terminal, Briefcase, Building2];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-violet mb-4">MON PARCOURS</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink leading-tight">
            Expériences professionnelles.
          </h2>
        </div>

        <div className="space-y-6 max-w-3xl">
          {experiences.map((exp, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-card p-6 md:p-8 shadow-sm border border-ink/5"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5 gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-violet-light rounded-xl flex items-center justify-center text-violet shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-ink">{exp.title}</h3>
                      <p className="text-violet text-sm font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-ink/60 px-3 py-1.5 bg-secondary rounded-full inline-block whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 md:pl-16">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-ink/65 leading-relaxed flex gap-2">
                      <span className="text-violet mt-1.5">•</span>
                      <span>{bullet}</span>
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

export default ExperienceSection;
