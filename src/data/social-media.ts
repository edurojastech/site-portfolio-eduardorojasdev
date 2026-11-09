import avatar from "@/assets/eduardo-avatar.webp";

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
export const socialPublications: SocialPublication[] = [];

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