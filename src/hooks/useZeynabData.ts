import { useMemo } from 'react';

export interface ZeynabData {
  name: string;
  title: {
    en: string;
    fr: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  skills: {
    technical: string[];
    behavioral: string[];
    tools: string[];
  };
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    school: string;
    period: string;
    location: string;
  }>;
  certifications: Array<{
    title: string;
    issuer: string;
    date: string;
    description: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
  }>;
  services: {
    website: {
      price: string;
      description: string;
    };
    webapp: {
      price: string;
      description: string;
    };
    design: {
      price: string;
      description: string;
    };
  };
  about: {
    en: string;
    fr: string;
  };
}

export const useZeynabData = (): ZeynabData => {
  return useMemo(() => ({
    name: "Zeynab",
    title: {
      en: "FULL STACK Developer • UI/UX Designer",
      fr: "Développeuse FULL STACK • Designer UI/UX"
    },
    contact: {
      email: "zeynabba45@gmail.com",
      phone: "+221 77 365 74 35",
      linkedin: "linkedin.com/in/zeynab-ba-4342a021a",
      github: "github.com/nabzey"
    },
    skills: {
      technical: [
        "HTML & CSS", "C", "JavaScript", "PHP", "Tailwind CSS",
        "Node.js", "Express", "React", "Figma", "MySQL", "PostgreSQL",
        "Modélisation", "Canva", "GitHub", "Réseaux", "Soudures"
      ],
      behavioral: [
        "Communication", "Travail en équipe", "Patience", "Gestion des priorités"
      ],
      tools: [
        "Docker", "CI/CD (GitHub Actions)", "Deployment (Netlify, Vercel)",
        "Figma", "Prototyping", "Interaction Design"
      ]
    },
    experience: [
      {
        title: "Chargée service clientèle",
        company: "FOUNDEVER",
        period: "2023 – 2025",
        description: "Relation client, gestion des appels et résolution de réclamations dans un environnement international."
      },
      {
        title: "Développeuse Junior",
        company: "CTIC Dakar",
        period: "2022 – 2023",
        description: "Création d'interfaces utilisateur pour une application de suivi médical utilisant React et Node.js."
      },
      {
        title: "Projet de fin d'études",
        company: "CFPT Sénégal-Japon",
        period: "2022",
        description: "Contrôle d'accès à parking automatique avec système embarqué et interface web."
      }
    ],
    education: [
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
    ],
    certifications: [
      {
        title: "Certificat informatique & internet ForneN",
        issuer: "ForneN",
        date: "2023",
        description: "Certification en informatique et internet délivré par ForneN."
      },
      {
        title: "Certificat Azure DevOps Boards",
        issuer: "Coursera",
        date: "2023",
        description: "Certification sur les pratiques DevOps avec Azure Boards."
      },
      {
        title: "Certificat Hedera",
        issuer: "Hedera",
        date: "2023",
        description: "Certification sur la blockchain Hedera et ses applications."
      }
    ],
    projects: [
      {
        title: "Application Todo List",
        description: "Application de gestion de tâches en TypeScript et Node.js avec authentification, CRUD, photos et enregistrements vocaux.",
        tech: ["React", "Node.js", "TypeScript"]
      },
      {
        title: "Système de Gestion de Cargaison (GP)",
        description: "Plateforme de transport multimodal avec suivi de colis, critères d'expédition et gestion des cargaisons.",
        tech: ["React", "Express", "MySQL"]
      },
      {
        title: "Application Bancaire MaxITSA",
        description: "Application de services financiers pour la gestion de comptes bancaires, transferts, paiements et intégrations avec des systèmes externes.",
        tech: ["PHP", "PostgreSQL", "API"]
      },
      {
        title: "Plateforme de Gestion des Apprenants",
        description: "Système de gestion éducative avec promotions, présence, cours et scan QR code pour les apprenants.",
        tech: ["PHP", "JSON"]
      }
    ],
    services: {
      website: {
        price: "100,000 FCFA",
        description: "Site web responsive complet avec design moderne et fonctionnalités."
      },
      webapp: {
        price: "200,000 - 500,000 FCFA",
        description: "Application web selon la complexité (authentification, dashboard, paiement, etc.)."
      },
      design: {
        price: "200,000 FCFA",
        description: "Wireframes, prototypes et systèmes de design UI/UX."
      }
    },
    about: {
      en: "Passionate FULL STACK developer and UI/UX designer. Combines technical expertise with strong soft skills like communication and teamwork. Currently studying at Sonatel Academy, with experience in both development and customer service. Values include innovation, user-centered design, continuous learning, and collaboration.",
      fr: "Développeuse FULL STACK et designer UI/UX passionnée. Combine une expertise technique avec de solides compétences relationnelles comme la communication et le travail en équipe. Actuellement en formation à Sonatel Academy, avec de l'expérience en développement et en service client. Valeurs incluent l'innovation, le design centré utilisateur, l'apprentissage continu et la collaboration."
    }
  }), []);
};