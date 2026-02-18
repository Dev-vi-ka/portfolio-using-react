import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import SkillsSection from "./components/skills/SkillsSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import TimelineSection from "./components/timeline/TimelineSection";
import Contact from "./components/Contact"

function App() {
 

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <SkillsSection />
    <ProjectsSection />
    <TimelineSection />
    <Contact />
    </>
  )
}

export default App
