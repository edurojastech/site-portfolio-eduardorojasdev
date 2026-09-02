import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, LayoutGrid, GalleryHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import plataformaCursos from "@/assets/plataforma-cursos.png";
import fitmakerImg from "@/assets/projects/fitmaker.png";
import acelcImg from "@/assets/projects/acelc.png";
import lokiImg from "@/assets/projects/loki.png";
import moviesImg from "@/assets/projects/movieswefit.png";
import solidaAcrediImg from "@/assets/projects/solida-acredi.jpg";
import studioImg from "@/assets/projects/studio.jpg";
import sitesvelozImg from "@/assets/projects/sitesveloz.jpg";
import jazzImg from "@/assets/projects/jazz.jpg";

const projects = [
  {
    title: "Solid Acredi",
    description:
      "Projeto em andamento: repaginação do site institucional, criação de página para captura de leads e construção de CRM interno para gestão de clientes e oportunidades.",
    tech: ["React", "TypeScript", "Tailwind CSS", "UX", "CRM"],
    image: solidaAcrediImg,
    github: null,
    live: "https://solidacredi.com.br/",
  },
  {
    title: "Corretora Acelc",
    description:
      "Projeto de destaque: site institucional da Corretora Acelc com identidade visual renovada, layout moderno e totalmente responsivo, otimizado para SEO e conversão de contatos.",
    tech: ["HTML", "CSS", "JavaScript", "SEO"],
    image: acelcImg,
    github: null,
    live: "https://acelc.netlify.app/",
  },
  {
    title: "Plataforma Fitness Elite",
    description:
      "Projeto de destaque: plataforma Fitness Elite (FitMaker) focada em treinos personalizados e experiência fitness premium, com interface moderna, responsiva e alta performance. Desenvolvida com Vue.js e Tailwind CSS.",
    tech: ["Vue.js", "Tailwind CSS", "Performance", "UX"],
    image: fitmakerImg,
    github: null,
    live: "https://lp-fitmaker.netlify.app/",
  },
  {
    title: "Agência SitesVeloz",
    description:
      "Site de agência digital especializada em criação de sites para empresas e profissionais que buscam uma presença no digital.",
    tech: ["Bootstrap", "JavaScript", "HTML", "SEO"],
    image: sitesvelozImg,
    github: null,
    live: "https://sitesveloz.com.br/",
  },
  {
    title: "Studio Rodovalho",
    description:
      "Site de Studio Fitness, para pessoas que desejam um espaço reservado de treino de musculação e consultoria.",
    tech: ["Bootstrap", "JavaScript", "HTML", "SEO"],
    image: studioImg,
    github: null,
    live: "https://studiorodovalho.netlify.app/",
  },
  {
    title: "Escola de Jazz",
    description:
      "Landing Page para divulgação de uma escola de Jazz, layout desenvolvido para escola de programação OneBitCode.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: jazzImg,
    github: "https://github.com/edurojastech/jazz-school",
    live: "https://jazz-school-lp.netlify.app",
  },
  {
    title: "CyberCollege",
    description:
      "Projeto de destaque construído com Lovable AI: plataforma de cursos online com dashboard completo, autenticação e experiência de aprendizado moderna. Desenvolvimento acelerado com IA + React.",
    tech: ["Lovable AI", "React", "TypeScript", "Tailwind CSS"],
    image: plataformaCursos,
    github: null,
    live: "https://course-platform-dashboard.netlify.app/auth",
  },
  {
    title: "Loki",
    description:
      "Landing Page temática da série Loki (Marvel Studios), desenvolvida de forma nativa com HTML, CSS e JavaScript. Com design imersivo, hero em destaque, boas práticas de UX/UI, SEO e estratégia GEO para alcance local.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "UX/UI", "SEO", "GEO"],
    image: lokiImg,
    github: null,
    live: "https://loki-page.netlify.app/",
  },
  {
    title: "WeMovie E-commerce",
    description:
      "Simulador de página de compra de filmes: catálogo, seleção de títulos, carrinho e fluxo de checkout completo, com interface responsiva e experiência de e-commerce.",
    tech: ["React", "JavaScript", "E-commerce", "UX"],
    image: moviesImg,
    github: null,
    live: "https://movieswefit.netlify.app/",
  },
];

type Project = (typeof projects)[number];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group h-full flex flex-col rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500">
    <div className="relative overflow-hidden h-48">
      <img
        src={project.image}
        alt={`Print do projeto ${project.title}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
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
      <div className="flex gap-3 mt-auto">
        {project.github && (
          <Button size="sm" variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> Código
            </a>
          </Button>
        )}
        <Button size="sm" asChild>
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} /> Demo
          </a>
        </Button>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [view, setView] = useState<"grid" | "carousel">("grid");

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

          <span className="font-mono-code text-primary text-sm block">
            // todos os projetos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Meus <span className="text-gradient">Projetos</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Uma coleção completa dos meus trabalhos, desde interfaces de <br />
            dashboards interativos até sites e landingpages.
          </p>
        </motion.div>

        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <span className="font-mono-code text-xs text-muted-foreground">
            {projects.length} projetos
          </span>
          <ToggleGroup
            type="single"
            value={view}
            onValueChange={(v) => v && setView(v as "grid" | "carousel")}
            className="bg-card border border-border rounded-full p-1 gap-1"
          >
            <ToggleGroupItem
              value="grid"
              aria-label="Visualizar em cards"
              className="rounded-full px-4 gap-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              <LayoutGrid size={16} /> Cards
            </ToggleGroupItem>
            <ToggleGroupItem
              value="carousel"
              aria-label="Visualizar em carrossel"
              className="rounded-full px-4 gap-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              <GalleryHorizontal size={16} /> Carrossel
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {view === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {projects.map((project) => (
                  <CarouselItem
                    key={project.title}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <ProjectCard project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4" />
              <CarouselNext className="hidden sm:flex -right-4" />
            </Carousel>
            <p className="text-center text-xs text-muted-foreground font-mono-code mt-6 sm:hidden">
              arraste para o lado →
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
