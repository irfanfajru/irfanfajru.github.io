import AboutMe from "./components/AboutMe"
import Experiences from "./components/Experiences"
import Jumbotron from "./components/Jumbotron"
import Education from "./components/Education"
import SkillsAndCertifications from "./components/SkillsAndCertifications"
import Projects from "./components/Projects"

export default function Home() {
  return (
    <main>
      <Jumbotron/>
      <AboutMe/>
      <Experiences/>
      <Education/>
      <SkillsAndCertifications/>
      <Projects/>
    </main>
  )
}
