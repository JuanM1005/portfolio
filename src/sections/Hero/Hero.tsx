import { SectionLayout } from '@/components/ui';
import { HeroIntro, HeroTerminal, HeroStack } from './components';

export const Hero = () => {
  return (
    <SectionLayout
      id="hero"
      className="my-18"
      containerClassName="grid grid-cols-1 md:grid-cols-2 gap-12 pt-14"
    >
      <HeroIntro />
      {/* Terminal + stack actual */}
      <div className="flex flex-col justify-center gap-0">
        <HeroTerminal />
        <HeroStack />
      </div>
    </SectionLayout>
  );
};
