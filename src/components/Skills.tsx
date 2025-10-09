import { Card } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "PHP",
    "Tailwind CSS",
    "MySQL",
    "PostgreSQL",
    "C",
    "Git & GitHub",
    "Figma",
    "Réseaux"
  ];

  const softSkills = [
    "Communication",
    "Travail en équipe",
    "Patience",
    "Gestion des priorités"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Compétences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise, ainsi que mes qualités personnelles.
          </p>
          <div className="w-16 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white dark:text-black text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Techniques</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill) => (
                <div key={skill} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                  <span className="text-black dark:text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white dark:text-black text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Comportementales</h3>
            </div>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div key={skill} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                  <span className="text-black dark:text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
