import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À propos' },
  { path: '/projects', label: 'Projets' },
  { path: '/experience', label: 'Expérience' },
  { path: '/skills', label: 'Compétences' },
  { path: '/contact', label: 'Contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLanguage = () => setLanguage(language === 'en' ? 'fr' : 'en');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(16,22,47,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="text-xl font-display font-extrabold text-ink tracking-tight">
            Zeynab Ba<span className="text-violet">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    active ? 'text-violet' : 'text-ink/70 hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              aria-label="Changer de langue"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-ink/60 hover:text-ink rounded-full transition-colors"
            >
              <Languages className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-white text-sm font-semibold rounded-full hover:bg-violet transition-colors duration-300"
            >
              Discutons
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ink p-2"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl mb-4 overflow-hidden shadow-lg border border-ink/5">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                      active ? 'bg-violet-light text-violet' : 'text-ink/70 hover:bg-secondary'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-ink/70 hover:bg-secondary rounded-xl transition-colors w-full text-left"
              >
                <Languages className="w-4 h-4" />
                {language === 'en' ? 'Français' : 'English'}
              </button>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-2 px-4 py-2.5 bg-ink text-white text-sm font-semibold rounded-full"
              >
                Discutons
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
