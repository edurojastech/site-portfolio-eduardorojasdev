import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Caminho relativo — acompanha o domínio em que o site estiver publicado. */
const CV_URL = "/Curriculo_Eduardo_Rojas.pdf";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "Node.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];

const CV = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-5xl mx-auto px-6 py-10">
      <Button variant="ghost" size="sm" asChild className="mb-8">
        <Link to="/">
          <ArrowLeft size={16} /> Voltar
        </Link>
      </Button>

      {/* Conteúdo em HTML para que a página tenha texto rastreável —
          o PDF sozinho não é lido como conteúdo da página. */}
      <header className="mb-8">
        <span className="font-mono-code text-primary text-sm block">
          // currículo
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Eduardo <span className="text-gradient">Rojas</span>
        </h1>
        <p className="text-xl text-muted-foreground mt-3">
          Desenvolvedor Frontend · Uberlândia, MG
        </p>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Mais de 6 anos de experiência no desenvolvimento de aplicações, sites,
          landing pages e soluções web, com foco em performance, acessibilidade,
          SEO e integração com APIs.
        </p>

        <ul className="flex flex-wrap gap-2 mt-6" aria-label="Tecnologias">
          {skills.map((s) => (
            <li
              key={s}
              className="text-xs font-mono-code px-2.5 py-1 rounded-full bg-primary/10 text-primary"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Button asChild>
            <a href={CV_URL} download>
              <Download size={16} /> Baixar currículo em PDF
            </a>
          </Button>
        </div>
      </header>

      <object
        data={CV_URL}
        type="application/pdf"
        className="w-full h-[80vh] rounded-lg border border-border"
        aria-label="Currículo de Eduardo Rojas em PDF"
      >
        <iframe
          src={CV_URL}
          title="Currículo de Eduardo Rojas"
          className="w-full h-[80vh] rounded-lg border border-border"
        />
      </object>
    </div>
  </div>
);

export default CV;
