// The portfolio is also deployed outside Lovable (Netlify). Its static host and
// local Vite cannot serve /__l5e; use the verified project asset origin there.
const SOCIAL_ASSET_ORIGIN = "https://id-preview--45ee9bf9-ab3d-4867-a5d0-ad2cc7d1315f.lovable.app";

export function socialAssetUrl(url: string): string {
  return url.startsWith("/__l5e/assets-v1/") ? `${SOCIAL_ASSET_ORIGIN}${url}` : url;
}