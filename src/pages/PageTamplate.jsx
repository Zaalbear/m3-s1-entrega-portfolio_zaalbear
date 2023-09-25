//Estilos
import "../styles/reset.css"
import "../styles/globalStyles.css"
import styles from "./pageStyle.module.css"

//Componentes
import { Header } from "../components/Header"
import { BannerSection } from "../components/BannerSection"
import { AboutMeSection } from "../components/AboutMeSection"
import { TechSection } from "../components/TechSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { Footer } from "../components/Footer"



export const PageTamplate = () => {
  return (
    <div className={styles.page__container}>
      <Header />
      <main className={styles.main__container}>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};
