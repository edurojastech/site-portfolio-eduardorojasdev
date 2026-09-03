import { motion } from "framer-motion";
import { ArrowDown, Eye, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/hero-photo.webp";

const CV_URL = "/cv";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center px-6"
  >
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 flex flex-col items-center gap-4"
      >
        <div className="w-[200px] h-[200px] md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-primary/50 shadow-lg shadow-primary/20">
          <img
            src={heroPhoto}
            alt="Eduardo Rojas, desenvolvedor frontend"
            className="w-full h-full object-cover"
            width={512}
            height={512}
            decoding="async"
            /* React 18 só repassa `fetchpriority` em minúsculas ao DOM. */
            {...{ fetchpriority: "high" }}
          />
        </div>
        <span className="font-mono-code text-primary text-sm md:text-base tracking-widest">
          Olá, eu sou
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
      >
        Eduardo <span className="text-gradient">Rojas</span>
        <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-3">
          Desenvolvedor Frontend
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
      >
        Mais de 6 anos criando sites, landing pages e aplicações web
        performáticas e acessíveis em React, Next.js e Vue — para empresas em
        Uberlândia e todo o Brasil.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex items-center justify-center gap-4 mb-12"
      >
        <Button size="lg" className="glow-primary font-semibold" asChild>
          <a href="/projetos">Ver Projetos</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href={CV_URL} target="_blank" rel="noopener noreferrer">
            <Eye size={18} /> Ver CV
          </a>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-center gap-6"
      >
        {[
          {
            icon: Github,
            href: "https://github.com/edurojastech",
            label: "GitHub",
          },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/eduardorojastech",
            label: "LinkedIn",
          },
          {
            icon: Mail,
            href: "mailto:edurojas.developer@gmail.com",
            label: "Email",
          },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label={label}
          >
            <Icon size={22} />
          </a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          aria-label="Ir para a seção Sobre mim"
          className="text-muted-foreground hover:text-primary transition-colors animate-bounce block"
        >
          <ArrowDown size={24} aria-hidden="true" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
