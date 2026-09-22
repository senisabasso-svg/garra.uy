export type Project = {
  id: string;
  label: string;
  category: string;
  year: string;
  parallaxSpeed: number;
  parallaxScale: number;
  visualClass: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    label: "Trabajo 01",
    category: "Identidad visual",
    year: "2025",
    parallaxSpeed: 0.35,
    parallaxScale: 0.03,
    visualClass: "visualOne",
  },
  {
    id: "p2",
    label: "Trabajo 02",
    category: "Redes & contenido",
    year: "2025",
    parallaxSpeed: 0.52,
    parallaxScale: 0.025,
    visualClass: "visualTwo",
  },
  {
    id: "p3",
    label: "Trabajo 03",
    category: "Packaging",
    year: "2024",
    parallaxSpeed: 0.28,
    parallaxScale: 0.035,
    visualClass: "visualThree",
  },
  {
    id: "p4",
    label: "Trabajo 04",
    category: "Campaña creativa",
    year: "2024",
    parallaxSpeed: 0.45,
    parallaxScale: 0.02,
    visualClass: "visualFour",
  },
];
