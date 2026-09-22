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
        <h2 id="about-title" className={styles.headline}>
          WE DON&apos;T JUST MAKE THINGS LOOK GOOD.
        </h2>
        <p className={styles.body}>
          We combine strategy, creativity and technology to build digital
          experiences that people remember.
        </p>
      </div>
    </section>
  );
}
