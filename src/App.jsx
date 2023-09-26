import { PageTamplate } from "./pages/PageTamplate"
import { BannerSection } from "./components/BannerSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { TechSection } from "./components/TechSection";
import { ProjectsSection } from "./components/ProjectsSection";

function App() { 
  return (
    <>
      <PageTamplate>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </PageTamplate>
    </>
  ) }

export default App
