import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

type ParallaxEntry = { el: HTMLElement; speed: number; scale?: number };

const registry = new Set<ParallaxEntry>();
let rafId = 0;
let listening = false;

function tick() {
  const intensity =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--parallax-intensity",
      ),
    ) || 1;

  if (intensity <= 0) {
    registry.forEach(({ el }) => {
      el.style.transform = "";
    });
    rafId = requestAnimationFrame(tick);
    return;
  }

  const vh = window.innerHeight;

  registry.forEach(({ el, speed, scale = 0 }) => {
    const rect = el.getBoundingClientRect();
    const centerOffset = rect.top + rect.height * 0.5 - vh * 0.5;
    const y = centerOffset * speed * intensity * -0.15;
    const s = 1 + Math.min(Math.abs(centerOffset / vh) * scale * intensity, 0.06);
    el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${s.toFixed(4)})`;
  });

  rafId = requestAnimationFrame(tick);
}

function ensureLoop() {
  if (!listening) {
    listening = true;
    rafId = requestAnimationFrame(tick);
  }
}

function maybeStopLoop() {
  if (registry.size === 0 && listening) {
    cancelAnimationFrame(rafId);
    listening = false;
  }
}

export function useParallaxRef<T extends HTMLElement>(speed: number, scale = 0) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const entry: ParallaxEntry = { el, speed, scale };
    registry.add(entry);
    ensureLoop();

    return () => {
      registry.delete(entry);
      el.style.transform = "";
      maybeStopLoop();
    };
  }, [speed, scale, reduced]);

  return ref;
}
