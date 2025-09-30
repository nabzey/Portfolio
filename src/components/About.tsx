const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">À propos</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Je suis actuellement en formation à la <span className="text-foreground font-medium">Sonatel Academy</span> pour devenir 
            développeuse web et mobile. Mon parcours m'a permis d'acquérir des compétences solides en développement 
            frontend et backend, ainsi qu'en systèmes réseaux et électronique.
          </p>
          <p>
            Avec un <span className="text-foreground font-medium">BTS en Informatique Industrielle et Réseaux</span> du CFPT Sénégal-Japon, 
            je combine des connaissances techniques approfondies avec une approche pratique du développement logiciel.
          </p>
          <p>
            Passionnée par la création d'interfaces utilisateur intuitives et de systèmes robustes, 
            je m'efforce constamment d'améliorer mes compétences et de rester à jour avec les dernières technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
