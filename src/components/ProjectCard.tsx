import type { Project } from "../data/projects";
import { useParallaxRef } from "../hooks/useParallaxRegistry";
import styles from "./Work.module.css";

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const mediaRef = useParallaxRef<HTMLDivElement>(
    project.parallaxSpeed,
    project.parallaxScale,
  );

  return (
    <article
      className={`${styles.card} ${index % 2 === 1 ? styles.cardOffset : ""}`}
    >
      <a href="#contact" className={styles.cardLink} aria-label={`${project.label} — ${project.category}`}>
        <div className={styles.mediaWrap}>
          <div ref={mediaRef} className={styles.mediaParallax}>
            <div
              className={`${styles.media} ${styles[project.visualClass as keyof typeof styles]}`}
              role="img"
              aria-label={`Composición visual abstracta — ${project.category}`}
            />
          </div>
          <div className={styles.overlay}>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.name}>{project.label}</span>
            <span className={styles.year}>{project.year}</span>
          </div>
        </div>
      </a>
    </article>
  );
}
