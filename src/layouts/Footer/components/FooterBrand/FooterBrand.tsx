import { CursorBlink } from '@/components/ui';

export const FooterBrand = () => {
  return (
    <div className="flex flex-col gap-3">
      <a
        href="#home"
        className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600 rounded"
        aria-label="Ir al inicio"
      >
        <CursorBlink variant="burgundy" />
        Juan Mares
      </a>
      <p className="text-sm leading-relaxed">
        Frontend en formación
        <br />
        Guadalajara, Jal.
        <br />
        React · TypeScript · Tailwind
      </p>
    </div>
  );
};
