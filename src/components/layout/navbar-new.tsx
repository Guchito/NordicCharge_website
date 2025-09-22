'use client';
import React, { useState, useEffect } from 'react';

import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import { cn } from '@/lib/utils';

const ITEMS = [
  { label: 'Product', href: '/product' },
  { label: 'Specifications', href: '/specifications' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
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
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        isHomepage && !isScrolled
          ? 'bg-transparent text-white'
          : 'text-foreground bg-white/95 shadow-sm backdrop-blur-sm',
      )}
    >
      <div className="container flex items-center justify-between gap-4 py-3 md:py-4">
        <Logo
          wrapperClassName={cn(
            'flex w-47 justify-start transition-all duration-300',
            isHomepage && !isScrolled ? '[&_img]:invert-0' : '[&_img]:invert',
          )}
        />

        <nav className="">
          <ul className="hidden items-center gap-6 md:flex">
            {ITEMS.map((item) => (
              <li key={item.label} className="flex items-center">
                <a
                  href={item.href}
                  className={cn(
                    'transition-all hover:opacity-80',
                    pathname === item.href && 'font-medium',
                    isHomepage && !isScrolled
                      ? pathname === item.href
                        ? 'text-white'
                        : 'text-white/90'
                      : pathname === item.href
                        ? 'text-primary'
                        : 'text-foreground',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden w-47 items-center justify-end gap-4 md:flex">
          <Button
            variant={isHomepage && !isScrolled ? 'default' : 'outline'}
            size="lg"
            className="rounded-full [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5"
            asChild
          >
            <a href="/pricing">
              Buy now <ChevronRight />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            className={cn(
              'relative z-10 flex size-8 transition-colors duration-300',
              isHomepage && !isScrolled ? 'text-white' : 'text-base-dark',
            )}
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
            'fixed inset-x-0 top-14 bottom-0 md:hidden',
            isMenuOpen ? 'visible' : 'invisible',
          )}
        >
          <div
            className={cn(
              'bg-base-dark/85 absolute inset-0 backdrop-blur transition-opacity duration-500 ease-out',
              !isMenuOpen && 'opacity-0',
            )}
          />
          <nav
            className={cn(
              'bg-background relative ms-auto me-0 flex h-full w-[85%] flex-col border-t p-6 transition-all duration-500 ease-out',
              isMenuOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0',
            )}
          >
            {ITEMS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  'py-3 text-center transition-all hover:opacity-80',
                  pathname === link.href && 'text-primary font-medium',
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-8 flex flex-col items-center justify-end gap-4">
              <Button className="rounded-full" size="lg" asChild>
                <a href="/pricing">
                  Buy now <ChevronRight />
                </a>
              </Button>
            </div>
          </nav>
          <motion.div
            key={isMenuOpen ? 'open' : 'closed'}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/products/main-product.webp"
              alt="Sonic Logo"
              width={374}
              height={330}
              className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/4"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
