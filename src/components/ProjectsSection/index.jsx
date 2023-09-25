import { ProjectsList } from "./ProjectsList"
import styles from "./styles.module.css"

export const ProjectsSection = () => {
  return (
    <section id="projectsSection" className={styles.projectsSection__container}>
        <h2 className={styles.section__title}>Projetos</h2>
        <ul className={styles.products__list}>
            <ProjectsList/>
        </ul>
    </section>
  )
}