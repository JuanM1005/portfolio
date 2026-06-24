import { Header, Footer } from '@/layouts';
import { Hero, About, Skills } from '@/sections';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main id="top" className="min-h-svh">
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
};
