import todo1 from "@/assets/todo/screenshot1.png";
import todo2 from "@/assets/todo/screenshot2.png";
import todo3 from "@/assets/todo/screenshot3.png";
import todo4 from "@/assets/todo/screenshot4.png";
import gest1 from "@/assets/ges-apprenant/gest1.png";
import gest2 from "@/assets/ges-apprenant/gest2.png";
import gest3 from "@/assets/ges-apprenant/gest3.png";
import gest4 from "@/assets/ges-apprenant/gest4.png";
import gest5 from "@/assets/ges-apprenant/gest5.png";
import maxitImage from "@/assets/maxit/maxit.png";
import hergoCover from "@/assets/hergo/cover.png";
import westamarketCover from "@/assets/westamarket/cover.svg";
import luxuryCover from "@/assets/luxury/cover.png";
import projetWalletCover from "@/assets/projet-wallet/cover.svg";
import secourissCover from "@/assets/secouriss/cover.png";

export const profile = {
  name: "Zeynab Ba",
  role: "Fullstack Developer & UI/UX Designer",
  roleLabel: "FULLSTACK DEVELOPER & UI/UX DESIGNER",
  location: "Dakar, Sénégal",
  available: true,
  email: "zeynabba45@gmail.com",
  phone: "+221 77 365 74 35",
  whatsapp: "https://wa.me/221773657435",
  github: "https://github.com/nabzey",
  linkedin: "https://linkedin.com/in/zeynab-ba-4342a021a",
  cvPath: "/cvzeyajours_final.pdf",
  bioShort:
    "Développeuse Fullstack polyvalente, à l'aise sur l'ensemble de la chaîne front, mobile et back. Je conçois des expériences et je construis des solutions, de la spécification à la mise en production.",
  bioLong:
    "Développeuse Fullstack polyvalente, à l'aise sur l'ensemble de la chaîne front, mobile et back (React/Angular, Flutter, Node.js/Laravel/FastAPI/Spring Boot). Expérience concrète en conception d'API sécurisées, intégration front-back et déploiement conteneurisé et cloud (AWS, Docker). Toujours en train d'apprendre, j'aime relever des défis techniques et travailler sur des projets qui ont un impact réel pour leurs utilisateurs.",
  quote: "Une meilleure technologie pour un meilleur quotidien.",
  stats: [
    { value: "14+", label: "Projets réalisés" },
    { value: "03+", label: "Années d'expérience" },
    { value: "∞", label: "Toujours apprendre" },
  ],
};

export const techStack = [
  "React",
  "Angular",
  "TypeScript",
  "Flutter",
  "Node.js",
  "Laravel",
  "Spring Boot",
  "AWS",
  "Docker",
  "Figma",
  "PostgreSQL",
  "Git",
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  images?: string[];
  video?: string;
  github?: string;
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "hergo",
    title: "HERGO",
    description:
      "Plateforme permettant de trouver rapidement un hôtel ou une villa dans une ville inconnue. Pipeline de déploiement complet sur AWS avec Terraform et Ansible, conteneurisation Docker, reverse-proxy Nginx et intégration continue via GitHub Actions. Projet présenté et démontré devant les pairs.",
    tech: ["Node.js", "React", "AWS EC2", "Terraform", "Ansible", "Docker", "Nginx", "GitHub Actions"],
    images: [hergoCover],
    // github: "https://github.com/nabzey/HERGO",
    featured: true,
  },
  {
    slug: "westamarket",
    title: "WestaMarket",
    description:
      "Application mobile marketplace (Android + iOS) pour vendre et acheter des produits modernes d'Afrique de l'Ouest simplement, rapidement et en sécurité : catalogue produits, recherche, panier, commandes.",
    tech: ["React Native", "Laravel", "PostgreSQL", "Docker"],
    images: [westamarketCover],
    github: "https://github.com/nabzey/WestaMarket",
    featured: true,
  },
  {
    slug: "gestion-salaires",
    title: "Gestion des Salaires",
    description:
      "Application web multi-entreprises pour la gestion complète des salaires : employés (contrats journalier, fixe, honoraire), cycles de paie, bulletins, paiements partiels/totaux, génération de documents PDF, dashboard avec indicateurs clés et graphiques, rôles utilisateurs avec permissions strictes.",
    tech: ["Node.js", "React", "TypeScript", "MySQL"],
    video: "/salire/demo.webm",
    github: "https://github.com/nabzey/Gestion-salaires",
    featured: true,
  },
  {
    slug: "todo-list",
    title: "Application Todo List",
    description:
      "Application de gestion de tâches : connexion, ajout, suppression, modification. Possibilité d'ajouter une photo et un enregistrement vocal à chaque tâche, authentification obligatoire.",
    tech: ["TypeScript", "Node.js", "React"],
    images: [todo1, todo2, todo3, todo4],
  },
  {
    slug: "gestion-apprenants",
    title: "Gestion des Apprenants",
    description:
      "Plateforme de gestion des apprenants : promotions (ajout, activation, désactivation), référentiels, suivi de présence, cours disponibles. Le vigile gère le scan des apprenants via leur QR code.",
    tech: ["PHP", "JSON"],
    images: [gest1, gest2, gest3, gest4, gest5],
  },
  {
    slug: "gp-cargo",
    title: "Gestion de Cargaison (GP)",
    description:
      "Système de gestion de cargaisons pour une entreprise de transport maritime, aérien ou routier : demande d'expédition, suivi de colis, règles d'intégration selon le type de transport (ex. colis fragile exclu du maritime).",
    tech: ["Node.js", "React", "MySQL"],
    video: "/gp/demo.webm",
  },
  {
    slug: "luxury",
    title: "LUXURY",
    description:
      "Plateforme web avec une interface haut de gamme dédiée à la présentation de biens/services premium. Design UI/UX et optimisation des performances.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    images: [luxuryCover],
    github: "https://github.com/nabzey/LUXURY",
    link: "https://luxurym2.vercel.app/",
  },
  {
    slug: "fotojay",
    title: "FotoJay",
    description:
      "API de gestion pour une plateforme de photographie : gestion des utilisateurs, des réservations et des galeries.",
    tech: ["TypeScript", "Node.js", "Express"],
    github: "https://github.com/nabzey/FO_TOL_DIAY",
    link: "https://back-photolediaye.onrender.com/api-docs",
  },
  {
    slug: "gestionnaire-banque",
    title: "GestionnaireBanque",
    description:
      "Application de gestion bancaire développée en PHP natif : gestion des comptes, des clients et des transactions financières.",
    tech: ["PHP", "MySQL", "HTML/CSS"],
    github: "https://github.com/nabzey/GestionnaireBanque",
  },
  {
    slug: "ompay",
    title: "OM-PAY",
    description: "Application de paiement et transfert : paiement via QR code, gestion des comptes et des transactions.",
    tech: ["Laravel", "Flutter"],
    github: "https://github.com/nabzey/OM-PAY",
  },
  {
    slug: "fastapi",
    title: "API Backend FastAPI",
    description: "Développement d'API performantes en Python : gestion des routes et traitement des données.",
    tech: ["Python", "FastAPI"],
    github: "https://github.com/nabzey/FASTAPI",
  },
  {
    slug: "projet-wallet",
    title: "Projet Wallet",
    description: "Architecture microservices (wallet-service et service-app) avec Spring Boot pour la gestion des comptes, transactions et OTP/JWT, asynchronisme via Kafka, et application front-end mobile/web Flutter.",
    tech: ["Java", "Spring Boot", "Flutter", "Kafka", "PostgreSQL"],
    images: [projetWalletCover],
    github: "https://github.com/nabzey/Projet_Wallet",
    featured: true,
  },
  {
    slug: "secouriss",
    title: "Secouriss",
    description: "Application outil d'aide aux premiers secours.",
    tech: ["TypeScript", "React", "Vite"],
    images: [secourissCover],
    github: "https://github.com/nabzey/secouriss",
    link: "https://secouriss.vercel.app",
  },
  {
    slug: "maxit",
    title: "Maxit-SA",
    description: "Application de gestion pour une entreprise.",
    tech: ["PHP"],
    images: [maxitImage],
    github: "https://github.com/nabzey/Maxit-SA",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "UI/UX Design",
    skills: ["Figma", "Prototypage", "Design Systems", "UI/UX Responsive"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React", "Angular", "TypeScript", "Flutter", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js / Express", "Laravel", "FastAPI", "Spring Boot", "MySQL", "PostgreSQL"],
  },
  {
    title: "Cloud & Outils",
    skills: ["AWS (EC2)", "Terraform", "Ansible", "Docker", "GitHub Actions", "Git"],
  },
];

export type Experience = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    title: "Développeuse Front-end (stage)",
    company: "Sonatel",
    period: "Avril 2026 – en cours",
    bullets: [
      "Développement de Mini Programs WeChat (WXML, WXSS, JS) pour des cas d'usage grand public",
      "Intégration d'API via wx.request (JSON) et mise en place de l'authentification OAuth",
      "Conception d'interfaces performantes avec gestion d'état, en coordination avec les équipes backend et design (revues de code, itérations)",
    ],
  },
  {
    title: "Développeuse Mobile (freelance)",
    company: "Nexa",
    period: "Mars 2026 – Juillet 2026",
    bullets: [
      "Conception et livraison d'une application mobile Flutter (iOS/Android) pour une plateforme sociale de mode, en autonomie, de la spécification à la mise en production",
      "Backend Node.js/Express/Prisma/PostgreSQL avec intégration Firebase, et pipeline CI/CD (Codemagic) pour la distribution iOS via TestFlight",
      "Conception et développement d'un dashboard d'administration (Angular + Node.js) pour la gestion des liens d'affiliation : KPIs et ventes, suivi clics/conversions, fiches marques partenaires, gestion des rôles et des commissions",
      "Déploiement du backend d'administration sur VPS (Hostinger), en environnement séparé de l'application utilisateur",
    ],
  },
  {
    title: "Développeuse Fullstack",
    company: "Hamza Solution",
    period: "2022 – 2023",
    bullets: [
      "Contribution à une plateforme de télémédecine (Laravel + React + Flutter)",
      "Conception d'API sécurisées avec gestion des utilisateurs et des rôles",
      "Participation aux sprints Agile : tests, revues et améliorations continues",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  location: string;
};

export const education: EducationItem[] = [
  {
    degree: "Licence 3 Développement Web & Mobile",
    school: "École Supérieure Professionnelle 221",
    period: "En cours",
    location: "Dakar, Sénégal",
  },
  {
    degree: "Certificat de spécialisation professionnelle en développement Web et Mobile",
    school: "Sonatel Academy",
    period: "2025",
    location: "Dakar, Sénégal",
  },
  {
    degree: "BTS Informatique Industrielle et Réseaux",
    school: "CFPT Sénégal-Japon",
    period: "2022",
    location: "Dakar, Sénégal",
  },
  {
    degree: "Licence 1 en Système Réseau & Télécommunication",
    school: "Université Alioune Diop",
    period: "2020 – 2021",
    location: "Bambey, Sénégal",
  },
];
