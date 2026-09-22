# GARRA — Landing agencia digital

Landing premium para agencia de publicidad, marketing y desarrollo digital.

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **GSAP** (ScrollTrigger) — proceso con scroll scrub
- **Lenis** — scroll suave
- CSS Modules + design tokens (`src/styles/`)

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Video del hero

Copiá tu archivo a `public/video/hero-bg.mp4`. Si no está presente, se usa un fondo abstracto animado.

## Estructura

- `src/components/` — secciones (Hero, Marquee, Services, Work, Process, About, CTA, Footer, Navbar)
- `src/hooks/useParallaxRegistry.ts` — parallax por capas (un solo `requestAnimationFrame`)
- `src/hooks/useReducedMotion.ts` — respeta `prefers-reduced-motion`
