import media0 from "@/assets/social-media/eduardo-1.webp.asset.json";
import media1 from "@/assets/social-media/eduardo-2.webp.asset.json";
import media2 from "@/assets/social-media/eduardo-3.webp.asset.json";
import media3 from "@/assets/social-media/eduardo-4.webp.asset.json";
import media4 from "@/assets/social-media/eduardo-5.webp.asset.json";
import media5 from "@/assets/social-media/eduardo-6.webp.asset.json";
import media6 from "@/assets/social-media/asf-1.webp.asset.json";
import media7 from "@/assets/social-media/asf-2.webp.asset.json";
import media8 from "@/assets/social-media/asf-3.webp.asset.json";
import media9 from "@/assets/social-media/asf-4.webp.asset.json";
import media10 from "@/assets/social-media/asf-5.webp.asset.json";
import media11 from "@/assets/social-media/asf-6.webp.asset.json";
import media12 from "@/assets/social-media/sitesveloz-1.webp.asset.json";
import media13 from "@/assets/social-media/sitesveloz-2.webp.asset.json";
import media14 from "@/assets/social-media/sitesveloz-3.webp.asset.json";
import media15 from "@/assets/social-media/sitesveloz-4.webp.asset.json";
import media16 from "@/assets/social-media/sitesveloz-5.webp.asset.json";
import media17 from "@/assets/social-media/sitesveloz-6.webp.asset.json";
import media18 from "@/assets/social-media/udi-1.webp.asset.json";
import media19 from "@/assets/social-media/udi-2.webp.asset.json";
import media20 from "@/assets/social-media/udi-3.webp.asset.json";
import media21 from "@/assets/social-media/udi-4.webp.asset.json";
import media22 from "@/assets/social-media/udi-5.webp.asset.json";
import media23 from "@/assets/social-media/udi-6.webp.asset.json";
import media24 from "@/assets/social-media/dudu-1.webp.asset.json";
import media25 from "@/assets/social-media/dudu-2.webp.asset.json";
import media26 from "@/assets/social-media/dudu-3.webp.asset.json";
import media27 from "@/assets/social-media/edu-tiktok-1.webp.asset.json";
import media28 from "@/assets/social-media/edu-tiktok-2.webp.asset.json";
import media29 from "@/assets/social-media/edu-tiktok-3.webp.asset.json";
import avatar from "@/assets/eduardo-avatar.webp";

export const SOCIAL_WHATSAPP = "https://api.whatsapp.com/send?phone=5534991157227";

export const socialCategories = ["Todos", "Posts", "Carrosséis", "Stories", "Reels"] as const;
export type SocialCategory = (typeof socialCategories)[number];
export type Platform = "Instagram" | "TikTok";

export interface SocialClient {
  id: string;
  name: string;
  username: string;
  platform: Platform;
  profileUrl: string;
  segment: string;
  description: string;
  formats: string[];
  initials: string;
  profileImage?: string;
}

export interface SocialPublication {
  id: string;
  clientId: string;
  platform: Platform;
  category: Exclude<SocialCategory, "Todos">;
  thumbnail: string;
  description?: string;
  videoUrl?: string;
  embedUrl?: string;
  originalUrl?: string;
  aspect?: "portrait" | "square";
  ai?: boolean;
}

export const socialClients: SocialClient[] = [
  {
    id: "eduardo-instagram", name: "Eduardo Rojas Tech", username: "@eduardorojastech",
    platform: "Instagram", profileUrl: "https://www.instagram.com/eduardorojastech/",
    segment: "Tecnologia e serviços digitais", initials: "ER", profileImage: avatar,
    description: "Conteúdos educativos sobre programação, desenvolvimento web e inteligência artificial, junto à divulgação de serviços digitais.",
    formats: ["Posts", "Carrosséis", "Stories", "Conteúdo educativo"],
  },
  {
    id: "asf", name: "ASF Premoldados", username: "@asfpremoldados",
    platform: "Instagram", profileUrl: "https://www.instagram.com/asfpremoldados/",
    segment: "Indústria e construção civil", initials: "ASF",
    description: "Comunicação comercial e institucional para apresentar produtos, soluções em pré-moldados e artes promocionais para o mercado industrial.",
    formats: ["Posts comerciais", "Artes promocionais", "Stories", "Conteúdo institucional"],
  },
  {
    id: "sitesveloz", name: "SitesVeloz", username: "@sitesveloz",
    platform: "Instagram", profileUrl: "https://www.instagram.com/sitesveloz/",
    segment: "Sites, landing pages e sistemas", initials: "SV",
    description: "Conteúdos sobre presença digital, carrosséis educativos e criativos comerciais para divulgar serviços e captar novos clientes.",
    formats: ["Posts", "Carrosséis", "Stories", "Criativos comerciais"],
  },
  {
    id: "udiprompts", name: "UdiPrompts", username: "@udiprompts",
    platform: "Instagram", profileUrl: "https://www.instagram.com/udiprompts/",
    segment: "Criação de imagens com IA", initials: "UP",
    description: "Demonstrações de imagens geradas por IA, conteúdos educativos e criativos promocionais para apresentar o produto e suas possibilidades criativas.",
    formats: ["Imagens com IA", "Carrosséis", "Posts", "Criativos promocionais"],
  },
  {
    id: "dudu-tiktok", name: "DuduPrompts", username: "@duduprompts",
    platform: "TikTok", profileUrl: "https://www.tiktok.com/@duduprompts",
    segment: "Inteligência artificial e criatividade", initials: "DP",
    description: "Geração de imagens e vídeos com IA, explorando personagens, ideias visuais e novas possibilidades de criação em vídeos curtos.",
    formats: ["TikToks", "Imagens com IA", "Vídeos com IA"],
  },
  {
    id: "eduardo-tiktok", name: "Eduardo Rojas Tech", username: "@eduardorojastech",
    platform: "TikTok", profileUrl: "https://www.tiktok.com/@eduardorojastech",
    segment: "Tecnologia e ferramentas digitais", initials: "ER", profileImage: avatar,
    description: "Vídeos curtos sobre desenvolvimento web, ferramentas digitais e inteligência artificial, conectando tecnologia e criação de conteúdo.",
    formats: ["TikToks", "Tecnologia", "Inteligência artificial"],
  },
];

// Add verified original image/video assets here, never mock portfolio publications.
// thumbnail is required; videoUrl is a playable file and embedUrl a supported player URL.
export const socialPublications: SocialPublication[] = [
{
  "id": "eduardo-1",
  "clientId": "eduardo-instagram",
  "platform": "Instagram",
  "category": "Carrosséis",
  "description": "Como montar um segundo cérebro para usar IA no dia a dia",
  "originalUrl": "https://www.instagram.com/eduardorojastech/p/DfVVmmcFo0t/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media0.url
},
{
  "id": "eduardo-2",
  "clientId": "eduardo-instagram",
  "platform": "Instagram",
  "category": "Posts",
  "description": "Meu ChatGPT depois de trabalhar comigo",
  "originalUrl": "https://www.instagram.com/eduardorojastech/p/DfWNCmLvEzr/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media1.url
},
{
  "id": "eduardo-3",
  "clientId": "eduardo-instagram",
  "platform": "Instagram",
  "category": "Posts",
  "description": "Só muda de vida quem muda de ambiente",
  "originalUrl": "https://www.instagram.com/eduardorojastech/p/DfCb0BEPJbC/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media2.url
},
{
  "id": "eduardo-4",
  "clientId": "eduardo-instagram",
  "platform": "Instagram",
  "category": "Carrosséis",
  "description": "Apelidos para usar com seus colegas devs",
  "originalUrl": "https://www.instagram.com/eduardorojastech/p/DfNPDfcFg-q/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media3.url
},
{
  "id": "eduardo-5",
  "clientId": "eduardo-instagram",
  "platform": "Instagram",
  "category": "Posts",
  "description": "As 10 tecnologias web mais usadas pelos devs",
  "originalUrl": "https://www.instagram.com/eduardorojastech/p/DfPyvJfPGm1/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media4.url
},
{
  "id": "eduardo-6",
  "clientId": "eduardo-instagram",
  "platform": "Instagram",
  "category": "Reels",
  "description": "Isso não é um chatbot: é um agente de IA",
  "originalUrl": "https://www.instagram.com/eduardorojastech/reel/DfHoSfjP6s3/",
  "aspect": "portrait",
  "ai": false,
  "thumbnail": media5.url
},
{
  "id": "asf-1",
  "clientId": "asf",
  "platform": "Instagram",
  "category": "Carrosséis",
  "description": "5 vantagens dos pré-moldados",
  "originalUrl": "https://www.instagram.com/asfpremoldados/p/DZUrFQMjT9Y/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media6.url
},
{
  "id": "asf-2",
  "clientId": "asf",
  "platform": "Instagram",
  "category": "Reels",
  "description": "Personagem 3D apresentando soluções da ASF",
  "originalUrl": "https://www.instagram.com/asfpremoldados/reel/DfaHnL5CQ1w/",
  "aspect": "portrait",
  "ai": true,
  "thumbnail": media7.url
},
{
  "id": "asf-3",
  "clientId": "asf",
  "platform": "Instagram",
  "category": "Carrosséis",
  "description": "Seu projeto está pronto para sair do papel?",
  "originalUrl": "https://www.instagram.com/asfpremoldados/p/DfSb-dlFMI-/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media8.url
},
{
  "id": "asf-4",
  "clientId": "asf",
  "platform": "Instagram",
  "category": "Reels",
  "description": "Obras em pré-moldados",
  "originalUrl": "https://www.instagram.com/asfpremoldados/reel/DfAQP5qiYVZ/",
  "aspect": "portrait",
  "ai": false,
  "thumbnail": media9.url
},
{
  "id": "asf-5",
  "clientId": "asf",
  "platform": "Instagram",
  "category": "Carrosséis",
  "description": "Acessibilidade também é construção",
  "originalUrl": "https://www.instagram.com/asfpremoldados/p/DfIGMyilCeG/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media10.url
},
{
  "id": "asf-6",
  "clientId": "asf",
  "platform": "Instagram",
  "category": "Reels",
  "description": "Soluções em pré-moldados para sua obra",
  "originalUrl": "https://www.instagram.com/asfpremoldados/reel/De2EVCmCKpk/",
  "aspect": "portrait",
  "ai": false,
  "thumbnail": media11.url
},
{
  "id": "sitesveloz-1",
  "clientId": "sitesveloz",
  "platform": "Instagram",
  "category": "Posts",
  "description": "O que você agregou ao seu negócio?",
  "originalUrl": "https://www.instagram.com/sitesveloz/p/DeQfg_usxlt/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media12.url
},
{
  "id": "sitesveloz-2",
  "clientId": "sitesveloz",
  "platform": "Instagram",
  "category": "Posts",
  "description": "Site profissional gera confiança",
  "originalUrl": "https://www.instagram.com/sitesveloz/p/DeHlM7sPZ01/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media13.url
},
{
  "id": "sitesveloz-3",
  "clientId": "sitesveloz",
  "platform": "Instagram",
  "category": "Posts",
  "description": "Link na bio que vira cliente",
  "originalUrl": "https://www.instagram.com/sitesveloz/p/DeKJUO1Pn3B/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media14.url
},
{
  "id": "sitesveloz-4",
  "clientId": "sitesveloz",
  "platform": "Instagram",
  "category": "Reels",
  "description": "Criação digital e desenvolvimento web",
  "originalUrl": "https://www.instagram.com/sitesveloz/reel/DdxNfBevieB/",
  "aspect": "portrait",
  "ai": false,
  "thumbnail": media15.url
},
{
  "id": "sitesveloz-5",
  "clientId": "sitesveloz",
  "platform": "Instagram",
  "category": "Posts",
  "description": "Landing page que converte",
  "originalUrl": "https://www.instagram.com/sitesveloz/p/Dd6hpHkuVcT/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media16.url
},
{
  "id": "sitesveloz-6",
  "clientId": "sitesveloz",
  "platform": "Instagram",
  "category": "Posts",
  "description": "Site lento afasta cliente",
  "originalUrl": "https://www.instagram.com/sitesveloz/p/Dd0AEhcsq9K/",
  "aspect": "square",
  "ai": false,
  "thumbnail": media17.url
},
{
  "id": "udi-1",
  "clientId": "udiprompts",
  "platform": "Instagram",
  "category": "Reels",
  "description": "Book de fotos com IA",
  "originalUrl": "https://www.instagram.com/udiprompts/reel/DffBit-hVhC/",
  "aspect": "portrait",
  "ai": true,
  "thumbnail": media18.url
},
{
  "id": "udi-2",
  "clientId": "udiprompts",
  "platform": "Instagram",
  "category": "Carrosséis",
  "description": "Redline Stare: prompt para criar imagens",
  "originalUrl": "https://www.instagram.com/udiprompts/p/DfRvlWdFdvW/",
  "aspect": "square",
  "ai": true,
  "thumbnail": media19.url
},
{
  "id": "udi-3",
  "clientId": "udiprompts",
  "platform": "Instagram",
  "category": "Reels",
  "description": "Cena criativa com inteligência artificial",
  "originalUrl": "https://www.instagram.com/udiprompts/reel/DfXNN7GBbEN/",
  "aspect": "portrait",
  "ai": true,
  "thumbnail": media20.url
},
{
  "id": "udi-4",
  "clientId": "udiprompts",
  "platform": "Instagram",
  "category": "Carrosséis",
  "description": "Prompts inspirados em personagens",
  "originalUrl": "https://www.instagram.com/udiprompts/p/DfKe6N0FSyl/",
  "aspect": "square",
  "ai": true,
  "thumbnail": media21.url
},
{
  "id": "udi-5",
  "clientId": "udiprompts",
  "platform": "Instagram",
  "category": "Carrosséis",
  "description": "Criação de imagens com prompts",
  "originalUrl": "https://www.instagram.com/udiprompts/p/DfC-X5aFfqS/",
  "aspect": "square",
  "ai": true,
  "thumbnail": media22.url
},
{
  "id": "udi-6",
  "clientId": "udiprompts",
  "platform": "Instagram",
  "category": "Carrosséis",
  "description": "Prompts Halloween",
  "originalUrl": "https://www.instagram.com/udiprompts/p/De4PnmqFVPK/",
  "aspect": "square",
  "ai": true,
  "thumbnail": media23.url
},
{
  "id": "dudu-1",
  "clientId": "dudu-tiktok",
  "platform": "TikTok",
  "category": "Reels",
  "description": "Book de fotos com seus ídolos favoritos",
  "originalUrl": "https://www.tiktok.com/@duduprompts/video/7705820201949957397",
  "aspect": "portrait",
  "ai": true,
  "embedUrl": "https://www.tiktok.com/player/v1/7705820201949957397",
  "thumbnail": media24.url
},
{
  "id": "dudu-2",
  "clientId": "dudu-tiktok",
  "platform": "TikTok",
  "category": "Reels",
  "description": "Personagens em movimento com IA",
  "originalUrl": "https://www.tiktok.com/@duduprompts/video/7703995702212365576",
  "aspect": "portrait",
  "ai": true,
  "embedUrl": "https://www.tiktok.com/player/v1/7703995702212365576",
  "thumbnail": media25.url
},
{
  "id": "dudu-3",
  "clientId": "dudu-tiktok",
  "platform": "TikTok",
  "category": "Reels",
  "description": "Imagens criadas com a biblioteca UdiPrompts",
  "originalUrl": "https://www.tiktok.com/@duduprompts/video/7701889907660295444",
  "aspect": "portrait",
  "ai": true,
  "embedUrl": "https://www.tiktok.com/player/v1/7701889907660295444",
  "thumbnail": media26.url
},
{
  "id": "edu-tiktok-1",
  "clientId": "eduardo-tiktok",
  "platform": "TikTok",
  "category": "Reels",
  "description": "Não sabe? Aprenda, corra atrás e resolva",
  "originalUrl": "https://www.tiktok.com/@eduardorojastech/video/7704312708476292370",
  "aspect": "portrait",
  "ai": false,
  "embedUrl": "https://www.tiktok.com/player/v1/7704312708476292370",
  "thumbnail": media27.url
},
{
  "id": "edu-tiktok-2",
  "clientId": "eduardo-tiktok",
  "platform": "TikTok",
  "category": "Reels",
  "description": "O que é uma Skill na IA?",
  "originalUrl": "https://www.tiktok.com/@eduardorojastech/video/7703946778097274130",
  "aspect": "portrait",
  "ai": false,
  "embedUrl": "https://www.tiktok.com/player/v1/7703946778097274130",
  "thumbnail": media28.url
},
{
  "id": "edu-tiktok-3",
  "clientId": "eduardo-tiktok",
  "platform": "TikTok",
  "category": "Reels",
  "description": "Como a IA funciona de verdade?",
  "originalUrl": "https://www.tiktok.com/@eduardorojastech/video/7702917536114953490",
  "aspect": "portrait",
  "ai": false,
  "embedUrl": "https://www.tiktok.com/player/v1/7702917536114953490",
  "thumbnail": media29.url
}
];

export function filterPublications(items: SocialPublication[], category: SocialCategory, clientId?: string) {
  return items.filter((item) => (!clientId || item.clientId === clientId) && (category === "Todos" || item.category === category));
}

export function compatibleEmbedUrl(url?: string): string | undefined {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return undefined;
    if (parsed.hostname === "www.tiktok.com" && /^\/player\/v1\/\d+\/?$/.test(parsed.pathname)) return parsed.href;
    if (["www.youtube.com", "www.youtube-nocookie.com"].includes(parsed.hostname) && /^\/embed\/[\w-]+$/.test(parsed.pathname)) return parsed.href;
    if (parsed.hostname === "player.vimeo.com" && /^\/video\/\d+$/.test(parsed.pathname)) return parsed.href;
  } catch {
    return undefined;
  }
  return undefined;
}

export function hasPlayableVideo(item: SocialPublication) {
  return Boolean(item.videoUrl || compatibleEmbedUrl(item.embedUrl));
}