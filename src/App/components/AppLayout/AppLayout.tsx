import { Toaster } from 'react-hot-toast';
import { Header, Footer } from '@/layouts';
import { Hero, About, Skills, Projects, Roadmap, Education, Contact } from '@/sections';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main id="home" className="min-h-svh">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Roadmap />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </>
  );
};
