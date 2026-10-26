"use client";

import { useEffect, useRef } from "react";

interface Particle {
  hx: number;
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  ph: number;
  r: number;
  ba: number;
  ts: number;
}

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  life: number;
}

export default function AntiGravityCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let ps: Particle[] = [];
    let t = 0;
    const mouse = { x: -999, y: -999, px: -999, py: -999, vx: 0, vy: 0, active: false };
    const R = 150;

    function rnd(a: number, b: number) {
      return a + Math.random() * (b - a);
    }

    function build() {
      if (!cv || !ctx) return;
      W = window.innerWidth;
      H = window.innerHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ps = [];

      // Performance cap: Max 160 particles to guarantee locked 60/120 FPS
      const count = Math.min(Math.round((W * H) / 9500), 160);
      for (let i = 0; i < count; i++) {
        const hx = rnd(0, W);
        const hy = rnd(0, H);
        ps.push({
          hx,
          hy,
          x: hx,
          y: hy,
          vx: 0,
          vy: 0,
          ph: rnd(0, Math.PI * 2),
          r: Math.random() < 0.15 ? rnd(1.3, 1.9) : rnd(0.5, 1.1),
          ba: rnd(0.3, 0.75),
          ts: rnd(0.8, 2.2),
        });
      }
    }

    function move(e: PointerEvent) {
      if (!mouse.active) {
        mouse.px = e.clientX;
        mouse.py = e.clientY;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }

    function handlePointerLeave() {
      mouse.active = false;
    }

    /* shooting stars */
    const stars: Star[] = [];
    function spawnStar() {
      const a = rnd(2.4, 2.8);
      const s = rnd(12, 18);
      stars.push({
        x: rnd(W * 0.15, W * 1.05),
        y: rnd(-30, H * 0.35),
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        len: rnd(100, 200),
        life: 1,
      });
    }

    function drawStars() {
      if (!ctx) return;
      if (Math.random() < 0.02) spawnStar();
      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.013;
        if (s.life <= 0 || s.x < -250 || s.y > H + 250) {
          stars.splice(i, 1);
          continue;
        }
        const m = Math.hypot(s.vx, s.vy);
        const tx = s.x - (s.vx / m) * s.len;
        const ty = s.y - (s.vy / m) * s.len;
        const g = ctx.createLinearGradient(s.x, s.y, tx, ty);
        g.addColorStop(0, `rgba(255,255,255,${s.life})`);
        g.addColorStop(0.35, `rgba(6,182,212,${s.life * 0.7})`);
        g.addColorStop(1, "rgba(6,182,212,0)");

        ctx.save();
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.8;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.life})`;
        ctx.fill();
        ctx.restore();
      }
    }

    let animId: number;

    function frame() {
      if (!ctx) return;
      t += 0.016;
      ctx.clearRect(0, 0, W, H);
      drawStars();

      if (mouse.active) {
        mouse.vx = mouse.x - mouse.px;
        mouse.vy = mouse.y - mouse.py;
        mouse.px = mouse.x;
        mouse.py = mouse.y;
      } else {
        mouse.vx = 0;
        mouse.vy = 0;
      }
      const sp = Math.hypot(mouse.vx, mouse.vy);

      for (const p of ps) {
        /* Anti-gravity pointer reaction */
        if (mouse.active && sp > 0.25) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < R) {
            const f = 1 - d / R;
            const f2 = f * f;
            const push = Math.min(sp, 35) * 0.25 * f2;
            const nd = d || 1;
            p.vx += (dx / nd) * push + mouse.vx * f2 * 0.1;
            p.vy += (dy / nd) * push + mouse.vy * f2 * 0.1;
          }
        }

        /* Spring back to original point with subtle ambient drift */
        const tx = p.hx + Math.sin(t * 0.7 + p.ph) * 2;
        const ty = p.hy + Math.cos(t * 0.6 + p.ph) * 2;
        p.vx += (tx - p.x) * 0.035;
        p.vy += (ty - p.y) * 0.035;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        /* Velocity stretch rendering */
        const disp = Math.hypot(p.x - p.hx, p.y - p.hy);
        const v = Math.hypot(p.vx, p.vy);
        const k = Math.min(disp / 50, 1);
        const tw = 0.65 + 0.35 * Math.sin(t * p.ts + p.ph);
        const r = Math.round(180 + (255 - 180) * (1 - k));
        const g = Math.round(230 + (255 - 230) * (1 - k));
        const b = 255;
        const a = Math.min(0.9, p.ba * tw + 0.4 * k);
        const len = 0.1 + Math.min(v * 2, 8);

        ctx.lineWidth = p.r * 2;
        const ang = v > 0.08 ? Math.atan2(p.vy, p.vx) : 0;
        const ox = (Math.cos(ang) * len) / 2;
        const oy = (Math.sin(ang) * len) / 2;

        ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
        ctx.beginPath();
        ctx.moveTo(p.x - ox, p.y - oy);
        ctx.lineTo(p.x + ox + 0.01, p.y + oy);
        ctx.stroke();
      }

      if (!document.hidden) {
        animId = requestAnimationFrame(frame);
      }
    }

    function handleVisibility() {
      if (!document.hidden) {
        cancelAnimationFrame(animId);
        animId = requestAnimationFrame(frame);
      }
    }

    build();
    window.addEventListener("resize", build, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", move, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", move);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full block opacity-75"
      style={{ touchAction: "none" }}
    />
  );
}
