import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GPCargo = () => {
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
          <span className="text-foreground">Système de Gestion de Cargaison</span>
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
                <span className="text-2xl">🚢</span>
              </div>
              <div>
                <CardTitle className="text-2xl text-primary">Système de Gestion de Cargaison (GP)</CardTitle>
                <p className="text-sm text-muted-foreground">Node.js • React • MySQL</p>
              </div>
            </div>
            <CardDescription className="text-base leading-relaxed">
              Un système de gestion de cargaisons pour une entreprise de transport maritime, aérien ou routier. Permet de faire une demande d'expédition de colis en fournissant les informations nécessaires du destinataire et de l'expéditeur. Possibilité de suivre les colis pour voir où se trouve la cargaison. Un colis peut être intégré dans une cargaison s'il respecte les critères (par exemple, un colis fragile ne peut pas être mis dans le transport maritime).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-center">Démonstration</h4>
              <video
                src="/gp/demo.webm"
                controls
                className="w-full h-auto rounded-xl shadow-lg max-h-96 border border-border/50"
              >
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GPCargo;