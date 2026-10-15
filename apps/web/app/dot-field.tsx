"use client";

import { useEffect, useRef } from "react";

const GAP = 18;
const FRAME_MS = 1000 / 30;

// Faint dot grid. Dots near the pointer turn teal and a slow wave crosses the
// grid. With reduced motion the wave is off and the grid only redraws for the
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
          let k = wave
            ? Math.max(0, Math.sin(x * 0.012 - py * 0.02 - t * 0.0009)) ** 6 * 0.55
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
