import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Images } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/eduardo-avatar.webp";

const SocialMedia = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 lg:pt-40">
        <motion.header
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-border pb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <img
              src={avatar}
              alt="Eduardo Rojas"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover ring-1 ring-primary/50"
            />
            <div>
              <p className="font-semibold">Eduardo Rojas Tech</p>
              <p className="text-sm text-primary">Portfólio criativo</p>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Social <span className="text-primary">Media</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Conteúdo, identidade visual e comunicação digital para conectar marcas e pessoas.
          </p>
          <Button asChild className="mt-8" size="lg">
            <a href="mailto:edurojas.developer@gmail.com">
              Vamos conversar <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </motion.header>

        <section aria-labelledby="social-media-work" className="pt-10">
          <h2 id="social-media-work" className="text-2xl font-semibold">Trabalhos</h2>
          <div className="py-16 flex flex-col items-center text-center gap-4">
            <Images size={36} className="text-primary" aria-hidden="true" />
            <p className="text-lg font-medium">Novos trabalhos em breve</p>
            <p className="text-muted-foreground max-w-md">
              A seleção de trabalhos de Social Media está sendo preparada.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SocialMedia;