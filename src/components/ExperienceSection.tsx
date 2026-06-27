import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Goritek",
    role: "Desenvolvedor Frontend",
    period: "07/2025 – 05/2026",
    stack: ["Vue.js", "Nuxt.js", "TypeScript", "Sass", "Tailwind"],
    bullets: [
      "Plataformas Bets escaláveis com Vue.js e Nuxt.js.",
      "Integrações KYC para validação de documentos/CPF e fluxos de saque e depósito.",
      "BackOffice administrativo e componentes reutilizáveis com padronização visual.",
    ],
  },
  {
    company: "WiseByte",
    role: "Programador Frontend Pleno",
    period: "01/2024 – 01/2025",
    stack: ["React.js", "GraphQL", "MUI", "CSS Grid"],
    bullets: [
      "Dashboards administrativos e sistemas de análise de dados.",
      "Componentes reutilizáveis em React e integração eficiente com APIs GraphQL.",
      "Personalização de interfaces com MUI garantindo fidelidade ao design.",
    ],
  },
  {
    company: "Woli",
    role: "Desenvolvedor Frontend Pleno",
    period: "01/2024 – 04/2024",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind"],
    bullets: [
      "Plataforma White Label multi-tenant atendendo múltiplos clientes a partir de uma base.",
      "Arquitetura para personalização de layouts, temas e funcionalidades por cliente.",
      "Integrações REST e interfaces responsivas com Tailwind CSS.",
    ],
  },
  {
    company: "TeclaT",
    role: "Programador Frontend Pleno",
    period: "08/2023 – 01/2024",
    stack: ["React.js", "Next.js", "TypeScript"],
    bullets: [
      "Sistema PDV completo para gestão de pedidos, estoque e colaboradores.",
      "Integrações com iFood e emissão de notas fiscais.",
      "Dashboards de métricas e otimização de performance das aplicações.",
    ],
  },
  {
    company: "START by WGSN",
    role: "Product Developer",
    period: "07/2022 – 02/2023",
    stack: ["JavaScript ES6+", "Web Components", "Styled Components", "JSX"],
    bullets: [
      "Sustentação e evolução de plataforma SaaS voltada ao mercado da moda.",
      "Web Components nativos, POO e componentes reutilizáveis com Styled Components.",
      "Integrações com APIs REST em ambiente ágil (Kanban).",
    ],
  },
  {
    company: "Nagro Crédito Agro",
    role: "Engenheiro de Software Jr.",
    period: "09/2021 – 07/2022",
    stack: ["Vue.js", "Nuxt.js", "Vuetify", "Node.js"],
    bullets: [
      "WebApp de onboarding de clientes em Vue/Nuxt/Vuetify.",
      "Landing Pages otimizadas em parceria com Marketing focando em conversão.",
      "Serviços Node.js para geração automatizada de aditivos contratuais em PDF.",
    ],
  },
  {
    company: "PrismaFS",
    role: "Desenvolvedor Web Freelancer",
    period: "05/2019 – 07/2021",
    stack: ["Bootstrap", "jQuery", "SCORM", "Mobile First"],
    bullets: [
      "Interfaces para soluções de treinamentos corporativos no formato EAD.",
      "Integrações SCORM com plataformas LMS.",
      "Layouts responsivos com foco em Mobile First.",
    ],
  },
];

const highlights = [
  "+6 anos de experiência",
  "SaaS · White Label · Bets",
  "Vue/Nuxt & React/Next",
  "REST · GraphQL · KYC · SCORM",
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono-code text-primary text-sm">// trajetória</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Experiência <span className="text-gradient">profissional</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Mais de 6 anos construindo plataformas SaaS, White Label, Bets, dashboards
            e sistemas para empresas de diferentes segmentos.
          </p>
        </motion.div>

        {/* Highlight badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {highlights.map((h) => (
            <span
              key={h}
              className="font-mono-code text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {h}
            </span>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                    isLeft ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--background)),0_0_20px_hsl(var(--primary)/0.6)] md:-translate-x-1/2" />

                  <div
                    className={`ml-12 md:ml-0 ${
                      isLeft ? "md:pr-10 md:text-right" : "md:pl-10"
                    }`}
                  >
                    <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-500">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <Briefcase size={14} className="text-primary" />
                        <span className="font-mono-code text-xs text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-primary text-sm mb-3">{exp.company}</p>
                      <ul
                        className={`text-sm text-muted-foreground space-y-1.5 leading-relaxed ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        {exp.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <div
                        className={`flex flex-wrap gap-1.5 mt-4 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        {exp.stack.map((s) => (
                          <span
                            key={s}
                            className="text-[11px] font-mono-code px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
