import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

const initials = (title: string) =>
  title
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const ProjectCard = ({ project }: { project: Project }) => {
  const primaryHref = project.link || project.github;

  return (
    <div className="group bg-white rounded-card border border-ink/5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-violet-light to-lavender">
        {project.images?.[0] ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : project.video ? (
          <video
            src={project.video}
            muted
            controls
            preload="metadata"
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-5xl font-extrabold text-violet/30">
              {initials(project.title)}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-ink mb-2">{project.title}</h3>
        <p className="text-sm text-ink/60 leading-relaxed mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2.5 py-1 text-xs font-medium text-violet bg-violet-light rounded-full">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium text-ink/40">+{project.tech.length - 4}</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {primaryHref && (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink text-white group-hover:bg-violet transition-colors duration-300"
              aria-label={`Voir ${project.title}`}
            >
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          {project.github && project.link && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/10 text-ink/60 hover:text-violet hover:border-violet transition-colors"
              aria-label={`Code source de ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
