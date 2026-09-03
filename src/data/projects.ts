import plataformaCursos from "@/assets/plataforma-cursos.webp";
import fitmakerImg from "@/assets/projects/fitmaker.webp";
import acelcImg from "@/assets/projects/acelc.webp";
import lokiImg from "@/assets/projects/loki.webp";
import moviesImg from "@/assets/projects/movieswefit.webp";
import solidaAcrediImg from "@/assets/projects/solida-acredi.webp";
import studioImg from "@/assets/projects/studio.webp";
import sitesvelozImg from "@/assets/projects/sitesveloz.webp";
import jazzImg from "@/assets/projects/jazz.webp";

/**
 * Fonte única dos projetos, usada pela página /projetos e pela seção de
 * destaques da home. `featured` controla o que aparece na home.
 */
export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string | null;
  live: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Solid Acredi",
    description:
      "Projeto em andamento: repaginação do site institucional, criação de página para captura de leads e construção de CRM interno para gestão de clientes e oportunidades.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "UX/UI", "SEO", "GEO"],
    image: solidaAcrediImg,
    github: null,
    live: "https://solidacredi.com.br/",
    featured: true,
  },
  {
    title: "Corretora Acelc",
    description:
      "Projeto de destaque: site institucional da Corretora Acelc com identidade visual renovada, layout moderno e totalmente responsivo, otimizado para SEO e conversão de contatos.",
    tech: ["HTML", "CSS", "JavaScript", "SEO"],
    image: acelcImg,
    github: null,
    live: "https://acelc.netlify.app/",
    featured: true,
  },
  {
    title: "Plataforma Fitness Elite",
    description:
      "Projeto de destaque: plataforma Fitness Elite (FitMaker) focada em treinos personalizados e experiência fitness premium, com interface moderna, responsiva e alta performance. Desenvolvida com Vue.js e Tailwind CSS.",
    tech: ["Vue.js", "Tailwind CSS", "Performance", "UX"],
    image: fitmakerImg,
    github: null,
    live: "https://lp-fitmaker.netlify.app/",
    featured: true,
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

export const featuredProjects = projects.filter((p) => p.featured);
