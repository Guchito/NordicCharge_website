import React, { useMemo } from 'react';

const logos: string[] = [
  '/images/partners/dansk-energiforsyning.svg',
  '/images/partners/energidrift.webp',
  '/images/partners/eosvolt.svg',
  '/images/partners/foxess.png',
  '/images/partners/gron.png',
  '/images/partners/iq.png',
  '/images/partners/karnfull.png',
  '/images/partners/monta.png',
  '/images/partners/nordisk-energi.webp',
  '/images/partners/stromlinet-petrol.png',
  '/images/partners/zaptec.png',
];

type Props = {
  /** logo height in px (visual) */
  height?: number;
  /** gap between logos in px */
  gap?: number;
  /** total loop duration in seconds (lower = faster) */
  speed?: number;
  /** optional className to style outer wrapper */
  className?: string;
};

const PartnerMarquee: React.FC<Props> = ({
  height = 64,
  gap = 64,
  speed = 25,
  className = '',
}) => {
  // Tripled array for a seamless loop
  const tripled = useMemo(() => [...logos, ...logos, ...logos], []);

  return (
    <div
      className={`mb-16 w-full overflow-hidden bg-slate-50 py-10 ${className}`}
    >
      <div
        className="animate-scroll flex w-max"
        style={{
          // Use CSS vars so you can tweak speed/gap via props
          // (see tailwind config below)
          // @ts-ignore – using custom props with CSS variables
          '--marquee-duration': `${speed}s`,
          gap: `${gap}px`,
        }}
      >
        {tripled.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex min-w-[150px] items-center justify-center"
            style={{ height }}
          >
            <img
              src={logo}
              alt="Partner logo"
              height={height}
              className="h-16 w-auto opacity-70 transition-opacity duration-300 hover:opacity-100"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerMarquee;
