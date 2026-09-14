import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { profile } from '@/data/portfolio';

const Footer = () => {
  return (
    <footer className="relative z-10 mt-8">
      <div className="bg-ink rounded-t-panel md:rounded-t-[2.5rem]">
        <div className="container mx-auto px-4 pt-16 pb-10 md:pt-24 md:pb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-violet mb-4">UN PROJET EN TÊTE ?</p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-6">
              Travaillons ensemble.
            </h2>
            <p className="text-white/60 mb-8 max-w-md">
              Que ce soit pour collaborer, discuter d&apos;une opportunité ou simplement échanger des idées, n&apos;hésite pas à me contacter.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-ink font-semibold rounded-full hover:bg-violet hover:text-white transition-colors duration-300"
            >
              Me contacter
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-white font-display font-bold">{profile.name}.</p>
              <p className="text-white/50 text-sm">{profile.role}</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-violet hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-violet hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-violet hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-white/30 text-xs text-center md:text-left mt-8">
            © 2026 {profile.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
