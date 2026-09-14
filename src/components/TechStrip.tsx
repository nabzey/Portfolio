import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";

const TechStrip = () => {
  return (
    <section className="py-10 border-y border-ink/5">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-ink/40 mb-6">
          DES TECHNOLOGIES QUE J&apos;UTILISE AU QUOTIDIEN
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {techStack.map((tech) => (
            <span key={tech} className="text-sm md:text-base font-semibold text-ink/50 hover:text-violet transition-colors">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStrip;
