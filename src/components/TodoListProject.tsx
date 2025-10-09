import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Application Todo List",
      description: "Application de gestion de tâches en TypeScript et Node.js avec authentification, CRUD, photos et enregistrements vocaux.",
      link: "/todo-list",
      tech: ["TypeScript", "Node.js", "React"]
    },
    {
      title: "Système de Gestion de Cargaison (GP)",
      description: "Plateforme de transport multimodal avec suivi de colis, critères d'expédition et gestion des cargaisons.",
      link: "/gp-cargo",
      tech: ["Gestion", "Transport", "Suivi"]
    },
    {
      title: "Plateforme de Gestion des Apprenants",
      description: "Système de gestion éducative avec promotions, présence, cours et scan QR code pour les apprenants.",
      link: "/gestion-apprenants",
      tech: ["Éducation", "QR Code", "Gestion"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mes réalisations en développement web et gestion de systèmes, démontrant mes compétences techniques et ma capacité à résoudre des problèmes complexes.
          </p>
          <div className="w-16 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white dark:text-black text-2xl">
                      {index === 0 ? "📝" : index === 1 ? "🚢" : "🎓"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <Link to={project.link}>
                    <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300">
                      Voir le projet
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projets">
            <button className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
              Voir tous les projets
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;