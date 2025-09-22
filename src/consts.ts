// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Nordic Charge';
export const SITE_DESCRIPTION = 'E-Mobility Solutions';
('Redefining the electric mobility experience across the Nordics. We provide smart infrastructure that keeps you moving forward.');

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: '%s | nordic charge',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Nordic Charge',
    'E‑Mobility',
    'Infrastructure',
    'CPO solutions',
    'Energy companies',
    'AC chargers',
    'DC chargers',
    'EV charging solutions',
    'Infrastruktur',
    'CPO-løsninger',
    'Energiselskaber',
    'AC-ladere',
    'DC-ladere',
    'Ladeinfrastruktur',
    'Ladepunkter',
    'Ladeløsninger til elbiler',
  ],
  authors: [{ name: 'NC Team' }],
  creator: 'NC Team',
  publisher: 'NC',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'Nordic Charge',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nordic Charge - E-Mobility Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
    creator: '@nordiccharge',
  },
};
