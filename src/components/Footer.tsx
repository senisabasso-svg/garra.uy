import styles from "./Footer.module.css";

const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/garrauy_/",
  },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@garra.uy" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <a href="#" className={styles.brand} aria-label="Garra — inicio">
          <img
            src="/images/logo.png"
            alt="Garra — estudio creativo"
            width={40}
            height={40}
            className={styles.brandLogo}
          />
          <span>Garra</span>
        </a>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <span className={styles.location}>Montevideo, UY</span>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>© 2026 — ALL RIGHTS RESERVED.</p>
    </footer>
  );
}
