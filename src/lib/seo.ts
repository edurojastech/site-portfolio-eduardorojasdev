/**
 * Fonte única de verdade para metadados de SEO por rota.
 *
 * Consumido em dois lugares:
 *   - scripts/prerender.mjs  -> injeta as tags no HTML estático em tempo de build
 *   - src/components/Seo.tsx -> sincroniza as tags na navegação client-side
 *
 * Se uma rota nova for adicionada em AppRoutes.tsx, adicione-a aqui também
 * e inclua a URL em public/sitemap.xml.
 */

export const SITE_URL = "https://dev.eduardorojas.com.br";
export const SITE_NAME = "Eduardo Rojas";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const LOCALE = "pt_BR";

export interface RouteSeo {
  path: string;
  title: string;
  description: string;
  /** Caminho canônico. Padrão: o próprio `path`. */
  canonical?: string;
  /** og:type — "website" para páginas comuns, "profile" para a home. */
  ogType?: string;
  /** Impede indexação (usado no 404). */
  noindex?: boolean;
}

export const ROUTES: RouteSeo[] = [
  {
    path: "/",
    title: "Eduardo Rojas | Desenvolvedor Frontend React & Next.js",
    description:
      "Desenvolvedor frontend com mais de 6 anos criando sites, landing pages e aplicações web em React, Next.js e Vue. Atendimento em Uberlândia e todo o Brasil.",
    ogType: "profile",
  },
  {
    path: "/projetos",
    title: "Projetos | Eduardo Rojas — Desenvolvedor Frontend",
    description:
      "Portfólio de projetos frontend: dashboards, plataformas, landing pages e sites institucionais desenvolvidos em React, Next.js, Vue e TypeScript.",
  },
  {
    path: "/cv",
    title: "Currículo | Eduardo Rojas — Desenvolvedor Frontend",
    description:
      "Currículo de Eduardo Rojas, desenvolvedor frontend com mais de 6 anos de experiência em React, Next.js, Vue, TypeScript, Node.js e Tailwind CSS.",
  },
];

/** Metadados do 404 — nunca indexado, nunca no sitemap. */
export const NOT_FOUND_SEO: RouteSeo = {
  path: "/404",
  title: "Página não encontrada | Eduardo Rojas",
  description: "A página que você procura não existe ou foi movida.",
  noindex: true,
};

export const getRouteSeo = (pathname: string): RouteSeo => {
  const normalized =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") || "/" : pathname;
  return ROUTES.find((r) => r.path === normalized) ?? NOT_FOUND_SEO;
};

/** URL canônica absoluta de uma rota, sem barra final (exceto a raiz). */
export const canonicalUrl = (route: RouteSeo): string => {
  const p = route.canonical ?? route.path;
  return p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`;
};
