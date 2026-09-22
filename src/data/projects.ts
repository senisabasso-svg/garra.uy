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
    label: "Project 01",
    category: "Digital Campaign",
    year: "2025",
    parallaxSpeed: 0.35,
    parallaxScale: 0.03,
    visualClass: "visualOne",
  },
  {
    id: "p2",
    label: "Project 02",
    category: "Brand Experience",
    year: "2025",
    parallaxSpeed: 0.52,
    parallaxScale: 0.025,
    visualClass: "visualTwo",
  },
  {
    id: "p3",
    label: "Project 03",
    category: "E-commerce",
    year: "2024",
    parallaxSpeed: 0.28,
    parallaxScale: 0.035,
    visualClass: "visualThree",
  },
  {
    id: "p4",
    label: "Project 04",
    category: "Digital Product",
    year: "2024",
    parallaxSpeed: 0.45,
    parallaxScale: 0.02,
    visualClass: "visualFour",
  },
];
