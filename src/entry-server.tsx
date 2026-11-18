import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppShell from "./AppShell";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import SocialMedia from "./pages/SocialMedia";
import NotFound from "./pages/NotFound";
import "./index.css";

/**
 * Entrada de SSR usada apenas em tempo de build por scripts/prerender.mjs.
 * Não faz parte do bundle do navegador.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell pages={{ Projects, CV, SocialMedia, NotFound }} />
    </StaticRouter>,
  );
}

// Reexportado para que o script de prerender leia a mesma configuração
// de SEO que a aplicação usa em runtime.
export {
  ROUTES,
  NOT_FOUND_SEO,
  canonicalUrl,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  LOCALE,
} from "./lib/seo";
