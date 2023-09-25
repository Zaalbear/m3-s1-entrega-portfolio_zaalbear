import { TechList } from "./TechList"
import styles from "./styles.module.css"

export const TechSection = () => {
  return (
    <section id="techSection" className={styles.techSection__container}>
      <h2 className={styles.tech__title}>Tecnologias</h2>
      <ul className={styles.techList__container}>
          <TechList  />
      </ul>
    </section>
  )
}