import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../hooks/useReducedMotion";
import styles from "./Process.module.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Conocernos",
    desc: "Charlamos sobre tu marca, tu público y a dónde querés llegar.",
  },
  {
    num: "02",
    title: "Estrategia",
    desc: "Definimos a quién le hablamos, qué decimos y cómo lo vamos a medir.",
  },
  {
    num: "03",
    title: "Crear",
    desc: "Diseñamos la identidad, las piezas y el calendario de contenido.",
  },
  {
    num: "04",
    title: "Producir",
    desc: "Publicamos, gestionamos la comunidad y lanzamos las campañas.",
  },
  {
    num: "05",
    title: "Acompañar",
    desc: "Revisamos métricas todos los meses y ajustamos lo que haga falta.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(`.${styles.step}`);

    const ctx = gsap.context(() => {
      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 48,
            scale: 0.98,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              end: "top 55%",
              scrub: 0.65,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="process-title"
    >
      <div className={styles.layout}>
        <div className={styles.sticky}>
          <p className="section-label">Método</p>
          <h2 id="process-title" className="section-title">
            CÓMO TRABAJAMOS
          </h2>
        </div>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.num} className={styles.step}>
              <span className={styles.num}>{step.num}</span>
              <div className={styles.text}>
                <span className={styles.title}>{step.title}</span>
                <p className={styles.desc}>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
