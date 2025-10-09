import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CompetencesExperience = () => {
  const skillsCategories = [
    {
      title: "FULL STACK Development",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "PHP", level: 70 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Kubernetes", level: 65 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 80 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Prototyping", level: 80 },
        { name: "User Research", level: 75 },
        { name: "Wireframing", level: 85 },
        { name: "Design Systems", level: 70 }
      ]
    }
  ];

  const experiences = [
    {
      title: "Chargée service clientèle",
      company: "FOUNDEVER",
      period: "2023 – 2025",
      description: "Relation client, gestion des appels et résolution de réclamations.",
      icon: "📞"
    },
    {
      title: "Développeuse Junior",
      company: "CTIC Dakar",
      period: "2022 – 2023",
      description: "Création d'interfaces utilisateur pour une application de suivi médical.",
      icon: "💻"
    },
    {
      title: "Projet de fin d'études",
      company: "CFPT Sénégal-Japon",
      period: "2022",
      description: "Contrôle d'accès à parking automatique.",
      icon: "🚗"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 relative overflow-hidden">
      {/* Spectacular Background Animations */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute w-${4 + (i % 4) * 2} h-${4 + (i % 4) * 2} ${
              i % 4 === 0 ? 'bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full' :
              i % 4 === 1 ? 'bg-gradient-to-r from-pink-400/20 to-orange-500/20' :
              i % 4 === 2 ? 'bg-gradient-to-r from-green-400/20 to-cyan-500/20 rotate-45' :
              'bg-gradient-to-r from-yellow-400/20 to-red-500/20 rotate-12'
            } blur-xl`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              rotate: [0, 360, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Pulsing orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Shooting stars effect */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-px h-20 bg-gradient-to-b from-white to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
            }}
            animate={{
              x: [0, 300],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto py-20 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/">
            <Button variant="outline" className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Mes Compétences
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un ensemble complet de compétences techniques et créatives pour donner vie à vos projets
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden relative"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5`}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <div className="relative z-10">
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.span
                    className="text-4xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {category.icon}
                  </motion.span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </motion.div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: 0.8 + index * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mon Parcours Professionnel
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompetencesExperience;