import bannerImage from "../../assets/banner-img.png"
import styles from "./styles.module.css"

export const BannerSection = () => {
  return (
    <section className={styles.bannerSection__container}>
        <div className={styles.userInfo__container}>
            <h3 className={styles.user__name}>JOSEDASILVA</h3>
            <h2 className={styles.user__welcome}>Bem vindo ao meu portfólio</h2>
            <p className={styles.user__frase}>Uma frase interessante sobre mim</p>
            <button className={styles.more__bttn}>Saiba Mais</button>
        </div>
        <img className={styles.banner__image} src={bannerImage} alt="Imagem do banner" />
    </section>
  )
}