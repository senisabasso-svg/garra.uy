export type Service = {
  id: string;
  num: string;
  title: string;
  description: string;
  visualClass: string;
};

export const services: Service[] = [
  {
    id: "branding",
    num: "01",
    title: "Identidad de marca",
    description:
      "Logotipos y sistemas visuales que representan la esencia de tu marca. Diseño estratégico para destacar y conectar.",
    visualClass: "visualBrand",
  },
  {
    id: "social",
    num: "02",
    title: "Diseño para redes",
    description:
      "Piezas visuales pensadas para captar la atención y comunicar tu mensaje. Estética moderna, impacto real.",
    visualClass: "visualSocial",
  },
  {
    id: "community",
    num: "03",
    title: "Community management",
    description:
      "Gestión de comentarios, mensajes, calendarios, historias y reels. Tu marca presente, con criterio y constancia.",
    visualClass: "visualAds",
  },
  {
    id: "packaging",
    num: "04",
    title: "Diseño de packaging",
    description:
      "Envases que venden por sí solos. Creatividad al servicio de tu producto, con identidad y propósito.",
    visualClass: "visualWeb",
  },
  {
    id: "marketing",
    num: "05",
    title: "Marketing & campañas",
    description:
      "Estrategia, contenido y creatividad publicitaria que convierte ideas en piezas memorables.",
    visualClass: "visualCreative",
  },
  {
    id: "training",
    num: "06",
    title: "Capacitaciones",
    description:
      "Talleres y acompañamiento para que tu equipo o tu marca ganen autonomía en comunicación visual y redes.",
    visualClass: "visualTech",
  },
];
