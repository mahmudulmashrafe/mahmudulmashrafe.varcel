import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TerminalConsole from '@/components/TerminalConsole';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Insights from '@/components/Insights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-700">
      <Navbar />
      <main className="grow">
        <Hero />
        <TerminalConsole />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
