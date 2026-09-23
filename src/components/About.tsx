import { useParallaxRef } from "../hooks/useParallaxRegistry";
import { SlotImage } from "./SlotImage";
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

      <div className={styles.inner}>
      <figure className={styles.portrait}>
        <div className={styles.portraitFallback} aria-hidden>
          <img src="/images/logo.png" alt="" width={96} height={96} />
        </div>
        <SlotImage
          src="/images/sofia.jpg"
          alt="Sofía Grassi, fundadora de Garra"
          className={styles.portraitImg}
        />
        <figcaption className={styles.portraitCaption}>
          Sofía Grassi — fundadora
        </figcaption>
      </figure>

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
          Detrás de cada marca hay una historia que merece ser contada. Mi
          trabajo es contarla con estrategia, pasión y garra.
        </p>
        <ul className={styles.credentials} aria-label="Formación y experiencia">
          <li>Operadora en diseño gráfico</li>
          <li>Técnica en marketing</li>
          <li>Seminario Sembrando</li>
          <li>Building Marketers</li>
        </ul>
      </div>
      </div>
    </section>
  );
}
