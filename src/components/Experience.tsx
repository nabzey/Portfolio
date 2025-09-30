import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Chargée service clientèle",
      company: "FOUNDEVER",
      period: "2023 – 2025",
      description: "Relation client, gestion des appels et résolution de réclamations."
    },
    {
      title: "Développeuse Junior",
      company: "CTIC Dakar",
      period: "2022 – 2023",
      description: "Création d'interfaces utilisateur pour une application de suivi médical."
    },
    {
      title: "Projet de fin d'études",
      company: "CFPT Sénégal-Japon",
      period: "2022",
      description: "Contrôle d'accès à parking automatique."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Expérience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
