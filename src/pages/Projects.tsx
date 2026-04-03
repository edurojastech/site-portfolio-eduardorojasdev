import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";

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
  {
    title: "Landing Page Builder",
    description: "Ferramenta drag & drop para criação de landing pages com templates prontos e exportação de código limpo.",
    tech: ["React", "DnD Kit", "Tailwind", "Zustand"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "API Gateway",
    description: "Gateway de API com rate limiting, autenticação JWT, logging e dashboard de monitoramento em tempo real.",
    tech: ["Node.js", "Express", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link to="/">
              <ArrowLeft size={16} /> Voltar
            </Link>
          </Button>

          <span className="font-mono-code text-primary text-sm block">// todos os projetos</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Meus <span className="text-gradient">Projetos</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Uma coleção completa dos meus trabalhos, desde dashboards interativos até sistemas complexos de backend.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono-code px-2 py-0.5 rounded-full bg-primary/10 text-primary">
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
      </div>
    </div>
  );
};

export default Projects;
