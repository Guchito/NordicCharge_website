'use client';
import { useEffect, useRef } from 'react';

import { motion, useInView, useAnimation } from 'framer-motion';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

const variants = {
  text: {
    hidden: { opacity: 0, y: 10, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: 'easeOut',
        duration: 0.5,
      },
    },
  },
};

export default function ValueProposition() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.7 });
  const prefersReducedMotion = usePrefersReducedMotion();

  // Set a deterministic starting state AFTER hydration (no animation)
  useEffect(() => {
    controls.set(prefersReducedMotion ? 'visible' : 'hidden');
  }, []);

  // Animate when in view (skip if user prefers reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) return;
    controls.start(isInView ? 'visible' : 'hidden');
  }, [isInView, controls, prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="py-15 md:py-20 lg:py-48">
      <div className="container flex flex-col items-center justify-center text-center">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl"
          variants={variants.container}
          initial={false} // ⬅️ key change: avoid SSR/client mismatch
          animate={controls}
        >
          <motion.span
            className="m-1.5 inline-block md:m-4"
            variants={variants.text} // ⬅️ so it participates in container stagger
          >
            From hardware to support, we integrate every step into one seamless
            system. <br></br> Ensuring dependable charging for drivers, sites,
            and businesses.
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
}
