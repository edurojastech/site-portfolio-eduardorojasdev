import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppShell from "@/AppShell";
import { getRouteSeo } from "@/lib/seo";

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <AppShell />
    </MemoryRouter>,
  );

describe("renderização das rotas", () => {
  it("a home monta e o H1 traz nome e função", () => {
    renderAt("/");
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent("Eduardo");
    expect(h1).toHaveTextContent("Rojas");
    // o H1 precisa carregar a função, não só o nome
    expect(h1).toHaveTextContent("Desenvolvedor Frontend");
  });

  it("a home exibe projetos reais, não os placeholders do template", () => {
    renderAt("/");
    expect(screen.getByText("Corretora Acelc")).toBeInTheDocument();
    // os projetos fictícios do boilerplate não podem voltar
    expect(screen.queryByText("E-Commerce Dashboard")).not.toBeInTheDocument();
    expect(screen.queryByText("Social Media App")).not.toBeInTheDocument();
  });

  it("a home linka para as rotas internas no rodapé", () => {
    renderAt("/");
    const links = screen.getAllByRole("link");
    const hrefs = links.map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/projetos");
    expect(hrefs).toContain("/cv");
  });

  it("/projetos monta com o H1 próprio", () => {
    renderAt("/projetos");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Projetos");
  });

  it("/cv tem texto rastreável além do PDF", () => {
    renderAt("/cv");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Eduardo");
    expect(screen.getByText(/Desenvolvedor Frontend/i)).toBeInTheDocument();
  });

  it("rota inexistente renderiza o 404", () => {
    renderAt("/rota-que-nao-existe");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /não encontrada/i,
    );
  });
});

describe("tags de head em runtime", () => {
  it("aplica o título da rota atual", () => {
    renderAt("/projetos");
    expect(document.title).toBe(getRouteSeo("/projetos").title);
  });

  it("aplica canonical autorreferente e não a home", () => {
    renderAt("/projetos");
    const canonical = document.head
      .querySelector('link[rel="canonical"]')
      ?.getAttribute("href");
    expect(canonical).toBe("https://dev.eduardorojas.com.br/projetos");
  });

  it("marca o 404 como noindex", () => {
    renderAt("/rota-que-nao-existe");
    const robots = document.head
      .querySelector('meta[name="robots"]')
      ?.getAttribute("content");
    expect(robots).toContain("noindex");
  });
});

describe("acessibilidade dos controles", () => {
  // Lighthouse ("Buttons/Links must have discernible text") reprovava o botão
  // do menu mobile e a seta do hero: ambos só continham ícone. Agentes de IA e
  // leitores de tela dependem desse nome para navegar.
  //
  // Usa o mesmo algoritmo de nome acessível que o Lighthouse: um link que
  // envolve <img alt="..."> É nomeado pelo alt — não basta olhar textContent.
  it.each(["/", "/projetos", "/cv"])(
    "todo botão e link tem nome acessível em %s",
    (path) => {
      renderAt(path);
      const controles = [
        ...screen.queryAllByRole("button"),
        ...screen.queryAllByRole("link"),
      ];
      expect(controles.length).toBeGreaterThan(0);
      for (const el of controles) {
        // toHaveAccessibleName usa o mesmo algoritmo do Lighthouse
        expect(el, el.outerHTML.slice(0, 120)).toHaveAccessibleName();
      }
    },
  );
});
