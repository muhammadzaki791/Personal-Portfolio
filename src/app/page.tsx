import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  )
}

