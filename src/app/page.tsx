import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutAndContact from "@/components/AboutAndContact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <AboutAndContact />
    </main>
  );
}
