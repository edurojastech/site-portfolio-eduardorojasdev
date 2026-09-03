import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";

/**
 * Destaques na home — lê de src/data/projects.ts, a mesma fonte da página
 * /projetos. Marque `featured: true` num projeto para exibi-lo aqui.
 */
const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono-code text-primary text-sm">// projetos</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Projetos em <span className="text-gradient">destaque</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sites institucionais, plataformas e landing pages desenvolvidos para
            clientes reais, com foco em performance, SEO e conversão.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group h-full flex flex-col rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={`Print do projeto ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={900}
                  height={563}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono-code px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={15} /> Ver projeto
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={15} /> Código
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/projetos">
              Ver todos os projetos <ExternalLink size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
