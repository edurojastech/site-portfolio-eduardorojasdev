import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, type ComponentType } from "react";
import Index from "./pages/Index";
import { ThemeProvider } from "@/hooks/use-theme";
import ClientOnly from "@/components/ClientOnly";
import Seo from "@/components/Seo";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const defaultPages = {
  Projects: lazy(() => import("./pages/Projects")),
  CV: lazy(() => import("./pages/CV")),
  SocialMedia: lazy(() => import("./pages/SocialMedia")),
  NotFound: lazy(() => import("./pages/NotFound")),
};

export type RoutePages = Record<keyof typeof defaultPages, ComponentType>;

/**
 * Árvore da aplicação sem o Router.
 *
 * Fica separada de App.tsx para que o mesmo conteúdo possa ser renderizado
 * com BrowserRouter no navegador (App.tsx) e com StaticRouter no build de
 * prerender (entry-server.tsx).
 */
const AppShell = ({ pages = defaultPages }: { pages?: RoutePages }) => (
  <ThemeProvider>
    <TooltipProvider>
      {/* Toasters dependem do DOM — ficam fora do HTML pré-renderizado. */}
      <ClientOnly>
        <Toaster />
        <Sonner />
      </ClientOnly>
      <Seo />
      <Suspense fallback={<div className="min-h-screen bg-background" role="status" aria-label="Carregando página" />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projetos" element={<pages.Projects />} />
        <Route path="/cv" element={<pages.CV />} />
        <Route path="/social-media" element={<pages.SocialMedia />} />
        {/* ADICIONE ROTAS CUSTOMIZADAS ACIMA DA ROTA CATCH-ALL "*"
            e registre-as também em src/lib/seo.ts e public/sitemap.xml */}
        <Route path="*" element={<pages.NotFound />} />
      </Routes>
      </Suspense>
      <FloatingWhatsApp />
    </TooltipProvider>
  </ThemeProvider>
);

export default AppShell;
