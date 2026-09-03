import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  ROUTES,
  NOT_FOUND_SEO,
  SITE_URL,
  canonicalUrl,
  getRouteSeo,
} from "@/lib/seo";

const sitemap = readFileSync(resolve(__dirname, "../../public/sitemap.xml"), "utf8");
const robots = readFileSync(resolve(__dirname, "../../public/robots.txt"), "utf8");

describe("configuração de SEO", () => {
  it("toda rota indexável está no sitemap", () => {
    for (const route of ROUTES) {
      expect(sitemap, `${route.path} ausente do sitemap.xml`).toContain(
        `<loc>${canonicalUrl(route)}</loc>`,
      );
    }
  });

  it("o sitemap não lista URLs além das rotas conhecidas", () => {
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const known = ROUTES.map(canonicalUrl);
    expect(locs.sort()).toEqual(known.sort());
  });

  it("robots.txt aponta para o sitemap no domínio canônico", () => {
    expect(robots).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
  });

  it("as canônicas são absolutas e usam o domínio canônico", () => {
    for (const route of ROUTES) {
      const url = canonicalUrl(route);
      expect(url.startsWith(`${SITE_URL}/`)).toBe(true);
      // sem barra final, exceto na raiz — evita duplicata /projetos vs /projetos/
      if (route.path !== "/") expect(url.endsWith("/")).toBe(false);
    }
  });

  it("títulos e descriptions cabem no que o Google exibe", () => {
    for (const route of ROUTES) {
      expect(route.title.length, `title de ${route.path}`).toBeLessThanOrEqual(60);
      expect(route.title.length, `title de ${route.path}`).toBeGreaterThan(20);
      expect(route.description.length, `description de ${route.path}`).toBeLessThanOrEqual(160);
      expect(route.description.length, `description de ${route.path}`).toBeGreaterThan(70);
    }
  });

  it("títulos e descriptions são únicos por rota", () => {
    const titles = ROUTES.map((r) => r.title);
    const descriptions = ROUTES.map((r) => r.description);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it("não há espaço sobrando nem erro de digitação conhecido", () => {
    for (const route of ROUTES) {
      expect(route.title).toBe(route.title.trim());
      expect(route.description).toBe(route.description.trim());
      expect(route.description.toLowerCase()).not.toContain("autências");
    }
  });

  it("o 404 é noindex e fica fora do sitemap", () => {
    expect(NOT_FOUND_SEO.noindex).toBe(true);
    expect(sitemap).not.toContain("/404");
  });

  it("rotas desconhecidas resolvem para o SEO de 404", () => {
    expect(getRouteSeo("/nao-existe")).toBe(NOT_FOUND_SEO);
    expect(getRouteSeo("/projetos")).toMatchObject({ path: "/projetos" });
    // barra final não deve virar uma rota diferente
    expect(getRouteSeo("/projetos/")).toMatchObject({ path: "/projetos" });
  });
});
