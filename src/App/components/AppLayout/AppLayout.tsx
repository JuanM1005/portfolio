import { Toaster } from 'react-hot-toast';
import { Header, Footer } from '@/layouts';
import { Hero, About, Skills, Projects, Roadmap } from '@/sections';

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
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </>
  );
};
