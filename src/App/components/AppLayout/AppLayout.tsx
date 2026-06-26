import { Header, Footer } from '@/layouts';
import {
  Hero,
  About,
  Skills,
  Projects,
  Roadmap,
  Education,
  Contact,
} from '@/sections';
import { Toaster } from 'react-hot-toast';

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
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          className:
            'md:max-w-2xl! border border-burgundy-600 bg-burgundy-100! p-2! text-xs font-medium text-burgundy-700!',

          success: {
            iconTheme: {
              primary: 'var(--color-burgundy-600)',
              secondary: 'var(--color-surface-card-muted)',
            },
          },
        }}
      />
    </>
  );
};
