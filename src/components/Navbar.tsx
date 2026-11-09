import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoEdu from "@/assets/logoEdu.svg";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experience" },
  { label: "Projetos", href: "/projetos" },
  { label: "Social Media", href: "/social-media" },
  { label: "Contato", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const renderItem = (item: (typeof navItems)[number], mobile = false) => {
    const className = mobile
      ? "text-muted-foreground hover:text-primary transition-colors"
      : item.href === "#contact"
        ? "text-sm text-foreground border border-foreground/30 rounded-full px-4 py-1.5 hover:border-primary hover:text-primary transition-colors duration-200"
        : "text-sm text-muted-foreground hover:text-primary transition-colors duration-200";
    if (item.href.startsWith("/")) {
      return (
        <Link to={item.href} className={className} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>
          {item.label}
        </Link>
      );
    }
    return (
      <a href={pathname === "/" ? item.href : `/${item.href}`} className={className} onClick={() => setOpen(false)}>
        {item.label}
      </a>
    );
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href={pathname === "/" ? "#hero" : "/#hero"}>
          <img
            src={logoEdu}
            alt="Eduardo Rojas"
            className="h-8"
          />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>{renderItem(item)}</li>
            ))}
          </ul>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          id="menu-mobile"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <ul className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <li key={item.href}>
                {renderItem(item, true)}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
