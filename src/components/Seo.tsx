import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, getRouteSeo, OG_IMAGE } from "@/lib/seo";

/**
 * Mantém as tags de <head> em sincronia durante a navegação client-side.
 *
 * O HTML entregue já vem com as tags corretas por rota (scripts/prerender.mjs),
 * então isto existe apenas para o caso de o usuário navegar entre rotas sem
 * recarregar a página — rastreadores leem a versão estática.
 */

const setMeta = (
  selector: string,
  attr: "name" | "property",
  key: string,
  content: string,
) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getRouteSeo(pathname);
    const url = canonicalUrl(seo);

    document.title = seo.title;

    setMeta('meta[name="description"]', "name", "description", seo.description);
    setMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      seo.description,
    );
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta(
      'meta[property="og:type"]',
      "property",
      "og:type",
      seo.ogType ?? "website",
    );
    setMeta('meta[property="og:image"]', "property", "og:image", OG_IMAGE);
    setMeta(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      seo.title,
    );
    setMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      seo.description,
    );

    // canonical autorreferente
    let link = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    // robots — só presente quando a rota não deve ser indexada
    const robots = document.head.querySelector('meta[name="robots"]');
    if (seo.noindex) {
      setMeta('meta[name="robots"]', "name", "robots", "noindex, follow");
    } else if (robots) {
      robots.remove();
    }
  }, [pathname]);

  return null;
};

export default Seo;
