import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import todo1 from "@/assets/todo/screenshot1.png";
import todo2 from "@/assets/todo/screenshot2.png";
import todo3 from "@/assets/todo/screenshot3.png";
import todo4 from "@/assets/todo/screenshot4.png";

const TodoList = () => {
  const images = [todo1, todo2, todo3, todo4];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      {/* Header Branding */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              BA Zeynab
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link>
              <Link to="/projets" className="text-muted-foreground hover:text-primary transition-colors">Projets</Link>
              <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto py-12 px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Accueil</Link>
          <span>/</span>
          <Link to="/projets" className="hover:text-primary">Projets</Link>
          <span>/</span>
          <span className="text-foreground">Application Todo List</span>
        </div>

        <Link to="/projets">
          <Button variant="outline" className="mb-8 hover:bg-primary hover:text-primary-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux projets
          </Button>
        </Link>

        <Card className="w-full shadow-xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <div>
                <CardTitle className="text-2xl text-primary">Application Todo List</CardTitle>
                <p className="text-sm text-muted-foreground">TypeScript • Node.js • React</p>
              </div>
            </div>
            <CardDescription className="text-base leading-relaxed">
              Une application de gestion de tâches développée en TypeScript pour le frontend et Node.js pour le backend. Permet de se connecter, ajouter une tâche, supprimer, modifier. Lors de l'ajout d'une tâche, possibilité d'ajouter une photo et un enregistrement vocal. L'utilisateur doit obligatoirement être dans la base de données pour se connecter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-center">Captures d'écran</h4>
              <Carousel className="w-full max-w-2xl mx-auto">
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-2">
                        <img
                          src={src}
                          alt={`Capture d'écran ${index + 1}`}
                          className="w-full h-auto rounded-xl shadow-lg max-h-96 object-contain border border-border/50"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-background/80 hover:bg-background" />
                <CarouselNext className="right-4 bg-background/80 hover:bg-background" />
              </Carousel>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TodoList;