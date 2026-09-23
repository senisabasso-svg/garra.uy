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

// Casos y portadas armados con trabajos publicados en @garrauy_.
// Si la imagen no existe se ve el fondo abstracto de respaldo.
export const projects: Project[] = [
  {
    id: "p1",
    label: "Kairos · Verónica Ocampo · Roma · Granolas",
    category: "Identidad visual",
    year: "2023",
    summary: "Logotipos e identidad para emprendimientos y profesionales: velas, psicología, impresión 3D y productos artesanales.",
    image: "/images/trabajos/trabajo-01.jpg",
    parallaxSpeed: 0.35,
    parallaxScale: 0.03,
    visualClass: "visualOne",
  },
  {
    id: "p2",
    label: "Deli Caseras",
    category: "Packaging & papelería",
    year: "2023",
    summary: "Logo, etiqueta para la caja y lista de precios para una marca de pastas y salsas caseras.",
    image: "/images/trabajos/trabajo-02.jpg",
    parallaxSpeed: 0.52,
    parallaxScale: 0.025,
    visualClass: "visualTwo",
  },
  {
    id: "p3",
    label: "Landford Home",
    category: "Identidad de marca",
    year: "2024",
    summary: "Nueva identidad visual para que la marca comunique con claridad y personalidad.",
    image: "/images/trabajos/trabajo-03.jpg",
    parallaxSpeed: 0.28,
    parallaxScale: 0.035,
    visualClass: "visualThree",
  },
  {
    id: "p4",
    label: "Contenido para redes",
    category: "Redes & contenido",
    year: "2025",
    summary: "Placas y carruseles con línea estética propia: estrategia, contenido y comunidad.",
    image: "/images/trabajos/trabajo-04.jpg",
    parallaxSpeed: 0.45,
    parallaxScale: 0.02,
    visualClass: "visualFour",
  },
];
