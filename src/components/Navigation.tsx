import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Download, Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/skills', label: t('skills') },
    { path: '/projects', label: t('projects') },
    { path: '/experience', label: t('experience') },
    { path: '/education', label: t('education') },
    { path: '/certifications', label: t('certifications') },
    { path: '/contact', label: t('contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            BA Zeynab
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-cyan-300'
                    : 'text-white hover:text-cyan-200'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-300"
                    layoutId="activeTab"
                  />
                )}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            <a
              href="/cv-zeynab-final.pdf"
              download
              className="flex items-center space-x-2 px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{t('downloadCV')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-cyan-500/20 text-cyan-300'
                      : 'text-white hover:bg-white/10 hover:text-cyan-200'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors w-full text-left"
              >
                <Languages className="w-4 h-4" />
                <span>{language === 'en' ? 'Français' : 'English'}</span>
              </button>

              <a
                href="/cv-zeynab-final.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{t('downloadCV')}</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;