import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    { icon: Code2, title: "Código Limpo", desc: "Escrevo código escalável, semântico e bem estruturado seguindo as melhores práticas." },
    { icon: Palette, title: "Design Moderno", desc: "Interfaces atraentes e intuitivas com foco em UX e identidade visual consistente." },
    { icon: Zap, title: "Performance", desc: "Aplicações rápidas e otimizadas, com foco em Core Web Vitals e acessibilidade." },
  ];

  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono-code text-primary text-sm">// sobre mim</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Quem sou <span className="text-gradient">eu</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-center max-w-3xl mx-auto text-lg mb-8 leading-relaxed"
        >
          Desenvolvedor Frontend com <span className="text-primary font-semibold">mais de 6 anos</span> de
          experiência criando aplicações web escaláveis, responsivas e orientadas a performance.
          Especialista no ecossistema frontend com <span className="text-primary font-semibold">Vue/Nuxt</span> e{" "}
          <span className="text-primary font-semibold">React/Next</span>, com vivência em plataformas
          SaaS, White Label, Bets, dashboards administrativos e sistemas de alta demanda.
          Também utilizo ferramentas de <span className="text-primary font-semibold">IA</span> como{" "}
          <span className="text-primary font-semibold">Lovable</span>,{" "}
          <span className="text-primary font-semibold">ChatGPT</span>,{" "}
          <span className="text-primary font-semibold">Claude</span>,{" "}
          <span className="text-primary font-semibold">GitHub Copilot</span> e{" "}
          <span className="text-primary font-semibold">Cursor</span> para acelerar o desenvolvimento,
          prototipar rapidamente e entregar soluções com mais qualidade e agilidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {[
            "+6 anos de experiência",
            "SaaS · White Label · Bets",
            "Vue/Nuxt & React/Next",
            "REST · GraphQL · KYC",
            "Mobile First · Performance",
          ].map((h) => (
            <span
              key={h}
              className="font-mono-code text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {h}
            </span>
          ))}
        </motion.div>


        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:glow-primary"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
