import { SectionLayout } from '@/components/ui';
import { HeroIntro, HeroTerminal, HeroStack } from './components';

export const Hero = () => {
  return (
    <SectionLayout
      id="hero"
      containerClassName="grid grid-cols-1 gap-10 pt-24 pb-16 md:grid-cols-2 md:items-center md:gap-12 md:pt-28 md:pb-24"
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
