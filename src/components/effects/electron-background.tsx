"use client";

import { useEffect, useRef } from "react";

const CONFIG = {
  particles: { desktop: 70, tablet: 45, mobile: 25 },
  particle: {
    minRadius: 1.5,
    maxRadius: 3,
    colors: ["#dc2626", "#ffffff", "#ef4444", "#e0e0e0"],
  },
  links: {
    distance: 180,
    colorRed: "rgba(220, 38, 38,",
    colorWhite: "rgba(255, 255, 255,",
    alphaMultiplier: 0.25,
    lineWidth: 0.8,
  },
  mouse: {
    radius: 140,
    force: 0.35,
    repulsionDistance: 30,
    repulsionDisplacement: 20,
  },
  physics: { initialVelocity: 0.8, damping: 0.985 },
  resizeDebounce: 200,
} as const;

function getParticleCount(): number {
  if (typeof window === "undefined") return CONFIG.particles.desktop;
  if (window.innerWidth < 640) return CONFIG.particles.mobile;
  if (window.innerWidth < 1024) return CONFIG.particles.tablet;
  return CONFIG.particles.desktop;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colorIndex: number;
}

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * CONFIG.physics.initialVelocity,
    vy: (Math.random() - 0.5) * CONFIG.physics.initialVelocity,
    radius:
      CONFIG.particle.minRadius +
      Math.random() * (CONFIG.particle.maxRadius - CONFIG.particle.minRadius),
    colorIndex: Math.floor(Math.random() * CONFIG.particle.colors.length),
  };
}

export default function ElectronBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });
  const sizeRef = useRef({ w: 0, h: 0 });
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = motionQuery.matches;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function initParticles(w: number, h: number, count: number) {
      particlesRef.current = Array.from({ length: count }, () =>
        createParticle(w, h),
      );
    }

    function resize() {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      sizeRef.current = { w, h };
      initParticles(w, h, getParticleCount());
    }

    function animate() {
      if (reducedMotionRef.current || !canvas || !ctx) return;

      const { w, h } = sizeRef.current;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseRadius = CONFIG.mouse.radius;

          if (dist < mouseRadius && dist > 0) {
            const force =
              ((mouseRadius - dist) / mouseRadius) * CONFIG.mouse.force;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;

            if (dist < CONFIG.mouse.repulsionDistance) {
              p.x += (dx / dist) * CONFIG.mouse.repulsionDisplacement;
              p.y += (dy / dist) * CONFIG.mouse.repulsionDisplacement;
            }
          }
        }

        p.vx *= CONFIG.physics.damping;
        p.vy *= CONFIG.physics.damping;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      const linkDist = CONFIG.links.distance;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * CONFIG.links.alphaMultiplier;
            const useRed =
              p1.colorIndex === 0 ||
              p1.colorIndex === 2 ||
              p2.colorIndex === 0 ||
              p2.colorIndex === 2;
            ctx.strokeStyle = useRed
              ? `${CONFIG.links.colorRed} ${alpha})`
              : `${CONFIG.links.colorWhite} ${alpha})`;
            ctx.lineWidth = CONFIG.links.lineWidth;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.fillStyle = CONFIG.particle.colors[p.colorIndex];
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }

    const handleMotionChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
      if (e.matches) {
        if (animFrameRef.current) {
          cancelAnimationFrame(animFrameRef.current);
          animFrameRef.current = 0;
        }
        if (ctx && canvas) ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        resize();
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    motionQuery.addEventListener("change", handleMotionChange);

    if (!reducedMotionRef.current) {
      resize();
      animFrameRef.current = requestAnimationFrame(animate);
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!reducedMotionRef.current) resize();
      }, CONFIG.resizeDebounce);
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handlePointerLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      clearTimeout(resizeTimer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
