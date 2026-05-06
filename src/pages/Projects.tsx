import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import todo1 from "@/assets/todo/screenshot1.png";
import todo2 from "@/assets/todo/screenshot2.png";
import todo3 from "@/assets/todo/screenshot3.png";
import todo4 from "@/assets/todo/screenshot4.png";
import gest1 from "@/assets/ges-apprenant/gest1.png";
import gest2 from "@/assets/ges-apprenant/gest2.png";
import gest3 from "@/assets/ges-apprenant/gest3.png";
import gest4 from "@/assets/ges-apprenant/gest4.png";
import gest5 from "@/assets/ges-apprenant/gest5.png";
import maxitImage from "@/assets/maxit/maxit.png";

const Projects = () => {
  const todoImages = [todo1, todo2, todo3, todo4];
  const gestionImages = [gest1, gest2, gest3, gest4, gest5];

  const projects = [
    {
      title: "WestaMarket",
      description: "Application mobile marketplace (Android + iOS) qui permet de vendre et acheter des produits modernes d'Afrique de l'Ouest de façon simple, rapide et sécurisée.",
      tech: ["React Native", "TypeScript", "Redux"],
      media: { type: "image", data: "https://via.placeholder.com/600x400?text=WestaMarket" },
      github: "https://github.com/nabzey/WestaMarket"
    },
    {
      title: "LUXURY",
      description: "Plateforme web avec une interface haut de gamme dédiée à la présentation de biens/services premium. Design UI/UX et optimisation des performances.",
      tech: ["TypeScript", "React", "TailwindCSS"],
      media: { type: "image", data: "https://via.placeholder.com/600x400?text=LUXURY" },
      github: "https://github.com/nabzey/LUXURY",
      link: "https://luxurym2.vercel.app/"
    },
    {
      title: "FotoJay",
      description: "API de gestion pour une plateforme de photographie. Gestion des utilisateurs, des réservations et des galeries.",
      tech: ["TypeScript", "Node.js", "Express"],
      media: { type: "image", data: "https://via.placeholder.com/600x400?text=FotoJay" },
      github: "https://github.com/nabzey/FO_TOL_DIAY",
      link: "https://back-photolediaye.onrender.com/api-docs"
    },
    {
      title: "GestionnaireBanque",
      description: "Application de gestion bancaire développée en PHP natif pour la gestion des comptes, des clients et des transactions financières.",
      tech: ["PHP", "MySQL", "HTML/CSS"],
      media: { type: "image", data: "https://via.placeholder.com/600x400?text=Banque+PHP" },
      github: "https://github.com/nabzey/GestionnaireBanque"
    },
    {
      title: "VOYAGE-221",
      description: "API de gestion pour l'agence de voyage VOYAGE 221. Gère les destinations, les circuits, les clients et les réservations de voyages.",
      tech: ["Python", "FastAPI", "SQLAlchemy"],
      media: { type: "image", data: "https://via.placeholder.com/600x400?text=VOYAGE-221" },
      github: "https://github.com/nabzey/VOYAGE-221"
    },
    {
      title: "Gestion Approvisionnement",
      description: "API RESTful avec Node.js et Express pour gérer les approvisionnements d'une boutique (Fournisseurs, Produits, Approvisionnements).",
      tech: ["Node.js", "Express", "PostgreSQL"],
      media: { type: "image", data: "https://via.placeholder.com/600x400?text=Gestion+Appro" },
      github: "https://github.com/nabzey/Gestion_Approvisionnement"
    },
    {
      title: "HERGO",
      description: "Plateforme intelligente permettant à un utilisateur de trouver rapidement un hôtel ou une villa pour s'abriter en toute sécurité.",
      tech: ["TypeScript", "React", "Node.js"],
      media: { type: "image", data: "https://via.placeholder.com/600x400?text=HERGO" },
      github: "https://github.com/nabzey/HERGO"
    },
    {
      title: "Secouriss",
      description: "Application outil d'aide aux premiers secours.",
      tech: ["TypeScript", "React", "Vite"],
      media: { type: "image", data: "https://via.placeholder.com/600x400?text=Secouriss" },
      github: "https://github.com/nabzey/secouriss",
      link: "https://secouriss.vercel.app"
    }
  ];

  return (
    <Layout>
      <div className="container max-w-6xl mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-lg text-cyan-100">
            Discover my achievements in web development and system management
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="w-full h-full flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-primary mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/15 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/25 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex-1 flex items-center justify-center mt-auto mb-4">
                  {project.media.type === "carousel" && Array.isArray(project.media.data) ? (
                    <Carousel className="w-full max-w-sm">
                      <CarouselContent>
                        {project.media.data.map((src, i) => (
                          <CarouselItem key={i}>
                            <div className="p-1">
                              <img
                                src={src}
                                alt={`Capture d'écran ${i + 1}`}
                                className="w-full h-auto rounded-xl shadow-lg max-h-48 object-contain"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  ) : project.media.type === "video" && typeof project.media.data === "string" ? (
                    <video
                      src={project.media.data}
                      controls
                      className="w-full h-auto rounded-xl shadow-lg max-h-48"
                    >
                      Votre navigateur ne supporte pas la vidéo.
                    </video>
                  ) : project.media.type === "image" && typeof project.media.data === "string" ? (
                    <img
                      src={project.media.data}
                      alt={project.title}
                      className="w-full h-auto rounded-xl shadow-lg max-h-48 object-contain"
                    />
                  ) : null}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="w-full bg-white/10 hover:bg-white/20 border-white/20 text-white">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Code GitHub
                      </a>
                    </Button>
                  )}
                  {project.link && (
                    <Button variant="default" size="sm" asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Voir le site
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;