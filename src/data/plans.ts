export type Plan = {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  featured?: boolean;
};

// TODO (confirmar con Sofía): lo que incluye cada plan.
// En IG presenta Básico / Pro / Premium como base "que se ajusta a cada marca".
export const plans: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    tagline: "Para marcas que quieren empezar a mostrarse bien.",
    features: [
      "Diseño de piezas para el feed",
      "Historias mensuales",
      "Calendario de contenido",
      "Copy para cada publicación",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Para marcas que quieren presencia constante.",
    features: [
      "Todo lo del plan Básico",
      "Reels editados",
      "Gestión de comentarios y mensajes",
      "Reporte mensual de métricas",
    ],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Para marcas que quieren crecer con estrategia.",
    features: [
      "Todo lo del plan Pro",
      "Estrategia de contenido y comunicación",
      "Campañas en Meta Ads con segmentación",
      "Reunión mensual de seguimiento",
    ],
  },
];
