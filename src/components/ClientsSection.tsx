import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

import nagroLogo from "@/assets/clients/nagro.png";
import startWgsnLogo from "@/assets/clients/start-wgsn.png";
import teclatLogo from "@/assets/clients/teclat.webp";
import woliLogo from "@/assets/clients/woli.png";
import wisebyteLogo from "@/assets/clients/wisebyte.png";
import dulinoLogo from "@/assets/clients/dulino.png";
import gorillasLogo from "@/assets/clients/gorillas-group.png";

const clients = [
  { name: "Nagro", logo: nagroLogo },
  { name: "START by WGSN", logo: startWgsnLogo },
  { name: "TeclaT", logo: teclatLogo },
  { name: "Woli", logo: woliLogo },
  { name: "WiseByte", logo: wisebyteLogo },
  { name: "Dulino", logo: dulinoLogo },
  { name: "Gorillas Group", logo: gorillasLogo },
];

const ClientsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Empresas & <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Algumas das empresas e projetos onde já contribuí com meu trabalho.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto mb-12">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex items-center justify-center w-36 h-36 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                width={512}
                height={512}
                className="w-full h-full object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-3 text-muted-foreground"
        >
          <Briefcase className="w-5 h-5 text-primary" />
          <span className="text-sm">+ diversas StartUps e projetos Freelance</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
