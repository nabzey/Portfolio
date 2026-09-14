import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-violet mb-4">MES PROJETS</p>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-ink mb-4">
            Des idées qui deviennent réelles.
          </h1>
          <p className="text-ink/60">
            Une sélection de mes réalisations : applications mobiles, dashboards, APIs et pipelines de déploiement cloud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
