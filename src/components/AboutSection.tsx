import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";
import { profile } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-lavender -z-10" aria-hidden="true" />
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-panel overflow-hidden shadow-xl">
              <img src={profileImage} alt="Zeynab Ba" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-violet mb-4">À PROPOS</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink mb-6">
              Je suis {profile.name}.
            </h2>
            <p className="text-ink/60 leading-relaxed mb-6">{profile.bioLong}</p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-ink/60 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-violet" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Ouverte aux opportunités
              </span>
            </div>

            <blockquote className="bg-secondary/60 rounded-card p-5 text-ink/70 italic text-sm leading-relaxed border-l-2 border-violet">
              &ldquo;{profile.quote}&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
