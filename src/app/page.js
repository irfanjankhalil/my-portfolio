import Home from "@/components/home"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Education from "@/components/education"
import Experience from "@/components/experience"

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Education /> 
      <Projects />
      <Skills />
      <Experience />
      <Contact/>
    </main>
  )
}
