import { useParallaxRef } from "../hooks/useParallaxRegistry";
import styles from "./CtaFinal.module.css";

export function CtaFinal() {
  const orbRef = useParallaxRef<HTMLDivElement>(0.65, 0.04);
  const textRef = useParallaxRef<HTMLDivElement>(-0.1);

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="cta-heading"
    >
      <div className={styles.bgMotion} aria-hidden />
      <div ref={orbRef} className={styles.orb} aria-hidden />

      <div ref={textRef} className={styles.content}>
        <h2 id="cta-heading" className={styles.headline}>
          CONTÁME TU
          <br />
          MARCA.
          <br />
          HAGÁMOSLA CRECER.
        </h2>
        <div className={styles.actions}>
          <a
            href="https://wa.me/59899981734"
            className={`btn btn-primary ${styles.cta}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp →
          </a>
          <a
            href="mailto:garra.estcreativo@gmail.com"
            className={`btn btn-ghost ${styles.cta}`}
          >
            garra.estcreativo@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
