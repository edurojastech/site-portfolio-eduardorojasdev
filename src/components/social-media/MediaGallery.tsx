import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, ImageIcon, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { compatibleEmbedUrl, hasPlayableVideo, socialClients, type SocialPublication } from "@/data/social-media";

interface MediaGalleryProps {
  items: SocialPublication[];
  vertical?: boolean;
  emptyLabel?: string;
}

export default function MediaGallery({ items, vertical = false, emptyLabel = "Publicações em breve" }: MediaGalleryProps) {
  const [selectedId, setSelectedId] = useState<string>();
  const selectedIndex = items.findIndex((item) => item.id === selectedId);
  const selected = items[selectedIndex];
  const client = socialClients.find((entry) => entry.id === selected?.clientId);
  const embedUrl = compatibleEmbedUrl(selected?.embedUrl);

  const move = (direction: number) => {
    if (!items.length) return;
    setSelectedId(items[(selectedIndex + direction + items.length) % items.length]?.id);
  };

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement && ["VIDEO", "IFRAME", "INPUT"].includes(event.target.tagName)) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const direction = event.key === "ArrowLeft" ? -1 : 1;
      setSelectedId(items[(selectedIndex + direction + items.length) % items.length]?.id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, selectedIndex, items]);

  if (!items.length) {
    return (
      <div className="border-y border-border py-10 flex items-center justify-center gap-4 text-muted-foreground">
        <ImageIcon size={24} className="shrink-0 text-primary/60" aria-hidden="true" />
        <div>
          <p className="text-sm font-medium text-foreground">{emptyLabel}</p>
          <p className="text-xs mt-1">Seleção de materiais originais em preparação.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`grid gap-4 ${items.length === 1 ? "grid-cols-1" : vertical ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
        {items.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={`group relative block h-auto w-full overflow-hidden rounded-lg border border-border p-0 ${vertical || item.aspect === "portrait" ? "aspect-[9/16]" : "aspect-square"}`}
            aria-label={`Ampliar ${item.category}: ${item.description || socialClients.find((entry) => entry.id === item.clientId)?.name || "publicação"}`}
            onClick={() => setSelectedId(item.id)}
          >
            <img src={item.thumbnail} alt={item.description || `${item.category} — ${item.clientId}`} loading="lazy" decoding="async" className="w-full h-full object-contain bg-muted transition-transform duration-500 motion-safe:group-hover:scale-105" />
            {hasPlayableVideo(item) && <span className="absolute inset-0 flex items-center justify-center"><span className="bg-background/90 rounded-full p-4 text-primary"><Play size={22} aria-hidden="true" /></span></span>}
            <span className="absolute bottom-3 left-3 rounded-md bg-background/90 px-3 py-1 text-xs text-foreground">{item.platform === "TikTok" ? "TikTok" : item.category === "Reels" && !hasPlayableVideo(item) ? "Capa de Reel" : item.category}</span>
          </Button>
        ))}
      </div>
      <Dialog open={Boolean(selected)} onOpenChange={(open) => { if (!open) setSelectedId(undefined); }}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-4xl max-h-[92svh] overflow-y-auto p-5 sm:p-6">
          {selected && (
            <>
              <div className="pr-7">
                <DialogTitle>{client?.name || "Publicação"} · {selected.category}</DialogTitle>
                <DialogDescription className="mt-2">{selected.description || `${selected.platform} · ${client?.username || "Material original"}`}</DialogDescription>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden flex justify-center">
                {selected.videoUrl ? (
                  <video key={selected.id} src={selected.videoUrl} poster={selected.thumbnail} controls playsInline preload="metadata" aria-label={selected.description || `Vídeo de ${client?.name}`} className="w-full max-h-[62svh] object-contain" />
                ) : embedUrl ? (
                  <iframe key={selected.id} src={embedUrl} title={selected.description || `Vídeo de ${client?.name}`} allow="fullscreen; encrypted-media" allowFullScreen className="w-full h-[60svh] border-0" />
                ) : (
                  <img src={selected.thumbnail} alt={selected.description || `${selected.category} de ${client?.name}`} className="w-full max-h-[62svh] object-contain" />
                )}
              </div>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" aria-label="Publicação anterior" disabled={items.length < 2} onClick={() => move(-1)}><ArrowLeft /></Button>
                  <span className="text-sm text-muted-foreground" aria-live="polite">{selectedIndex + 1} / {items.length}</span>
                  <Button variant="outline" size="icon" aria-label="Próxima publicação" disabled={items.length < 2} onClick={() => move(1)}><ArrowRight /></Button>
                </div>
                {selected.originalUrl && <Button variant="ghost" asChild><a href={selected.originalUrl} target="_blank" rel="noopener noreferrer">Ver original <ExternalLink /></a></Button>}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}