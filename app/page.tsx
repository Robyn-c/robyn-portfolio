import { AboutMe } from "@/public/components/AboutMe";
import { Hero } from "@/public/components/Hero";
import { Navbar } from "@/public/components/Navbar";


export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <AboutMe />
    </main>
    </>
  )
}
