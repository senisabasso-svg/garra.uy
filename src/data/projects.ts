export type Project = {
  id: string;
  /** Nombre de la marca / cliente (reemplazar por el real) */
  label: string;
  category: string;
  year: string;
  /** Una línea: qué se hizo o qué resultado dio */
  summary: string;
  /** Imagen de portada 16:9 en /public/images/trabajos/ */
  image: string;
  parallaxSpeed: number;
  parallaxScale: number;
  visualClass: string;
};

// TODO (pedir a Sofía): nombres reales de clientes + portada de cada caso,
// tomados del destacado "Trabajos 🚀" de @garrauy_.
// Mientras la imagen no exista se ve el fondo abstracto.
export const projects: Project[] = [
  {
    id: "p1",
    label: "Trabajo 01",
    category: "Identidad visual",
    year: "2025",
    summary: "Logo, paleta y sistema visual para una marca que arrancaba de cero.",
    image: "/images/trabajos/trabajo-01.jpg",
    parallaxSpeed: 0.35,
    parallaxScale: 0.03,
    visualClass: "visualOne",
  },
  {
    id: "p2",
    label: "Trabajo 02",
    category: "Redes & contenido",
    year: "2025",
    summary: "Feed, historias y reels con una línea estética clara y constante.",
    image: "/images/trabajos/trabajo-02.jpg",
    parallaxSpeed: 0.52,
    parallaxScale: 0.025,
    visualClass: "visualTwo",
  },
  {
    id: "p3",
    label: "Trabajo 03",
    category: "Community management",
    year: "2026",
    summary: "Gestión mensual de la cuenta: calendario, comunidad y métricas.",
    image: "/images/trabajos/trabajo-03.jpg",
    parallaxSpeed: 0.28,
    parallaxScale: 0.035,
    visualClass: "visualThree",
  },
  {
    id: "p4",
    label: "Trabajo 04",
    category: "Campaña en Meta Ads",
    year: "2026",
    summary: "Segmentación pensada para llegar a las personas correctas, no a más personas.",
    image: "/images/trabajos/trabajo-04.jpg",
    parallaxSpeed: 0.45,
    parallaxScale: 0.02,
    visualClass: "visualFour",
  },
];
