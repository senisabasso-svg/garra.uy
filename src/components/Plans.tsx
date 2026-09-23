import { plans } from "../data/plans";
import styles from "./Plans.module.css";

const WHATSAPP = "https://wa.me/59899981734";

export function Plans() {
  return (
    <section id="plans" className={styles.section} aria-labelledby="plans-title">
      <div className={styles.header}>
        <p className="section-label">Planes</p>
        <h2 id="plans-title" className="section-title">
          DELEGÁ PARA CRECER.
        </h2>
        <p className={styles.intro}>
          Tres planes base que ajustamos a lo que necesita tu marca.
        </p>
      </div>

      <ul className={styles.grid}>
        {plans.map((plan) => (
          <li
            key={plan.id}
            className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
          >
            {plan.featured ? (
              <span className={styles.badge}>El más elegido</span>
            ) : null}
            <h3 className={styles.name}>{plan.name}</h3>
            <p className={styles.tagline}>{plan.tagline}</p>
            <ul className={styles.features}>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent(
                `Hola Sofi! Quiero info sobre el plan ${plan.name} de Garra.`,
              )}`}
              className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"} ${styles.cta}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar plan {plan.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
