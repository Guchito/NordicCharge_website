'use client';
import React, { useState, useEffect } from 'react';

import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import WhiteLogo from '@/components/ui/white-logo';
import { cn } from '@/lib/utils';

const ITEMS = [
  { label: 'Product', href: '/product' },
  { label: 'About', href: '/about' },
];

const Navbar = ({ currentPage }: { currentPage: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = currentPage?.replace(/\/$/, '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Check if we're on the homepage
  const isHomepage = pathname === '' || pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-[70] transition-all duration-300',
        // Mobile always has white background and dark text
        'text-foreground bg-white/95 shadow-sm backdrop-blur-sm md:bg-transparent md:text-white md:shadow-none md:backdrop-blur-none',
        // Desktop conditional styling overrides
        !isHomepage || isScrolled
          ? 'md:text-foreground md:bg-white/95 md:shadow-sm md:backdrop-blur-sm'
          : '',
      )}
    >
      <div className="container flex items-center justify-between gap-4 py-3 md:py-4">
        {/* Mobile always uses normal Logo, Desktop conditional */}
        <div className="md:hidden">
          <Logo
            wrapperClassName="flex w-60 justify-start transition-all duration-300"
            className="h-12 w-48"
          />
        </div>
        <div className="hidden md:block">
          {isHomepage && !isScrolled ? (
            <WhiteLogo
              wrapperClassName="flex w-60 justify-start transition-all duration-300"
              className="h-12 w-48"
            />
          ) : (
            <Logo
              wrapperClassName="flex w-60 justify-start transition-all duration-300"
              className="h-12 w-48"
            />
          )}
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
                      'transition-all hover:opacity-80',
                      pathname === item.href && 'font-medium',
                      'text-foreground md:text-white/90',
                      pathname === item.href && 'md:text-white',
                      (!isHomepage || isScrolled) &&
                        pathname === item.href &&
                        'md:text-primary',
                      (!isHomepage || isScrolled) &&
                        pathname !== item.href &&
                        'md:text-foreground',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            variant={isHomepage && !isScrolled ? 'default' : 'outline'}
            size="lg"
            className="rounded-full [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5"
            asChild
          >
            <a href="/pricing">
              Contact <ChevronRight />
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
            'fixed inset-0 z-[60] md:hidden', // sit above the header
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
              // full-height, white panel
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
                    'block py-3 text-center transition-opacity hover:opacity-80',
                    pathname === link.href && 'text-primary font-medium',
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8 flex flex-col items-center gap-4">
                <Button className="rounded-full" size="lg" asChild>
                  <a href="/contact">
                    Contact us <ChevronRight />
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
