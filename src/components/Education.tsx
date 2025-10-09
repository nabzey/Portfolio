import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Développement Web & Mobile",
      school: "Sonatel Academy",
      period: "Février 2025 – En cours",
      location: "Dakar, Sénégal",
      current: true
    },
    {
      degree: "BTS Informatique Industrielle et Réseaux",
      school: "CFPT Sénégal-Japon",
      period: "2020 – 2022",
      location: "Dakar, Sénégal",
      current: false
    },
    {
      degree: "L1 Systèmes Réseaux & Télécommunication",
      school: "Université de Bambey",
      period: "2020 – 2021",
      location: "Bambey, Sénégal",
      current: false
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Lycée Moderne de Rufisque",
      period: "2020",
      location: "Rufisque, Sénégal",
      current: false
    }
  ];

  const certifications = [
    "Certificat Informatique & Internet ForneN",
    "Certificat Azure DevOps Boards - Coursera",
    "Certificat Hedera"
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Formation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mon parcours académique et les certifications obtenues dans le domaine de l'informatique.
          </p>
          <div className="w-16 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        </div>

        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className={`p-8 rounded-lg border ${edu.current ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'}`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-semibold mb-2 ${edu.current ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>{edu.degree}</h3>
                  <p className={`text-lg font-medium ${edu.current ? 'text-gray-200 dark:text-gray-700' : 'text-gray-600 dark:text-gray-300'}`}>{edu.school}</p>
                  <p className={`text-sm ${edu.current ? 'text-gray-300 dark:text-gray-600' : 'text-gray-500 dark:text-gray-400'}`}>{edu.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${edu.current ? 'bg-white text-black dark:bg-black dark:text-white' : 'bg-black text-white dark:bg-white dark:text-black'}`}>
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-black dark:text-white mb-4">Certifications</h3>
            <p className="text-gray-600 dark:text-gray-300">Reconnaissances officielles de mes compétences</p>
          </div>
          <div className="grid md:grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center gap-4">
                <div className="w-3 h-3 bg-black dark:bg-white rounded-full flex-shrink-0"></div>
                <p className="text-black dark:text-white font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
