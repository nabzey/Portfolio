import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPreview = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-violet mb-4">MES PROJETS</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink leading-tight">
              Des idées qui<br />deviennent réelles.
            </h2>
          </div>
          <div className="flex items-center justify-between gap-6 md:max-w-sm">
            <p className="text-sm text-ink/60">
              Une sélection de projets sur lesquels j&apos;ai travaillé, du développement mobile au déploiement cloud.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-ink/10 rounded-full text-sm font-semibold text-ink hover:border-violet hover:text-violet transition-colors"
          >
            Voir tous les projets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
