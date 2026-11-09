import { describe, expect, it } from "vitest";
import { filterPublications, hasPlayableVideo, compatibleEmbedUrl, socialClients, socialPublications, SOCIAL_WHATSAPP } from "@/data/social-media";

describe("Social Media portfolio rules", () => {
  it("preserves the four Instagram brands and two TikTok profiles supplied by Eduardo", () => {
    expect(socialClients.filter((c) => c.platform === "Instagram").map((c) => c.username)).toEqual(["@eduardorojastech", "@asfpremoldados", "@sitesveloz", "@udiprompts"]);
    expect(socialClients.filter((c) => c.platform === "TikTok").map((c) => c.username)).toEqual(["@duduprompts", "@eduardorojastech"]);
  });
  it("filters by category and client without leaking other clients' publications", () => {
    const result = filterPublications(socialPublications, "Carrosséis", "asf");
    expect(result.map((p) => p.id)).toEqual(["asf-1", "asf-3", "asf-5"]);
    expect(filterPublications(socialPublications, "Todos", "asf")).toHaveLength(6);
  });
  it("never invents Stories when original Stories are unavailable", () => {
    expect(filterPublications(socialPublications, "Stories")).toEqual([]);
  });
  it("does not present a thumbnail alone as a playable video", () => {
    const reel = socialPublications.find((item) => item.id === "asf-2");
    expect(reel).toBeDefined();
    if (!reel) return;
    expect(hasPlayableVideo(reel)).toBe(false);
    expect(hasPlayableVideo({ ...reel, embedUrl: "https://example.com/fake-video" })).toBe(false);
    expect(hasPlayableVideo({ ...reel, videoUrl: "/real-video.mp4" })).toBe(true);
  });
  it("supports actual TikTok player URLs but rejects profile pages as embeds", () => {
    expect(compatibleEmbedUrl("https://www.tiktok.com/player/v1/7703995702212365576")).toBe("https://www.tiktok.com/player/v1/7703995702212365576");
    expect(compatibleEmbedUrl("https://www.tiktok.com/@duduprompts")).toBeUndefined();
    expect(compatibleEmbedUrl("javascript:alert(1)")).toBeUndefined();
  });
  it("uses the existing WhatsApp contact", () => {
    expect(SOCIAL_WHATSAPP).toBe("https://api.whatsapp.com/send?phone=5534991157227");
  });
  it("all gallery entries have original publication links and a known client", () => {
    expect(socialPublications).toHaveLength(30);
    for (const entry of socialPublications) {
      expect(socialClients.some((client) => client.id === entry.clientId && client.platform === entry.platform)).toBe(true);
      expect(entry.originalUrl).toMatch(/^https:\/\/www\.(instagram|tiktok)\.com\//);
      expect(entry.thumbnail).toContain("/__l5e/assets-v1/");
    }
  });
});