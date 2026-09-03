import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const internalLinks = [
  { label: "Início", to: "/" },
  { label: "Projetos", to: "/projetos" },
  { label: "Currículo", to: "/cv" },
];

const social = [
  { icon: Github, href: "https://github.com/edurojastech", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/eduardorojastech",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:edurojas.developer@gmail.com", label: "E-mail" },
];

const Footer = () => (
  <footer className="relative z-10 border-t border-border py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono-code text-primary text-sm font-bold">
            {"<ER />"}
          </span>
          <p className="text-sm text-muted-foreground max-w-xs">
            Desenvolvedor frontend em Uberlândia — sites, landing pages e
            aplicações web.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {internalLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          {social.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground border-t border-border pt-6">
        © {new Date().getFullYear()} Eduardo Rojas. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
