import { useState } from 'react';
import { PROFILE_PHOTO } from '@/assets/images';

export const AboutPhoto = () => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div className="aspect-4/3 w-full overflow-hidden rounded-lg bg-surface-card-muted">
      {hasImageError ? (
        <div
          role="img"
          aria-label="Retrato de Juan Antonio Aguirre Mares"
          className="flex h-full w-full flex-col items-center justify-center bg-[repeating-linear-gradient(135deg,#f8f8f5_0px,#f8f8f5_12px,#ecece7_12px,#ecece7_14px)]"
        >
          <div className="flex size-20 items-center justify-center rounded-full border border-border-soft bg-surface-card text-2xl font-semibold text-burgundy-600 shadow-sm">
            JA
          </div>

          <p className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted">
            Retrato
          </p>
        </div>
      ) : (
        <img
          src={PROFILE_PHOTO}
          alt="Foto de perfil de Juan Antonio Aguirre Mares"
          loading="lazy"
          className="h-full w-full object-cover object-[center_35%]"
          onError={() => setHasImageError(true)}
        />
      )}
    </div>
  );
};
