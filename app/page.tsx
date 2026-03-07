import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/content";

// Revalidate every 60s so Notion changes appear quickly
export const revalidate = 60;

export default async function Home() {
  const content = await getContent();

  return (
    <>
      <Navbar />
      <main>
        <Hero content={content.hero} />
        <Stats />
        <About content={content.about} />
        <Services items={content.services} />
        <Projects items={content.projects} />
        <Contact content={content.contact} />
      </main>
      <Footer />
    </>
  );
}
