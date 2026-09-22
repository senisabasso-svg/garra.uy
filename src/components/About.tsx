import { useParallaxRef } from "../hooks/useParallaxRegistry";
import styles from "./About.module.css";

export function About() {
  const layerBack = useParallaxRef<HTMLDivElement>(0.25);
  const layerMid = useParallaxRef<HTMLDivElement>(0.55, 0.02);
  const layerFront = useParallaxRef<HTMLDivElement>(0.85, 0.03);
  const textRef = useParallaxRef<HTMLDivElement>(-0.08);

  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={styles.composition} aria-hidden>
        <div ref={layerBack} className={`${styles.layer} ${styles.layerBack}`} />
        <div ref={layerMid} className={`${styles.layer} ${styles.layerMid}`} />
        <div ref={layerFront} className={`${styles.layer} ${styles.layerFront}`} />
      </div>

      <div ref={textRef} className={styles.content}>
        <p className="section-label">El estudio</p>
        <h2 id="about-title" className={styles.headline}>
          NO SOLO HACEMOS QUE SE VEA BIEN.
        </h2>
        <p className={styles.body}>
          Soy Sofía Grassi, fundadora de Garra. Operadora en diseño gráfico y
          técnica en marketing. Este proyecto nace de la pasión por el diseño y
          del deseo de ayudar a emprendedores, marcas y profesionales a
          comunicar su identidad de forma visual, clara y atractiva.
        </p>
        <p className={styles.bodySecondary}>
          Diseñamos con estrategia, pasión y garra.
        </p>
      </div>
    </section>
  );
}
