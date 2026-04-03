import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Dashboard completo para gestão de e-commerce com gráficos interativos, gerenciamento de produtos e analytics em tempo real.",
    tech: ["React", "TypeScript", "Tailwind", "Recharts"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Social Media App",
    description: "Aplicação social com feed dinâmico, sistema de likes, comentários e perfis de usuário com design moderno.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Design System",
    description: "Design system completo com mais de 50 componentes reutilizáveis, documentação interativa e temas customizáveis.",
    tech: ["React", "Storybook", "Styled Components"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management",
    description: "App de gerenciamento de tarefas com drag & drop, filtros avançados, labels e integração com calendar.",
    tech: ["Vue.js", "TypeScript", "Pinia", "Supabase"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
];

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
            Trabalhos <span className="text-gradient">recentes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono-code px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> Código
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <a href="/projetos">
              Ver todos os projetos <ExternalLink size={16} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
