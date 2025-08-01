import { TextGenerateEffect } from '@/components/shared/text-generate-effect';
import { LoadingOverlay } from '@/components/ui/loading-spinner';
import Image from 'next/image';
import React from 'react';

export function LoadingOverlayWithLogo({ title }: { title?: string }) {
  return (
    <LoadingOverlay showSpinner={false}>
      <Image
        src="/logo.png"
        alt="Loading..."
        priority
        width={180}
        height={180}
        className="animate-pulse"
      />
      <TextGenerateEffect
        className="text-lg mt-2 text-[--muted] animate-pulse"
        words={title ?? 'A i o s t r e a m s'}
      />
    </LoadingOverlay>
  );
}
