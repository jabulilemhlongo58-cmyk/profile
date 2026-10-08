import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { CV } from '@/components/CV';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
