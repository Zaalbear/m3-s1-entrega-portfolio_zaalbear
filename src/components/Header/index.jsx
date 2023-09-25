import portfolioLogo from "../../assets/portfolio.png";
import styles from "./style.module.css"

export const Header = () => {
  return (
    <header className={styles.header__container}>
        <img className={styles.header__logo} src={portfolioLogo} alt="logo da página" />
        <nav className={styles.nav__container}>
          <a className={styles.nav__item} href="#aboutMeSection">Sobre</a>
          <a className={styles.nav__item} href="#techSection">Stack</a>
          <a className={styles.nav__item} href="#projectsSection">Projetos</a>
        </nav>
        <a href="#footer"><button className={styles.contact__bttn}>Contato</button></a>
    </header>
  )
}