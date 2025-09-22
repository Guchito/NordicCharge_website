'use client';

import { Package } from 'lucide-react';

import LottiePlayer from '../ui/LottiePlayer';

import SectionHeader from '@/components/elements/section-header';
import { CardTransparent } from '@/components/ui/card';

export default function ProductIntro() {
  // Letter animation variants
  const letterContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="section-padding container space-y-10.5">
      <SectionHeader
        category="Product"
        title="Built for Trust, Powered by Performance"
        description="We integrate every part of the charging journey into one seamless system, making e-mobility simple, reliable, and effortless for everyone."
        icon={<Package className="h-4 w-4" />}
      />
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="relative flex min-h-[320px] justify-center overflow-hidden rounded-3xl md:h-[460px] md:flex-1/3 md:items-start md:justify-start">
          <img
            src="/images/system/installer_app.png"
            alt="Installer app screenshot"
            className="h-full object-cover"
          />
        </div>

        <CardTransparent className="flex min-h-[320px] items-center justify-center border-none md:flex-2/3">
          <LottiePlayer
            src="/animations/logo-flow-dot.json"
            loop
            autoplay
            className="h-auto w-full"
          />
        </CardTransparent>
      </div>
    </section>
  );
}
