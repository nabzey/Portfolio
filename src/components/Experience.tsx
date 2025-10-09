import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Chargée service clientèle",
      company: "FOUNDEVER",
      period: "2023 – 2025",
      description: "Relation client, gestion des appels entrants et sortants, résolution de réclamations et traitement des demandes."
    },
    {
      title: "Développeuse Junior",
      company: "CTIC Dakar",
      period: "2022 – 2023",
      description: "Création d'interfaces utilisateur intuitives pour une application de suivi médical, développement frontend avec React."
    },
    {
      title: "Projet de fin d'études",
      company: "CFPT Sénégal-Japon",
      period: "2022",
      description: "Conception et développement d'un système de contrôle d'accès automatique à parking avec capteurs et interface embarquée."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Expérience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mon parcours professionnel et mes réalisations dans le domaine du développement et du service client.
          </p>
          <div className="w-16 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">{exp.company}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
