import whatsappIcon from "../../assets/whatsapp-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import gitIcon from "../../assets/github-icon.png"
import styles from "./styles.module.css"

export const Footer = () => {
  return (
    <footer id="footer" className={styles.footer__container}>
      <div className={styles.links__container}>
        <h2 className={styles.footer__title}>Contato</h2>
        <ul className={styles.icons__container}>
          <li className={styles.item__container}>
            <a href="#">
              <img className={styles.icon__image} src={whatsappIcon} alt="logo do whatsapp" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className={styles.icon__image} src={linkedinIcon} alt="logo do linkedin" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className={styles.icon__image} src={gitIcon} alt="logo do github" />
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.copyright__text}>Todos os direitos reservados - José da Silva</p>
    </footer>
  );
};
