import { projects } from "../../../data/projects.js"
import gitLogo from "../../../assets/github-icon.png"
import styles from "../styles.module.css"

export const ProjectsList = () => {
  return (
    projects.map((project) => {
      return(
      <li key={project.name} className={styles.list__item}>
        <div className={styles.item__container}>
          <h4 className={styles.item__name}>{project.name}</h4>
          <p className={styles.item__description}>{project.description}</p>
          <button className={styles.more__bttn}>Saiba mais</button>
        </div>
        <img className={styles.github__icon} src={gitLogo} alt="logo do git hub" />
      </li>
      )
    })
  )
}