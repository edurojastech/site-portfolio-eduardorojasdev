import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, LayoutGrid, GalleryHorizontal, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import { projects, type Project } from "@/data/projects";



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
  const [filter, setFilter] = useState<string>("Todos");

  const allTechnologies = useMemo(
    () =>
      Array.from(new Set(projects.flatMap((p) => p.tech))).sort((a, b) =>
        a.localeCompare(b, "pt-BR")
      ),
    []
  );

  const filteredProjects = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((p) => p.tech.includes(filter)),
    [filter]
  );

  const filters = ["Todos", ...allTechnologies];

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

        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="font-mono-code text-xs text-muted-foreground">
              {filteredProjects.length} {filteredProjects.length === 1 ? "projeto" : "projetos"}
              {filter !== "Todos" && ` em "${filter}"`}
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

          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-muted-foreground font-mono-code">
              Filtrar por tecnologia:
            </span>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[220px] font-mono-code bg-card border-border hover:border-primary/40 transition-colors">
                <SelectValue placeholder="Selecione uma tecnologia" />
              </SelectTrigger>
              <SelectContent>
                {filters.map((tech) => (
                  <SelectItem key={tech} value={tech} className="font-mono-code">
                    {tech}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${view}-${filter}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {view === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, i) => (
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
                <Carousel opts={{ align: "start", loop: filteredProjects.length > 3 }} className="w-full">
                  <CarouselContent className="-ml-4">
                    {filteredProjects.map((project) => (
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-mono-code">
                  Nenhum projeto encontrado com a tecnologia <span className="text-primary">{filter}</span>.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => setFilter("Todos")}
                >
                  <RotateCcw size={14} className="mr-1.5" /> Limpar filtro
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
