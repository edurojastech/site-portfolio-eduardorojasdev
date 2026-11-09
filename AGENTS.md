# Architecture
- Register indexable pages in AppShell and the shared SEO route registry, and include their canonical URLs in the sitemap; the existing prerender script generates static HTML for direct navigation and crawler-visible metadata.
- Use the shared Navbar on the Social Media page, with route-aware home-section links, to preserve navigation back to homepage sections.
- Keep Social Media clients and verified publications in a typed static data module and render them through the reusable MediaGallery; this supports new original materials without a backend and avoids fictitious playback.