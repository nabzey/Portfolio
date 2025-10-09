import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GestionSalaires = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-20 px-4">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Application de Gestion des Salaires</CardTitle>
            <CardDescription>
              Application web multi-entreprises pour la gestion complète des salaires : employés avec différents types de contrats (journalier, fixe, honoraire), cycles de paie, bulletins de salaire, paiements partiels/totaux, génération de documents PDF (reçus, bulletins, listes d'émargement), dashboard avec indicateurs clés et graphiques. Rôles utilisateurs (super-admin, admin, caissier) avec permissions strictes. Développée en Node.js (backend) et React (frontend).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <video
              src="/gestion/demo.webm"
              controls
              className="w-full h-auto rounded-lg max-h-80"
            >
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GestionSalaires;