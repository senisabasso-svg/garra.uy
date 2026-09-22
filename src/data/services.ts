export type Service = {
  id: string;
  num: string;
  title: string;
  description: string;
  visualClass: string;
};

export const services: Service[] = [
  {
    id: "brand",
    num: "01",
    title: "Brand Strategy",
    description:
      "Positioning, narrative and go-to-market clarity for brands ready to scale with intention.",
    visualClass: "visualBrand",
  },
  {
    id: "ads",
    num: "02",
    title: "Digital Advertising",
    description:
      "Full-funnel campaigns across paid media — measured, optimized and built for performance.",
    visualClass: "visualAds",
  },
  {
    id: "web",
    num: "03",
    title: "Web Design & Development",
    description:
      "High-end websites and digital products with cinematic UX and engineering that lasts.",
    visualClass: "visualWeb",
  },
  {
    id: "social",
    num: "04",
    title: "Social Media",
    description:
      "Platform-native content systems that grow communities and keep brands culturally relevant.",
    visualClass: "visualSocial",
  },
  {
    id: "creative",
    num: "05",
    title: "Content & Creative",
    description:
      "Visual direction, copy and motion for campaigns that feel editorial, not templated.",
    visualClass: "visualCreative",
  },
  {
    id: "tech",
    num: "06",
    title: "Automation & Technology",
    description:
      "Integrations, CRM flows and custom tools that connect marketing with real business outcomes.",
    visualClass: "visualTech",
  },
];
