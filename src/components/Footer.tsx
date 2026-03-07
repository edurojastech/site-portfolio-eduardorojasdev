const Footer = () => (
  <footer className="relative z-10 border-t border-border py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-mono-code text-primary text-sm font-bold">{"<ER />"}</span>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Eduardo Rojas. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
