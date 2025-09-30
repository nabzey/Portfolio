import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Développement Web & Mobile",
      school: "Sonatel Academy",
      period: "Février 2025 – En cours",
      location: "Dakar, Sénégal"
    },
    {
      degree: "BTS Informatique Industrielle et Réseaux",
      school: "CFPT Sénégal-Japon",
      period: "2020 – 2022",
      location: "Dakar, Sénégal"
    },
    {
      degree: "L1 Systèmes Réseaux & Télécommunication",
      school: "Université de Bambey",
      period: "2020 – 2021",
      location: "Bambey, Sénégal"
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Lycée Moderne de Rufisque",
      period: "2020",
      location: "Rufisque, Sénégal"
    }
  ];

  const certifications = [
    "Certificat Informatique & Internet ForneN",
    "Certificat Azure DevOps Boards - Coursera",
    "Certificat Hedera"
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Formation</h2>
        <div className="space-y-6 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-accent font-medium">{edu.school}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{edu.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{edu.location}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Certifications</h3>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p className="text-foreground font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
