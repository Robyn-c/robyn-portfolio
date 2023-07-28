import { Hero } from "@/public/components/Hero";
import { Navbar } from "@/public/components/Navbar";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <Hero />
    </main>
  )
}
