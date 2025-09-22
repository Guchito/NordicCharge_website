'use client';
import React, { useRef } from 'react';

import { ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

import AnimatedBorderButton from '../elements/animated-border-button';

const BecomeCPO = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll progress from when the section enters to when it leaves the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // start of section meets bottom of viewport  ->  end of section meets top of viewport
    offset: ['start end', 'end start'],
  });

  // Parallax: move image up as the user scrolls through the section
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={sectionRef}
      className="relative mx-1 flex min-h-screen flex-col items-center justify-center overflow-hidden rounded-lg text-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src="/images/landing/become-a-CPO.webp"
          alt="Become a CPO"
          className="pointer-events-none h-full w-full object-cover will-change-transform"
          style={{ y: imageY, scale: imageScale }}
        />
        <div className="pointer-events-none absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className="relative z-10 flex flex-col items-center gap-8 px-4"
      >
        <motion.h2
          className="max-w-4xl text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          style={{ scale: textScale }}
        >
          Become a CPO Today
        </motion.h2>

        <motion.p
          className="max-w-2xl text-xl leading-8 text-white/90 md:text-2xl"
          style={{ scale: textScale }}
        >
          Already a CPO? Manage everything from one place
        </motion.p>

        <motion.div>
          <AnimatedBorderButton
            asChild
            className="[&_svg]:transition-transform hover:[&_svg]:translate-x-0.5"
          >
            <a href="/contact">
              Get Started
              <ChevronRight />
            </a>
          </AnimatedBorderButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BecomeCPO;
