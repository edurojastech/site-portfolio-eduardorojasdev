/**
 * Prerender em tempo de build.
 *
 * Roda depois de `vite build` (cliente) e `vite build --ssr` (servidor):
 *   1. lê dist/index.html como template
 *   2. renderiza cada rota com renderToString
 *   3. injeta o HTML no #root e substitui o bloco <!--seo--> pelas tags da rota
 *   4. grava dist/<rota>/index.html
 *
 * Resultado: cada rota é entregue como HTML estático real, com título,
 * description e canonical próprios — sem depender de execução de JavaScript.
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const templatePath = join(distDir, "index.html");
if (!existsSync(templatePath)) {
  console.error("[prerender] dist/index.html não encontrado — rode `vite build` antes.");
  process.exit(1);
}

const ssrEntry = join(ssrDir, "entry-server.js");
if (!existsSync(ssrEntry)) {
  console.error("[prerender] dist-ssr/entry-server.js não encontrado — rode o build de SSR antes.");
  process.exit(1);
}

const template = readFileSync(templatePath, "utf8");
const mod = await import(pathToFileURL(ssrEntry).href);
const { render, ROUTES, NOT_FOUND_SEO, canonicalUrl, OG_IMAGE, SITE_NAME, LOCALE } = mod;

const escape = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Monta o bloco de <head> de uma rota. */
const headFor = (route) => {
  const url = canonicalUrl(route);
  const title = escape(route.title);
  const desc = escape(route.description);
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${desc}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${desc}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="${route.ogType ?? "website"}" />`,
    `<meta property="og:site_name" content="${escape(SITE_NAME)}" />`,
    `<meta property="og:locale" content="${LOCALE}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Eduardo Rojas — Desenvolvedor Frontend" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${desc}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ];
  if (route.noindex) tags.push(`<meta name="robots" content="noindex, follow" />`);
  return tags.map((t) => `    ${t}`).join("\n");
};

const SEO_BLOCK = /<!--seo-->[\s\S]*?<!--\/seo-->/;
const ROOT_DIV = '<div id="root"></div>';

/**
 * framer-motion renderiza os estados iniciais (`initial`) como opacity:0 inline.
 * No HTML estático isso deixaria o conteúdo invisível para quem não executa JS,
 * então promovemos o estado inicial para visível. Ao hidratar, o React assume o
 * controle e as animações rodam normalmente.
 */
const revealInitialStyles = (html) =>
  html
    .replace(/opacity:\s*0(?=[;"])/g, "opacity:1")
    .replace(/transform:\s*translate[^;"]*(?=[;"])/g, "transform:none");

const outFor = (routePath) =>
  routePath === "/" ? join(distDir, "index.html") : join(distDir, routePath, "index.html");

const targets = [...ROUTES, { ...NOT_FOUND_SEO, path: "/404", outFile: join(distDir, "404.html") }];

let failures = 0;
for (const route of targets) {
  const renderUrl = route.noindex ? "/__not_found__" : route.path;
  let body;
  try {
    body = render(renderUrl);
  } catch (err) {
    failures += 1;
    console.error(`[prerender] FALHOU ${route.path}: ${err.message}`);
    continue;
  }

  const html = template
    .replace(SEO_BLOCK, `<!--seo-->\n${headFor(route)}\n    <!--/seo-->`)
    .replace(ROOT_DIV, `<div id="root">${revealInitialStyles(body)}</div>`);

  const outFile = route.outFile ?? outFor(route.path);
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html, "utf8");

  const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
  console.log(`[prerender] ${String(route.path).padEnd(12)} -> ${outFile.replace(root, ".")} (${kb} KB)`);
}

// O bundle de SSR não é servido — existe só para este passo.
rmSync(ssrDir, { recursive: true, force: true });

if (failures > 0) {
  console.error(`[prerender] ${failures} rota(s) falharam.`);
  process.exit(1);
}
console.log(`[prerender] ${targets.length} páginas geradas.`);
