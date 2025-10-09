import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Star, Code, Palette, Zap, Users, Award, Briefcase } from "lucide-react";

const RevolutionaryPortfolio = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: "React", level: 95, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, icon: "🔷", color: "from-blue-600 to-blue-800" },
    { name: "Node.js", level: 85, icon: "🟢", color: "from-green-500 to-green-700" },
    { name: "DevOps", level: 80, icon: "☁️", color: "from-purple-500 to-purple-700" },
    { name: "UI/UX Design", level: 88, icon: "🎨", color: "from-pink-500 to-pink-700" },
    { name: "Docker", level: 75, icon: "🐳", color: "from-blue-400 to-blue-600" },
    { name: "AWS", level: 70, icon: "☁️", color: "from-orange-500 to-orange-700" },
    { name: "Python", level: 80, icon: "🐍", color: "from-yellow-500 to-yellow-700" }
  ];

  const projects = [
    {
      title: "Todo List App",
      description: "Application moderne de gestion de tâches avec authentification et stockage cloud",
      tech: ["React", "Node.js", "MongoDB"],
      image: "📝",
      color: "from-blue-500 to-purple-600",
      features: ["Authentification", "Temps réel", "Interface intuitive"]
    },
    {
      title: "GP Cargo System",
      description: "Plateforme de gestion logistique avec suivi en temps réel",
      tech: ["React", "Express", "MySQL"],
      image: "🚛",
      color: "from-green-500 to-teal-600",
      features: ["Suivi GPS", "API REST", "Dashboard admin"]
    },
    {
      title: "MaxITSA Banking",
      description: "Application bancaire digitale avec sécurité renforcée",
      tech: ["PHP", "PostgreSQL", "API"],
      image: "🏦",
      color: "from-red-500 to-pink-600",
      features: ["Sécurité bancaire", "Transactions", "API intégrations"]
    }
  ];

  const experiences = [
    {
      title: "Développeuse Fullstack",
      company: "CTIC Dakar",
      period: "2022-2023",
      description: "Création d'interfaces médicales et optimisation des performances",
      icon: "💻"
    },
    {
      title: "Chargée Service Clientèle",
      company: "FOUNDEVER",
      period: "2023-2025",
      description: "Gestion des relations clients et résolution de problèmes complexes",
      icon: "🎯"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>

        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Mouse Follower */}
        <motion.div
          className="fixed w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              BA Zeynab
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  className="text-gray-300 hover:text-white transition-colors relative"
                  whileHover={{ y: -2 }}
                  onClick={() => setCurrentSection(index)}
                >
                  {item}
                  {currentSection === index && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"
                      layoutId="activeTab"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              className="text-6xl md:text-8xl font-black mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                BA Zeynab
              </span>
            </motion.div>

            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Développeuse FULL STACK • DevOps Engineer • UI/UX Designer
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {['React', 'TypeScript', 'Node.js', 'DevOps', 'UI/UX'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
              </motion.button>

              <motion.button
                className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              À propos de moi
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionnée par la création d'expériences digitales exceptionnelles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-12 h-12" />,
                title: "Développement",
                description: "Création d'applications web modernes et performantes"
              },
              {
                icon: <Palette className="w-12 h-12" />,
                title: "Design",
                description: "Interfaces utilisateur intuitives et esthétiques"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Innovation",
                description: "Toujours à la recherche des dernières technologies"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="text-blue-400 mb-4 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Compétences
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies et outils que je maîtrise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Mes Projets
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Réalisations qui témoignent de mon expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl`}>
                  {project.image}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Expérience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mon parcours professionnel
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="relative flex items-start gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <motion.div
                    className="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {exp.icon}
                  </motion.div>

                  <motion.div
                    className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Contactez-moi
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Prêt à collaborer sur votre prochain projet ?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>zeynabba45@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-green-400" />
                  <span>+221 XX XXX XX XX</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <span>Dakar, Sénégal</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <motion.a
                  href="https://github.com/nabzey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/zeynab-ba-4342a021a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Votre message"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Envoyer le message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              BA Zeynab
            </div>
            <p className="text-gray-400 mb-6">
              Développeuse FULL STACK • DevOps • UI/UX Designer
            </p>
            <p className="text-sm text-gray-500">
              © 2024 BA Zeynab. Tous droits réservés.
            </p>
          </motion.div>
        </div>
      </footer>

    </div>
  );
};

export default RevolutionaryPortfolio;