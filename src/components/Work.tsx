import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Work.module.css";

export function Work() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className={styles.header}>
        <p className="section-label">Portfolio</p>
        <h2 id="work-title" className="section-title">
          SELECTED WORK
        </h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
