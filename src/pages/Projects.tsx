import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import plataformaCursos from "@/assets/plataforma-cursos.png";
import fitmakerImg from "@/assets/projects/fitmaker.png";
import acelcImg from "@/assets/projects/acelc.png";
import lokiImg from "@/assets/projects/loki.png";

const projects = [
  {
    title: "Studio Rodovalho",
    description:
      "Site de Studio Fitness, para pessoas que desejam um espaço reservado de treino de musculação e consultoria.",
    tech: ["Bootstrap", "JavaScript", "HTML", "SEO"],
    image: "https://eduardorojas.com.br/imagens/studiorodovalho.webp",
    github: null,
    live: "https://studiorodovalho.netlify.app/",
  },
  {
    title: "Escola de Jazz",
    description:
      "Landing Page para divulgação de uma escola de Jazz, layout desenvolvido para escola de programação OneBitCode.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "https://eduardorojas.com.br/imagens/lp-jazz-school.webp",
    github: "https://github.com/edurojastech/jazz-school",
    live: "https://jazz-school-lp.netlify.app",
  },
  {
    title: "Agência SitesVeloz",
    description:
      "Site de agência digital especializada em criação de sites para empresas e profissionais que buscam uma presença no digital.",
    tech: ["Bootstrap", "JavaScript", "HTML", "SEO"],
    image: "https://eduardorojas.com.br/imagens/sitesveloz.webp",
    github: null,
    live: "https://sitesveloz.com.br/",
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
    title: "Corretora Acelc",
    description:
      "Projeto de destaque: site institucional da Corretora Acelc com identidade visual renovada, layout moderno e totalmente responsivo, otimizado para SEO e conversão de contatos.",
    tech: ["HTML", "CSS", "JavaScript", "SEO"],
    image: acelcImg,
    github: null,
    live: "https://acelc.netlify.app/",
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
  {
    title: "Loki",
    description:
      "Landing Page temática da série Loki (Marvel Studios), com layout imersivo, hero em destaque, informações da série e chamadas para assistir e ver o trailer. Desenvolvida com HTML, CSS e JavaScript puros.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: lokiImg,
    github: null,
    live: "https://loki-page.netlify.app/",
  },
  {
    title: "LP Positivus (Em desenvolvimento) ",
    description:
      "Landing Page para uma agência de marketing digital que ajuda empresas a crescer e ter sucesso online.",
    tech: ["Bootstrap", "Javascript", "HTML", "CSS "],
    image: "https://eduardorojas.com.br/imagens/positivus.webp",
    github: "https://github.com/edurojastech/LandingPage_Positivus",
    live: "https://site-positivus.netlify.app/",
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
                    <span
                      key={t}
                      className="text-xs font-mono-code px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} /> Código
                      </a>
                    </Button>
                  )}
                  <Button size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
