'use client';
import React, { useState, useEffect } from 'react';

import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'motion/react';

import LanguageSelector from '../ui/language-selector';

import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import { cn } from '@/lib/utils';

const Navbar = ({ currentPage }: { currentPage: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = currentPage?.replace(/\/$/, '');

  const ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Integration System', href: '/system' },
    { label: 'Team & Culture', href: '/about' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        'text-foreground fixed top-0 right-0 left-0 z-[70] bg-white/95 shadow-sm backdrop-blur-sm transition-all duration-300',
      )}
    >
      <div className="container flex items-center justify-between gap-4 py-3 md:py-4">
        {/* Always show normal Logo */}
        <div>
          <Logo
            wrapperClassName="flex w-60 justify-start transition-all duration-300"
            className="h-12 w-48"
          />
        </div>

        {/* Desktop nav and button grouped together */}
        <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
          <nav className="">
            <ul className="flex justify-end gap-6">
              {ITEMS.map((item) => (
                <li key={item.label} className="flex items-center">
                  <a
                    href={item.href}
                    className={cn(
                      // Unified font and color
                      'text-foreground font-sans text-base font-light transition-all hover:opacity-80',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSelector />
          <Button
            variant="outline"
            size="lg"
            className="rounded-full font-light [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5"
            asChild
          >
            <a href="/contact">
              Contact
              <ChevronRight />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-base-dark relative z-[70] flex size-8 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-6 -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
              ></span>
            </div>
          </button>
        </div>

        {/*  Mobile Menu Navigation */}
        <div
          className={cn(
            'fixed inset-0 z-[60] md:hidden',
            isMenuOpen ? 'visible' : 'invisible',
          )}
        >
          {/* overlay */}
          <div
            className={cn(
              'absolute inset-0 bg-black/30 backdrop-blur transition-opacity duration-500 ease-out',
              isMenuOpen ? 'opacity-100' : 'opacity-0',
            )}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* slide-in panel */}
          <nav
            className={cn(
              'absolute top-0 right-0 h-full min-h-dvh w-full bg-white',
              'flex flex-col border-l p-6 transition-transform duration-500 ease-in-out',
              isMenuOpen ? 'translate-x-0' : 'translate-x-full',
            )}
          >
            <div>
              {/* Logo in mobile menu */}
              <div className="mb-8 flex justify-center">
                <Logo
                  wrapperClassName="flex justify-center"
                  className="h-10 w-40"
                />
              </div>

              {/* Navigation items */}
              {ITEMS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    // Unified font and color for mobile
                    'text-foreground block py-3 text-center font-sans text-base font-light transition-opacity hover:opacity-80',
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8 flex flex-col items-center gap-4 font-light">
                <Button className="rounded-full" size="lg" asChild>
                  <a href="/contact">
                    Contact us <ChevronRight />
                  </a>
                </Button>
                <div className="mt-4">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
