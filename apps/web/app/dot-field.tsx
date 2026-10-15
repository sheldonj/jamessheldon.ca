"use client";

import { useEffect, useRef } from "react";

const GAP = 18;
const FRAME_MS = 1000 / 30;
// Noise scale in px per lattice cell, and how fast the field drifts.
const SCALE = 260;
const DRIFT = 0.00006;

// Integer hash -> [0, 1). Seeded by absolute grid position, so the field
// never tiles the way a sine wave does.
function hash(x: number, y: number, z: number) {
  let n =
    Math.imul(x, 374761393) +
    Math.imul(y, 668265263) +
    Math.imul(z, 2147483647);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}

const fade = (t: number) => t * t * (3 - 2 * t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Smooth 3D value noise in [0, 1).
function noise(x: number, y: number, z: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const zi = Math.floor(z);
  const u = fade(x - xi);
  const v = fade(y - yi);
  const w = fade(z - zi);
  const plane = (k: number) =>
    lerp(
      lerp(hash(xi, yi, k), hash(xi + 1, yi, k), u),
      lerp(hash(xi, yi + 1, k), hash(xi + 1, yi + 1, k), u),
      v,
    );
  return lerp(plane(zi), plane(zi + 1), w);
}

// Two octaves, thresholded so only sparse, soft patches light up.
function glow(x: number, y: number, t: number) {
  const z = t * DRIFT;
  const n =
    noise(x / SCALE, y / SCALE, z) * 0.65 +
    noise(x / (SCALE * 0.45) + 31.7, y / (SCALE * 0.45) - 12.3, z * 1.6) * 0.35;
  const k = fade(Math.min(1, Math.max(0, (n - 0.58) / 0.22)));
  return k * 0.55;
}

// Faint dot grid. Dots near the pointer turn teal, and soft patches of noise
// drift across the grid. With reduced motion the patches hold still and the grid only redraws for the
// pointer and scrolling. The pointer is ignored over links and buttons so the
// grid never lights up behind what you're about to click.
//
// mode "header": fills its parent (the header) and fades as the header condenses.
// mode "page": fixed behind the whole page; the grid scrolls with the content.
export function DotField({ mode }: { mode: "header" | "page" }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const page = mode === "page";
    const host: HTMLElement | Window = page ? window : canvas.parentElement!;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;
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
      // In page mode the grid is anchored to the document, so it scrolls with it.
      const scroll = page ? window.scrollY : 0;
      const y0 = GAP / 2 - (scroll % GAP);
      for (let y = y0; y < h; y += GAP) {
        const py = y + scroll;
        for (let x = GAP / 2; x < w; x += GAP) {
          let k = glow(x, py, wave ? t : 0);
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

    // Header mode animates only while the header is expanded.
    function loop(t: number) {
      raf = requestAnimationFrame(loop);
      if (t - last < FRAME_MS) return;
      last = t;
      if (page || window.scrollY < 140 || pointer) draw(t);
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
      const overControl = (e.target as Element | null)?.closest?.("a, button");
      if (overControl) {
        pointer = null;
      } else {
        const r = canvas.getBoundingClientRect();
        pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
      }
      if (reduce.matches) draw(0);
    };
    const onLeave = () => {
      pointer = null;
      if (reduce.matches) draw(0);
    };
    const onScroll = () => {
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
    host.addEventListener("pointermove", onMove as EventListener);
    const leaveTarget = page ? document.documentElement : host;
    leaveTarget.addEventListener("pointerleave", onLeave);
    if (page) window.addEventListener("scroll", onScroll, { passive: true });
    reduce.addEventListener("change", start);
    start();

    return () => {
      cancelAnimationFrame(raf);
      sizeObserver.disconnect();
      themeObserver.disconnect();
      host.removeEventListener("pointermove", onMove as EventListener);
      leaveTarget.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      reduce.removeEventListener("change", start);
    };
  }, [mode]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={
        mode === "page"
          ? "dot-field-page pointer-events-none fixed inset-0 -z-10 h-full w-full print:hidden"
          : "dot-field pointer-events-none absolute inset-x-0 top-0 h-[200px] w-full print:hidden"
      }
    />
  );
}
