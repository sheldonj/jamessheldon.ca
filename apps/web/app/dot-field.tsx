"use client";

import { useEffect, useRef } from "react";

const GAP = 18;

// Faint dot grid behind the header. Dots near the pointer turn teal and a slow
// wave crosses the grid. With reduced motion the wave is off and the grid only
// redraws for the pointer. The header fades it out as it condenses.
export function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let w = 0;
    let h = 0;
    let raf = 0;
    let pointer: { x: number; y: number } | null = null;
    let colors = readColors();

    function readColors() {
      const cs = getComputedStyle(document.documentElement);
      return {
        dot: cs.getPropertyValue("--muted-foreground").trim(),
        lit: cs.getPropertyValue("--primary").trim(),
      };
    }

    function draw(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const wave = !reduce.matches;
      for (let y = GAP / 2; y < h; y += GAP) {
        for (let x = GAP / 2; x < w; x += GAP) {
          let k = wave
            ? Math.max(0, Math.sin(x * 0.012 - y * 0.02 - t * 0.0009)) ** 6 * 0.55
            : 0;
          if (pointer) {
            const d = Math.hypot(x - pointer.x, y - pointer.y);
            k = Math.max(k, Math.max(0, 1 - d / 110));
          }
          ctx.globalAlpha = 0.22 + k * 0.7;
          ctx.fillStyle = k > 0.15 ? colors.lit : colors.dot;
          ctx.beginPath();
          ctx.arc(x, y, 1 + k * 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    }

    // Animate only while the header is expanded; a condensed bar keeps a still grid.
    function loop(t: number) {
      if (window.scrollY < 140 || pointer) draw(t);
      raf = requestAnimationFrame(loop);
    }

    function start() {
      cancelAnimationFrame(raf);
      if (reduce.matches) draw(0);
      else raf = requestAnimationFrame(loop);
    }

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !canvas) return;
      const r = canvas.getBoundingClientRect();
      pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
      if (reduce.matches) draw(0);
    };
    const onLeave = () => {
      pointer = null;
      if (reduce.matches) draw(0);
    };

    const sizeObserver = new ResizeObserver(resize);
    sizeObserver.observe(canvas);
    // The theme toggle flips .dark on <html>; re-read the dot colours.
    const themeObserver = new MutationObserver(() => {
      colors = readColors();
      draw(performance.now());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    reduce.addEventListener("change", start);
    start();

    return () => {
      cancelAnimationFrame(raf);
      sizeObserver.disconnect();
      themeObserver.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      reduce.removeEventListener("change", start);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="dot-field pointer-events-none absolute inset-x-0 top-0 h-[200px] w-full print:hidden"
    />
  );
}
