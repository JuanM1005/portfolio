import { Header, Footer } from '@/layouts';
import { Hero, About, Skills, Projects } from '@/sections';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main id="home" className="min-h-svh">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
};
