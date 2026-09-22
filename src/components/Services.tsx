import { services } from "../data/services";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section
      id="services"
      className={styles.section}
      aria-labelledby="services-title"
    >
      <div className={styles.header}>
        <p className="section-label">Capabilities</p>
        <h2 id="services-title" className="section-title">
          WHAT WE DO
        </h2>
      </div>

      <ul className={styles.list}>
        {services.map((service) => (
          <li key={service.id} className={styles.item}>
            <button type="button" className={styles.row}>
              <span className={styles.num}>{service.num}</span>
              <span className={styles.title}>{service.title}</span>
              <span className={styles.desc}>{service.description}</span>
              <span
                className={`${styles.visual} ${styles[service.visualClass as keyof typeof styles]}`}
                aria-hidden
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
