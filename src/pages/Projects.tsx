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
      title: "Application Todo List",
      description: "Application de gestion de tâches en TypeScript et Node.js avec authentification, CRUD, photos et enregistrements vocaux.",
      tech: ["TypeScript", "Node.js", "React"],
      media: { type: "carousel", data: todoImages }
    },
    {
      title: "Système de Gestion de Cargaison (GP)",
      description: "Plateforme de transport multimodal avec suivi de colis, critères d'expédition et gestion des cargaisons.",
      tech: ["Node.js", "React", "MySQL"],
      media: { type: "video", data: "/gp/demo.webm" }
    },
    {
      title: "Plateforme de Gestion des Apprenants",
      description: "Système de gestion éducative avec promotions, présence, cours et scan QR code pour les apprenants.",
      tech: ["PHP", "JSON"],
      media: { type: "carousel", data: gestionImages }
    },
    {
      title: "Application Bancaire MaxITSA",
      description: "Application de services financiers pour la gestion de comptes bancaires, transferts, paiements et intégrations avec des systèmes externes comme AppDAFF (vérification d'identité) et AppWoyofal (achats d'électricité). Développée en PHP orienté objet avec architecture MVC, API REST, et déploiement cloud.",
      tech: ["PHP", "API REST", "PostgreSQL"],
      media: { type: "image", data: maxitImage }
    },
    {
      title: "Application de Gestion des Salaires",
      description: "Application web multi-entreprises pour la gestion complète des salaires et paiements.",
      tech: ["Node.js", "React", "MySQL"],
      media: { type: "video", data: "/salire/demo.webm" }
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
                <div className="flex-1 flex items-center justify-center mt-auto">
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