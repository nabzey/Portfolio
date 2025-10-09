import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    certifications: 'Certifications',
    contact: 'Contact',
    downloadCV: 'Download CV',

    // Home
    name: 'BA Zeynab',
    subtitle: 'Fullstack Developer • UI/UX Designer',
    viewWork: 'View My Work',
    contactMe: 'Contact Me',

    // About
    aboutTitle: 'About Me',
    aboutSubtitle: 'Fullstack Developer • UI/UX Designer',
    aboutDescription: 'Passionate about creating beautiful, functional web experiences. With expertise in front-end development, DevOps practices, and UI/UX design, I bring ideas to life through code and creativity.',
    values: 'My Values',
    innovation: 'Innovation through technology',
    userCentered: 'User-centered design',
    continuousLearning: 'Continuous learning and improvement',
    collaboration: 'Collaboration and teamwork',

    // Skills
    skillsTitle: 'Skills',
    skillsSubtitle: 'My technical expertise across different domains',

    // Projects
    projectsTitle: 'My Projects',
    projectsSubtitle: 'Discover my achievements in web development and system management',

    // Experience
    experienceTitle: 'Experience',
    experienceSubtitle: 'My professional journey',

    // Education
    educationTitle: 'Education',
    educationSubtitle: 'My academic background',

    // Certifications
    certificationsTitle: 'Certifications',
    certificationsSubtitle: 'Professional certifications and achievements',

    // Contact
    contactTitle: 'Contact Me',
    contactSubtitle: 'Let\'s work together on your next project',
    getInTouch: 'Get In Touch',
    socialLinks: 'Social Links',
    sendMessage: 'Send Message',
    formName: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',

    // Footer
    copyright: '© 2024 BA Zeynab. All rights reserved.',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    experience: 'Expérience',
    education: 'Éducation',
    certifications: 'Certifications',
    contact: 'Contact',
    downloadCV: 'Télécharger CV',

    // Home
    name: 'BA Zeynab',
    subtitle: 'Développeuse Fullstack • Designer UI/UX',
    viewWork: 'Voir mes travaux',
    contactMe: 'Me contacter',

    // About
    aboutTitle: 'À propos de moi',
    aboutSubtitle: 'Développeuse Fullstack • Designer UI/UX',
    aboutDescription: 'Passionnée par la création d\'expériences web belles et fonctionnelles. Avec une expertise en développement front-end, pratiques DevOps et design UI/UX, je donne vie aux idées à travers le code et la créativité.',
    values: 'Mes Valeurs',
    innovation: 'Innovation à travers la technologie',
    userCentered: 'Design centré utilisateur',
    continuousLearning: 'Apprentissage continu et amélioration',
    collaboration: 'Collaboration et travail d\'équipe',

    // Skills
    skillsTitle: 'Compétences',
    skillsSubtitle: 'Mon expertise technique dans différents domaines',

    // Projects
    projectsTitle: 'Mes Projets',
    projectsSubtitle: 'Découvrez mes réalisations dans le développement web et la gestion de systèmes',

    // Experience
    experienceTitle: 'Expérience',
    experienceSubtitle: 'Mon parcours professionnel',

    // Education
    educationTitle: 'Éducation',
    educationSubtitle: 'Mon parcours académique',

    // Certifications
    certificationsTitle: 'Certifications',
    certificationsSubtitle: 'Certifications professionnelles et réalisations',

    // Contact
    contactTitle: 'Me contacter',
    contactSubtitle: 'Travaillons ensemble sur votre prochain projet',
    getInTouch: 'Entrer en contact',
    socialLinks: 'Liens sociaux',
    sendMessage: 'Envoyer le message',
    formName: 'Nom',
    email: 'Email',
    subject: 'Sujet',
    message: 'Message',

    // Footer
    copyright: '© 2024 BA Zeynab. Tous droits réservés.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};