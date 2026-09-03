import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppShell from "./AppShell";
import "./index.css";

/**
 * Entrada de SSR usada apenas em tempo de build por scripts/prerender.mjs.
 * Não faz parte do bundle do navegador.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
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
