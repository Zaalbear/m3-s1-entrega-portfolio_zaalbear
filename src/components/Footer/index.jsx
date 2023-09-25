import whatsappIcon from "../../assets/whatsapp-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import gitIcon from "../../assets/github-icon.png"

export const Footer = () => {
  return (
    <footer id="footer">
      <h2>Contato</h2>
      <ul>
        <li>
          <a href="">
            <img src={whatsappIcon} alt="logo do whatsapp" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={linkedinIcon} alt="logo do linkedin" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={gitIcon} alt="logo do github" />
          </a>
        </li>
      </ul>
      <p>Todos os direitos reservados - José da Silva</p>
    </footer>
  );
};
