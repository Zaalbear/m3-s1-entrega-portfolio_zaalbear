//Estilos
import "../styles/reset.css";
import "../styles/globalStyles.css";
import styles from "./pageStyle.module.css";

//Componentes
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const PageTamplate = ({ children }) => {
  return (
    <div className={styles.page__container}>
      <Header />
      <main className={styles.main__container}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
