import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/hooks/use-theme";
import ClientOnly from "@/components/ClientOnly";
import Seo from "@/components/Seo";

/**
 * Árvore da aplicação sem o Router.
 *
 * Fica separada de App.tsx para que o mesmo conteúdo possa ser renderizado
 * com BrowserRouter no navegador (App.tsx) e com StaticRouter no build de
 * prerender (entry-server.tsx).
 */
const AppShell = () => (
  <ThemeProvider>
    <TooltipProvider>
      {/* Toasters dependem do DOM — ficam fora do HTML pré-renderizado. */}
      <ClientOnly>
        <Toaster />
        <Sonner />
      </ClientOnly>
      <Seo />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        {/* ADICIONE ROTAS CUSTOMIZADAS ACIMA DA ROTA CATCH-ALL "*"
            e registre-as também em src/lib/seo.ts e public/sitemap.xml */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </ThemeProvider>
);

export default AppShell;
