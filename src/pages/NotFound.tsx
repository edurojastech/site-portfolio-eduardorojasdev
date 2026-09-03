import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * O status HTTP 404 vem do Netlify (public/_redirects -> /404.html),
 * não deste componente. Aqui fica apenas a apresentação.
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <span className="font-mono-code text-primary text-sm">// 404</span>
        <h1 className="mb-4 mt-2 text-4xl md:text-5xl font-bold">
          Página não <span className="text-gradient">encontrada</span>
        </h1>
        <p className="mb-8 text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Button asChild>
            <Link to="/">Voltar ao início</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/projetos">Ver projetos</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
