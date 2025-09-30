import { Card } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "NodeJs",
    "Express",
    "PHP",
    "Tailwind CSS",
    "MySQL",
    "PostgreSQL",
    "C",
    "GitHub",
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
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Compétences</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-accent">Compétences techniques</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-accent">Compétences comportementales</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
