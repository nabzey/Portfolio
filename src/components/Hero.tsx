import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, MapPin } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";
import { profile } from "@/data/portfolio";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* soft background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-violet-light blur-3xl opacity-70" />
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-lavender blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-xs md:text-sm font-semibold tracking-[0.2em] text-violet mb-6"
            >
              {profile.roleLabel}
            </motion.p>

            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ink mb-6"
            >
              Je conçois des expériences<br />
              et je <span className="text-violet">construis</span> des{" "}
              <span className="text-violet">solutions</span>.
            </motion.h1>

            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-ink/60 leading-relaxed max-w-lg mb-8"
            >
              {profile.bioShort}
            </motion.p>

            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 text-sm text-ink/60 mb-10"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-violet" />
                {profile.location}
              </span>
              {profile.available && (
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Disponible pour de nouvelles opportunités
                </span>
              )}
            </motion.div>

            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-white font-semibold rounded-full hover:bg-violet transition-colors duration-300"
              >
                Découvrir mes projets
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-ink font-semibold rounded-full border border-ink/10 hover:border-violet hover:text-violet transition-colors duration-300"
              >
                Télécharger mon CV
                <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              custom={0.5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-10"
            >
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl md:text-3xl font-extrabold text-ink">{stat.value}</p>
                  <p className="text-xs text-ink/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="absolute -top-10 -left-6 w-40 h-40 rounded-full bg-violet-light -z-10" aria-hidden="true" />
            <div className="absolute bottom-8 -right-8 w-28 h-28 rounded-full bg-lavender -z-10" aria-hidden="true" />

            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-panel overflow-hidden shadow-xl bg-white">
              <img
                src={profileImage}
                alt="Zeynab Ba, développeuse fullstack et UI/UX designer"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-8 -left-10 max-w-[220px] bg-white rounded-2xl shadow-lg p-4 hidden sm:block"
            >
              <p className="text-sm text-ink/70 leading-snug">&ldquo;{profile.quote}&rdquo;</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
