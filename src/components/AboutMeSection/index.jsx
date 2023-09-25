import styles from "./styles.module.css"

export const AboutMeSection = () => {
  return (
    <section id="aboutMeSection" className={styles.aboutMeSection__container}>
        <h2 className={styles.about__title}>Sobre mim</h2>
        <p className={styles.about__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
    </section>
  )
}