import { motion, useInView } from "framer-motion";
import piniLogo from "../assets/pinia.svg";
import claudeAsset from "@/assets/claude-ia.webp";
import chatgptAsset from "@/assets/chatgpt-logo.webp";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const skills = [
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "jQuery",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Material-UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Nuxt.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Vite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  { name: "Pinia", logo: piniLogo },
  {
    name: "Sass",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    name: "Lovable AI",
    logo: "https://lovable.dev/favicon.ico",
  },
  {
    name: "ChatGPT",
    logo: chatgptAsset,
  },
  {
    name: "GitHub Copilot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Claude AI",
    logo: claudeAsset,
  },
  {
    name: "Cursor",
    logo: "https://www.cursor.com/favicon.ico",
  },
];

type Skill = (typeof skills)[number];

const SkillLogo = ({
  skill,
  index,
  isVisible,
}: {
  skill: Skill;
  index: number;
  isVisible: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.8 }}
    animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 0.4, delay: 0.1 + index * 0.04 }}
    whileHover={{ scale: 1.12, y: -8 }}
    className="flex min-h-[118px] flex-col items-center justify-start gap-3 group cursor-default md:min-h-[132px]"
  >
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center p-3 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300 [.light_&]:border-white/35 [.light_&]:bg-white/10 [.light_&]:group-hover:border-white/80 [.light_&]:group-hover:shadow-[0_0_20px_rgb(255_255_255/0.24)]">
      <img
        src={skill.logo}
        alt={skill.name}
        className="w-full h-full object-contain drop-shadow-lg transition duration-300 [.light_&]:brightness-0 [.light_&]:invert"
        loading="lazy"
      />
    </div>
    <span className="w-full text-center text-xs md:text-sm font-mono-code text-muted-foreground group-hover:text-primary transition-colors duration-300 [.light_&]:text-white [.light_&]:group-hover:text-white">
      {skill.name}
    </span>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="pt-32 pb-14 md:pb-20 px-6 relative z-10 transition-colors duration-300 [.light_&]:bg-[#23A083] [.light_&]:text-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono-code text-primary text-sm [.light_&]:text-white">
            // habilidades
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Tech <span className="text-gradient [.light_&]:bg-none [.light_&]:text-white">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-4 lg:hidden">
          {skills.map((skill, i) => (
            <SkillLogo
              key={skill.name}
              skill={skill}
              index={i}
              isVisible={inView}
            />
          ))}
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="hidden max-w-5xl mx-auto px-12 lg:block"
          aria-label="Carrossel de tecnologias"
        >
          <CarouselContent className="-ml-6 py-4">
            {skills.map((skill, i) => (
              <CarouselItem
                key={skill.name}
                className="pl-6 lg:basis-1/6"
              >
                <SkillLogo skill={skill} index={i} isVisible={inView} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 border-primary/30 bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground [.light_&]:border-white/35 [.light_&]:bg-white/10 [.light_&]:text-white [.light_&]:hover:bg-white [.light_&]:hover:text-[#23A083]" />
          <CarouselNext className="right-0 border-primary/30 bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground [.light_&]:border-white/35 [.light_&]:bg-white/10 [.light_&]:text-white [.light_&]:hover:bg-white [.light_&]:hover:text-[#23A083]" />
        </Carousel>
      </div>
    </section>
  );
};

export default SkillsSection;
