import { Instagram } from 'lucide-react';

import logoUrl from '/favicon/favicon.svg?url';

import { cn } from '@/lib/utils';

const ITEMS = [
  {
    title: 'Company',
    links: [
      { name: 'Partner portal', href: 'https://portal.nordiccharge.com/' },
      { name: 'Integrations System', href: '/system' },
      { name: 'About us', href: '/about' },
      { name: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/nordic-charge/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nordic_charge/',
    icon: <Instagram />,
  },
];

const Footer = () => {
  return (
    <section className="bg-green-background text-background mx-2 rounded-t-2xl py-11 md:py-15">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:gap-14">
          <div className="flex w-full items-center gap-4 md:w-auto">
            <img src={logoUrl} alt="Logo" className="h-6 w-8" />

            <p className="text-xl">Your E-Mobility Network</p>
          </div>

          {/* Menu */}
          <div className="grid flex-1 justify-center gap-6 md:flex md:grid-cols-2 md:gap-20 lg:gap-24">
            {ITEMS.map((section, sectionIdx) => (
              <div key={sectionIdx} className="min-w-[120px]">
                <h3 className="text-xl">{section.title}</h3>
                <ul className="mt-3 space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="transition-opacity hover:opacity-80"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <p className="text-xl opacity-70">
            © {new Date().getFullYear()}. All rights reserved. Nordic Charge
          </p>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={cn(
                  'opacity-70 transition-opacity hover:opacity-100',
                  link.icon && 'opacity-100 hover:opacity-80',
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.icon || link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
