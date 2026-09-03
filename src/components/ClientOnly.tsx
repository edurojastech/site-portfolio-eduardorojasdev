import { ReactNode, useEffect, useState } from "react";

/**
 * Renderiza os filhos apenas depois da montagem no navegador.
 *
 * Necessário para widgets que dependem de APIs do browser (toasters, portais).
 * No servidor e na primeira renderização do cliente devolve null, então a
 * hidratação bate exatamente com o HTML pré-renderizado.
 */
const ClientOnly = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
};

export default ClientOnly;
