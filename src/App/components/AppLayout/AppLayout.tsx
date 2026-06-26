import { Toaster } from 'react-hot-toast';
import { Header, Footer } from '@/layouts';
import { Hero, About, Skills, Projects, Roadmap, Education } from '@/sections';

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
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </>
  );
};
