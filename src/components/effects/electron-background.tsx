"use client";

import { useEffect, useRef } from "react";

// ── Centralized configuration ──────────────────────────────────────────────
// All tuning parameters in one place. Adjust values here to change the
// visual behaviour globally without touching logic code.

const CONFIG = {
  // Particle counts per breakpoint (increased ~75% desktop, ~60% tablet/mobile)
  particles: { desktop: 120, tablet: 70, mobile: 40 },

  // Electron radius range — ~20% larger than the previous 1.5-3px
  particle: {
    minRadius: 2,
    maxRadius: 4,
    colors: ["#dc2626", "#ffffff", "#ef4444", "#e0e0e0"],
    // Depth simulation — smaller radius range for "far" particles
    depthFactor: 0.7,
    // Per-particle velocity multiplier range for organic variation
    speedRange: [0.6, 1.0],
  },

  // Connection (link) settings — wider range, higher visibility
  links: {
    distance: 200, // was 180 — more connections form naturally
    maxOpacity: 0.35, // was 0.25 — slightly more visible
    lineWidth: 0.8,
    colorRed: "rgba(220, 38, 38,",
    colorWhite: "rgba(255, 255, 255,",
    // Mouse proximity boost factor — connections strengthen near cursor
    proximityBoost: 0.15,
    proximityRadius: 250,
  },

  // Mouse / pointer interaction
  mouse: {
    influenceRadius: 200, // was 140 — subtler zone that covers more area
    attractionForce: 0.15, // gentle pull toward cursor
    repulsionForce: 0.12, // gentle push when very close
    repulsionThreshold: 60, // distance at which repulsion kicks in (was 30)
    // Strengthen connections near the pointer without moving particles much
    connectionBoostRadius: 300,
  },

  // Physics
  physics: {
    initialVelocity: 0.8,
    damping: 0.987, // was 0.985 — slightly more "floaty" feel
    // Organic drift — each particle gets a tiny sinusoidal offset over time
    driftAmplitude: 0.15,
    driftSpeed: 0.001,
  },

  resizeDebounce: 200,
} as const;

// ── Resolution helpers ──────────────────────────────────────────────────────

const SM_BREAKPOINT = 640;
const LG_BREAKPOINT = 1024;

function getParticleCount(): number {
  if (typeof window === "undefined") return CONFIG.particles.desktop;
  if (window.innerWidth < SM_BREAKPOINT) return CONFIG.particles.mobile;
  if (window.innerWidth < LG_BREAKPOINT) return CONFIG.particles.tablet;
  return CONFIG.particles.desktop;
}

function isLowPowerDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  // Heuristic: devices with ≤4 logical cores or ≤4 GB RAM benefit from fewer particles
  const cores = navigator.hardwareConcurrency ?? 4;
  // @ts-expect-error deviceMemory is not in all TS lib types yet
  const mem = navigator.deviceMemory ?? 4;
  return cores <= 2 || (mem > 0 && mem <= 2);
}

// ── Particle type ───────────────────────────────────────────────────────────

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number; // original radius before depth scaling
  colorIndex: number;
  speedMultiplier: number; // per-particle organic speed variation
  depthLayer: number; // 0 (far) – 1 (near) for parallax / size variation
  orbitPhase: number; // phase offset for sinusoidal drift
}

function createParticle(w: number, h: number): Particle {
  const baseRadius =
    CONFIG.particle.minRadius +
    Math.random() * (CONFIG.particle.maxRadius - CONFIG.particle.minRadius);
  const depthLayer = Math.random(); // 0 = far, 1 = near
  const depthScale =
    CONFIG.particle.depthFactor +
    depthLayer * (1 - CONFIG.particle.depthFactor);

  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * CONFIG.physics.initialVelocity,
    vy: (Math.random() - 0.5) * CONFIG.physics.initialVelocity,
    baseRadius,
    radius: baseRadius * depthScale,
    colorIndex: Math.floor(Math.random() * CONFIG.particle.colors.length),
    speedMultiplier:
      CONFIG.particle.speedRange[0] +
      Math.random() *
        (CONFIG.particle.speedRange[1] - CONFIG.particle.speedRange[0]),
    depthLayer,
    orbitPhase: Math.random() * Math.PI * 2,
  };
}

// ── Main component ──────────────────────────────────────────────────────────

export default function ElectronBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });
  const sizeRef = useRef({ w: 0, h: 0 });
  const reducedMotionRef = useRef(false);
  const timeRef = useRef(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = motionQuery.matches;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Low-power devices get a further reduction
    const lowPower = isLowPowerDevice();
    function getAdjustedCount(): number {
      const base = getParticleCount();
      if (lowPower) return Math.max(15, Math.floor(base * 0.4));
      return base;
    }

    // ── Initialisation ──────────────────────────────────────────────────

    let frameCount = 0;

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
      initParticles(w, h, getAdjustedCount());
    }

    // ── Animation loop ─────────────────────────────────────────────────

    function animate() {
      if (reducedMotionRef.current || !ctx) return;

      const { w, h } = sizeRef.current;
      if (w === 0 || h === 0) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      frameCount++;
      timeRef.current += CONFIG.physics.driftSpeed;

      ctx.clearRect(0, 0, w, h);

      // ── 1. Update particle positions ─────────────────────────────────
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic sinusoidal drift for depth perception
        const drift =
          CONFIG.physics.driftAmplitude *
          Math.sin(timeRef.current + p.orbitPhase);
        const depthSpeed = 0.5 + p.depthLayer * 0.5; // near particles move faster

        // Mouse interaction: gentle attraction + soft repulsion
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;
          const influenceR = CONFIG.mouse.influenceRadius;

          if (distSq < influenceR * influenceR && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const influence = (influenceR - dist) / influenceR; // 0-1

            // Attraction toward cursor (subtle)
            const attraction = influence * CONFIG.mouse.attractionForce;
            p.vx += (dx / dist) * attraction;
            p.vy += (dy / dist) * attraction;

            // Soft repulsion when very close
            if (dist < CONFIG.mouse.repulsionThreshold) {
              const repulsion =
                ((CONFIG.mouse.repulsionThreshold - dist) /
                  CONFIG.mouse.repulsionThreshold) *
                CONFIG.mouse.repulsionForce;
              p.vx -= (dx / dist) * repulsion;
              p.vy -= (dy / dist) * repulsion;
            }
          }
        }

        // Apply damping and per-particle speed multiplier
        p.vx *= CONFIG.physics.damping;
        p.vy *= CONFIG.physics.damping;

        p.x += p.vx * p.speedMultiplier * depthSpeed + drift * 0.3;
        p.y +=
          p.vy * p.speedMultiplier * depthSpeed +
          drift * Math.cos(timeRef.current * 0.7 + p.orbitPhase) * 0.3;

        // Wrap around edges seamlessly
        if (p.x < -p.radius) p.x = w + p.radius;
        if (p.x > w + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = h + p.radius;
        if (p.y > h + p.radius) p.y = -p.radius;
      }

      // ── 2. Draw connections ─────────────────────────────────────────
      const linkDistSq = CONFIG.links.distance * CONFIG.links.distance;
      const mouseBoostR = CONFIG.links.proximityRadius;
      const mouseBoostRSq = mouseBoostR * mouseBoostR;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < linkDistSq) {
            const dist = Math.sqrt(distSq);
            let alpha =
              (1 - dist / CONFIG.links.distance) * CONFIG.links.maxOpacity;

            // Depth-weighted: connections between near-particles are stronger
            const avgDepth = (p1.depthLayer + p2.depthLayer) / 2;
            alpha *= 0.6 + avgDepth * 0.4;

            // Mouse proximity boost — connections near cursor strengthen subtly
            if (mouse.active) {
              const midX = (p1.x + p2.x) / 2;
              const midY = (p1.y + p2.y) / 2;
              const mdx = mouse.x - midX;
              const mdy = mouse.y - midY;
              if (mdx * mdx + mdy * mdy < mouseBoostRSq) {
                const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
                alpha +=
                  (1 - mDist / mouseBoostR) * CONFIG.links.proximityBoost;
              }
            }

            // Clamp alpha
            if (alpha > CONFIG.links.maxOpacity + CONFIG.links.proximityBoost) {
              alpha = CONFIG.links.maxOpacity + CONFIG.links.proximityBoost;
            }
            if (alpha <= 0) continue;

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

      // ── 3. Draw particles ────────────────────────────────────────────
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.fillStyle = CONFIG.particle.colors[p.colorIndex];
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }

    // ── Event handlers ────────────────────────────────────────────────

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
      mouseRef.current.active = true;
    };
    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    // Throttle pointer moves via passive listener
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
