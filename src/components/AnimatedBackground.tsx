import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let lastFrame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--canvas-accent").trim();
    let particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(80, Math.max(24, Math.round(canvas.width * canvas.height / 24000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (now: number) => {
      if (document.hidden) return;
      if (!reducedMotion.matches) animationId = requestAnimationFrame(draw);
      if (now - lastFrame < 1000 / 30) return;
      lastFrame = now;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = `rgba(${accent}, 0.04)`;
      ctx.lineWidth = 1;
      const gridSize = 60;
      const offsetY = (Date.now() * 0.01) % gridSize;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = -gridSize + offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Draw and connect particles
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent}, ${p.opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared < 22500) {
            const dist = Math.sqrt(distanceSquared);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${accent}, ${0.08 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        }
      });

    };
    const resume = () => {
      cancelAnimationFrame(animationId);
      lastFrame = 0;
      if (!document.hidden) animationId = requestAnimationFrame(draw);
    };
    // Keep decorative work out of the critical first paint.
    const startTimer = window.setTimeout(resume, 1200);
    document.addEventListener("visibilitychange", resume);
    reducedMotion.addEventListener("change", resume);

    return () => {
      cancelAnimationFrame(animationId);
      window.clearTimeout(startTimer);
      document.removeEventListener("visibilitychange", resume);
      reducedMotion.removeEventListener("change", resume);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default AnimatedBackground;
