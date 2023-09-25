import { technologies } from "../../../data/technologies.js"
import styles from "../styles.module.css"

export const TechList = () => {
  return (
    technologies.map((tech) => {
      return(
      <li className={styles.techList__item} key={tech.name}>
        <img className={styles.listItem__image} src={tech.img} alt={`Logo da tecnologia ${tech.name}`} />
        <span className={styles.listItem__name} >{tech.name}</span>
      </li>
      )
    })
  )
}