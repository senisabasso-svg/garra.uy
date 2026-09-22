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
          LET&apos;S BUILD
          <br />
          SOMETHING
          <br />
          WORTH REMEMBERING.
        </h2>
        <a href="mailto:hello@garra.uy" className={`btn btn-primary ${styles.cta}`}>
          Start a project →
        </a>
      </div>
    </section>
  );
}
