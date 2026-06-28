import { useTranslation } from 'react-i18next';
import { SectionHeader, SectionLayout, Card } from '@/components/ui';
import { ABOUT_FACTS } from './constants/about.constants';
import { AboutPhoto } from './components';

export const About = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout
      id="about"
      className="bg-section"
      containerClassName="grid grid-cols-1 gap-10 py-16 md:grid-cols-[3fr_2fr] md:gap-12 md:py-24"
    >
      <SectionHeader
        eyebrowNumber="01"
        eyebrowLabel={t('about.eyebrow')}
        title={t('about.title')}
        description={t('about.description')}
      />
      <Card variant="default" size="sm" className="self-start">
        <AboutPhoto />

        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border-soft bg-border-soft">
          {ABOUT_FACTS.map((fact) => (
            <div
              key={fact.factKey}
              className="flex flex-col gap-1 bg-surface-card p-3"
            >
              <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-muted">
                {t(`about.facts.${fact.factKey}`)}
              </span>
              <span className="text-xs font-semibold text-ink">
                {fact.staticValue ?? t(`about.facts.${fact.factKey}Value`)}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </SectionLayout>
  );
};
