'use client';
import React, { useEffect, useState, useRef } from 'react';

import { ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

import AnimatedBorderButton from '@/components/elements/animated-border-button';
import { useIsMobile } from '@/hooks/use-mobile';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

const FADE_MS = 500; // matches `duration-500`

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { scrollY } = useScroll();

  const [prevVideoIndex, setPrevVideoIndex] = useState<number | null>(null);

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const setVideoRef = (el: HTMLVideoElement | null, index: number) => {
    if (el) videoRefs.current[index] = el;
  };

  const videos = [
    '/videos/drone-shot.mov',
    '/videos/charge.mov',
    '/videos/nordic-route.mov',
    '/videos/wind-break.mov',
  ];

  const isMobile = useIsMobile();

  // Use different Y values for mobile and desktop
  const imageY = useTransform(scrollY, [0, 800], [0, isMobile ? 200 : 280]);
  const imageScale = useTransform(scrollY, [0, 800], [1, 1.125]);
  const textScale = useTransform(scrollY, [0, 800], [1, 0.9]);

  // Update isScrolling state when user scrolls to prevent flickering between initial and scrolling states
  useEffect(() => {
    const updateScrollState = () => {
      if (window.scrollY > 5 && !isScrolling) {
        setIsScrolling(true);
      }
    };

    window.addEventListener('scroll', updateScrollState);
    return () => window.removeEventListener('scroll', updateScrollState);
  }, [isScrolling]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -30, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, y: 80, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 20,
      },
    },
  };

  // Skip initial animation if reduced motion is preferred
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsScrolling(true);
    }
  }, [prefersReducedMotion]);

  // Cycle videos
  useEffect(() => {
    const i = setInterval(() => {
      setPrevVideoIndex(currentVideoIndex);
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(i);
  }, [currentVideoIndex, videos.length]);

  // Handle video playback when currentVideoIndex changes
  useEffect(() => {
    const current = videoRefs.current[currentVideoIndex];
    if (current) {
      // Ensure current is ready and playing
      current.currentTime = 0;
      current.play().catch(() => {});
    }

    // Let the previous keep playing during the fade, then pause/reset
    if (prevVideoIndex !== null && prevVideoIndex !== currentVideoIndex) {
      const prev = videoRefs.current[prevVideoIndex];
      if (prev) {
        const t = setTimeout(() => {
          prev.pause();
          prev.currentTime = 0;
        }, FADE_MS); // wait for the opacity transition to finish
        return () => clearTimeout(t);
      }
    }
  }, [currentVideoIndex, prevVideoIndex]);

  return (
    <section className="relative -mt-16 flex min-h-screen flex-col overflow-hidden text-left md:-mt-20">
      <motion.div
        className="absolute inset-0 -z-10"
        style={isScrolling ? { y: imageY, scale: imageScale } : {}}
      >
        {videos.map((videoSrc, index) => (
          <video
            key={videoSrc}
            ref={(el) => setVideoRef(el, index)}
            src={videoSrc}
            data-video-index={index}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
            // no need to autoplay all; we manage play/pause in effect
            muted
            loop
            playsInline
            preload="auto"
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Main content - h1 + button on top, p at the bottom */}
      <motion.div
        variants={container}
        initial={prefersReducedMotion ? 'visible' : 'hidden'}
        animate="visible"
        className="relative z-10 ml-8 flex flex-1 flex-col px-4 md:ml-16"
      >
        {/* Middle-left: h1 + button */}
        <div className="flex flex-1 flex-col items-start justify-center gap-8">
          <motion.h1
            variants={item}
            className="bg-clip-text text-4xl leading-13 text-white md:text-6xl"
            style={isScrolling ? { scale: textScale } : {}}
          >
            The only Operational Partner you need
          </motion.h1>

          <motion.div variants={item}>
            <AnimatedBorderButton
              asChild
              className="[&_svg]:transition-transform hover:[&_svg]:translate-x-0.5"
            >
              <a href="/contact">
                Contact us
                <ChevronRight />
              </a>
            </AnimatedBorderButton>
          </motion.div>
        </div>

        {/* Bottom-left: paragraph */}
        <motion.p
          variants={item}
          className="mb-12 max-w-md text-2xl leading-8 text-white/90"
          style={isScrolling ? { scale: textScale } : {}}
        >
          Redefining the electric mobility experience across the Nordics.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
