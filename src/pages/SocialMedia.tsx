import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Instagram, Film, Sparkles, Palette, Check, MessageCircle } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import MediaGallery from "@/components/social-media/MediaGallery";
import { socialClients, socialPublications, socialCategories, filterPublications, SOCIAL_WHATSAPP, type SocialCategory, type SocialClient } from "@/data/social-media";
import avatar from "@/assets/eduardo-avatar.webp";

const process = [
  ["Planejamento", "Entendimento da marca, público, posicionamento e objetivos."],
  ["Estratégia de conteúdo", "Definição dos temas, formatos e comunicação visual."],
  ["Criação", "Desenvolvimento de artes, carrosséis, textos e criativos."],
  ["Produção audiovisual", "Criação de Stories, Reels, TikToks e vídeos com IA."],
  ["Publicação e continuidade", "Organização dos conteúdos e manutenção da presença digital da marca."],
];
const services = ["Gestão de redes sociais", "Criação de conteúdo para Instagram", "Criação de conteúdo para TikTok", "Design de posts", "Desenvolvimento de carrosséis", "Criação de Stories", "Produção de Reels", "Produção de vídeos publicitários com IA", "Criativos para campanhas", "Planejamento de conteúdo", "Conteúdo institucional e comercial", "Criação de identidade visual para redes sociais"];
const formats = [
  { icon: Palette, title: "Design e conteúdo visual", items: ["Posts individuais", "Carrosséis", "Artes promocionais", "Conteúdos educativos", "Criativos publicitários"], mediaId: "sitesveloz-2" },
  { icon: Film, title: "Conteúdo audiovisual", items: ["Stories", "Reels", "TikToks", "Vídeos institucionais", "Vídeos publicitários"], mediaId: "edu-tiktok-2" },
  { icon: Sparkles, title: "Inteligência Artificial", items: ["Imagens geradas por IA", "Personagens 3D", "Vídeos animados", "Criativos com IA", "Demonstrações de produtos"], mediaId: "asf-2" },
];

function ClientIdentity({ client }: { client: SocialClient }) {
  return (
    <div className="flex items-center gap-4 min-w-0">
      {client.profileImage ? <img src={client.profileImage} alt={client.name} loading="lazy" className="w-14 h-14 rounded-full object-cover shrink-0 ring-1 ring-border" /> : <span className="w-14 h-14 shrink-0 rounded-full border border-border flex items-center justify-center font-bold text-primary bg-secondary" aria-hidden="true">{client.initials}</span>}
      <div className="min-w-0"><h3 className="text-xl sm:text-2xl font-semibold">{client.name}</h3><p className="text-sm text-primary break-words">{client.username}</p></div>
    </div>
  );
}

const SocialMedia = () => {
  const reducedMotion = useReducedMotion();
  const [category, setCategory] = useState<SocialCategory>("Todos");
  const instagram = socialClients.filter((client) => client.platform === "Instagram");
  const tiktok = socialClients.filter((client) => client.platform === "TikTok");
  const aiMedia = socialPublications.filter((item) => item.ai && item.category === "Reels");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <header className="max-w-6xl mx-auto px-6 pt-32 lg:pt-36 pb-12">
          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-7"><img src={avatar} alt="Eduardo Rojas" width={44} height={44} className="w-11 h-11 rounded-full object-cover ring-1 ring-primary/40" /><p className="text-sm font-medium">Eduardo Rojas Tech <span className="text-muted-foreground block">Conteúdo · Design · Audiovisual</span></p></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">Social <span className="text-primary">Media</span></h1>
            <p className="text-xl sm:text-2xl mt-4 font-medium">Marcas reais. Conteúdo com identidade.</p>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-2xl">Criação de conteúdo para Instagram e TikTok, peças visuais e produção audiovisual com inteligência artificial. Do planejamento à presença digital da sua marca.</p>
            <div className="flex flex-wrap gap-3 mt-7"><Button asChild><a href="#marcas"><ArrowDown /> Explorar trabalhos</a></Button><Button variant="outline" asChild><a href={SOCIAL_WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle /> Solicitar orçamento</a></Button></div>
          </motion.div>
          <nav aria-label="Seções de Social Media" className="flex flex-wrap gap-x-6 gap-y-3 mt-10 pt-6 border-t border-border text-sm text-muted-foreground">
            {[['#marcas','Instagram'],['#tiktok','TikTok'],['#inteligencia-artificial','Vídeos com IA'],['#servicos','Serviços']].map(([href,label]) => <a key={href} href={href} className="hover:text-primary transition-colors">{label}</a>)}
          </nav>
        </header>

        <section id="marcas" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24" aria-labelledby="brands-title">
          <span className="text-primary font-mono-code text-xs">01 / INSTAGRAM</span>
          <h2 id="brands-title" className="text-3xl sm:text-4xl font-bold mt-3 max-w-2xl">Marcas que fazem parte do meu trabalho</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">Diferentes segmentos, a mesma atenção à identidade de cada marca. Uma seleção de publicações e capas originais dos perfis que administro.</p>
          <ToggleGroup type="single" value={category} onValueChange={(value) => { if (socialCategories.includes(value as SocialCategory)) setCategory(value as SocialCategory); }} className="justify-start flex-wrap gap-2 mt-7 mb-12" aria-label="Filtrar publicações por formato">
            {socialCategories.map((item) => <ToggleGroupItem key={item} value={item} className="border border-border rounded-md px-4 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">{item}</ToggleGroupItem>)}
          </ToggleGroup>
          <div className="space-y-16">
            {instagram.map((client, index) => <article key={client.id} className="border-t border-border pt-8">
              <div className="flex flex-col sm:flex-row justify-between gap-5 items-start mb-5"><ClientIdentity client={client} /><Button variant="outline" asChild><a href={client.profileUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visitar Instagram de ${client.name}`}><Instagram /> Instagram <ArrowUpRight /></a></Button></div>
              <div className="grid md:grid-cols-[1fr_2fr] gap-4 mb-6"><p className="text-sm font-medium"><span className="text-primary font-mono-code mr-3">0{index + 1}</span>{client.segment}</p><p className="text-sm text-muted-foreground leading-relaxed">{client.description}</p></div>
              <div className="flex flex-wrap gap-2 mb-6">{client.formats.map((format) => <span key={format} className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-md">{format}</span>)}</div>
              <MediaGallery items={filterPublications(socialPublications, category, client.id)} emptyLabel={category === "Stories" ? "Stories originais ainda não disponíveis" : "Nenhuma publicação neste formato"} />
            </article>)}
          </div>
        </section>

        <section id="tiktok" className="border-y border-border bg-secondary/40 scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <span className="text-primary font-mono-code text-xs">02 / TIKTOK</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 max-w-2xl">Conteúdo que vai além do Instagram</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">Produção de vídeos curtos e conteúdos criativos para diferentes plataformas, conectando marcas, tecnologia e inteligência artificial.</p>
            <div className="mt-12 space-y-12">{tiktok.map((client) => <article key={client.id}>
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-5"><ClientIdentity client={client} /><Button variant="outline" asChild><a href={client.profileUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visitar TikTok de ${client.name}`}><Film /> TikTok <ArrowUpRight /></a></Button></div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">{client.description}</p>
              <MediaGallery items={socialPublications.filter((item) => item.clientId === client.id)} vertical />
            </article>)}</div>
          </div>
        </section>

        <section id="inteligencia-artificial" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
          <span className="text-primary font-mono-code text-xs">03 / PRODUÇÃO COM IA</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 max-w-3xl">Criatividade sem limites com <span className="text-primary">Inteligência Artificial</span></h2>
          <p className="text-muted-foreground mt-5 max-w-2xl leading-relaxed">Utilizo ferramentas de inteligência artificial para transformar ideias em conteúdos audiovisuais criativos, campanhas visuais e experiências que chamam a atenção nas redes sociais.</p>
          <div className="flex flex-wrap gap-3 mt-6 mb-8 text-xs text-muted-foreground">{["Personagens 3D", "Apresentação de produtos", "Animações publicitárias", "Stories e Reels", "Estética cinematográfica"].map((label) => <span key={label} className="border border-border px-3 py-2 rounded-md">{label}</span>)}</div>
          <MediaGallery items={aiMedia} vertical />
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-border" aria-labelledby="formats-title">
          <h2 id="formats-title" className="text-3xl font-bold">Formatos de conteúdo</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">{formats.map(({icon: Icon,title,items,mediaId}) => <article key={title}>
            <MediaGallery items={socialPublications.filter((item) => item.id === mediaId)} />
            <h3 className="text-lg font-semibold flex items-center gap-3 mt-5"><Icon size={20} className="text-primary shrink-0" />{title}</h3>
            <ul className="space-y-2 mt-4 text-sm text-muted-foreground">{items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>)}</div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border" aria-labelledby="process-title">
          <h2 id="process-title" className="text-3xl font-bold">Da ideia à publicação</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">{process.map(([title,description],index) => <li key={title} className="border-t border-primary/40 pt-5"><span className="font-mono-code text-2xl text-primary">0{index + 1}</span><h3 className="font-semibold mt-4">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed mt-3">{description}</p></li>)}</ol>
        </section>

        <section id="servicos" className="max-w-6xl mx-auto px-6 py-16 border-t border-border scroll-mt-24">
          <h2 className="text-3xl font-bold">Serviços para a sua presença digital</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 mt-9">{services.map((service) => <li key={service} className="flex gap-3 items-start text-sm"><Check className="text-primary shrink-0" size={18} />{service}</li>)}</ul>
        </section>

        <section className="border-t border-border bg-secondary/40">
          <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
            <Sparkles className="text-primary mb-6" size={30} aria-hidden="true" />
            <h2 className="text-3xl sm:text-4xl font-bold max-w-3xl leading-tight">Sua marca também merece uma presença digital profissional.</h2>
            <p className="text-muted-foreground mt-5 max-w-2xl leading-relaxed">Vamos transformar suas ideias em conteúdos que valorizam sua marca, fortalecem sua presença digital e aproximam você dos seus clientes.</p>
            <Button asChild size="lg" className="mt-8"><a href={SOCIAL_WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle /> Solicitar orçamento <ArrowUpRight /></a></Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default SocialMedia;