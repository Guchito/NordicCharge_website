import { AudioLines, Link, Merge } from 'lucide-react';

import LottiePlayer from '../ui/LottiePlayer';

const FEATURES = [
  {
    id: '01',
    title: 'Hardware',
    description:
      'Reliable, tested charging hardware built to last and perform daily.',
  },
  {
    id: '02',
    title: 'Installation',
    description:
      'Fast, professional setups ensuring chargers work from day one.',
  },
  {
    id: '03',
    title: 'Support',
    description:
      'Expert assistance keeping your network running smoothly anytime.',
  },
  {
    id: '04',
    title: 'Logistics',
    description:
      'Streamlined delivery and planning to get the equipment where you need it, when you need it.',
  },
];

export default function ProductFeatures() {
  return (
    <section className="section-padding container flex flex-col gap-8 md:flex-row md:gap-16">
      <div className="relative aspect-[4/4.14] w-full overflow-hidden rounded-3xl sm:w-full md:min-w-[400px]">
        <LottiePlayer
          src="/animations/all-systems.json"
          loop
          autoplay
          className="h-auto w-full"
        />
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl md:text-4xl md:text-balance lg:text-5xl lg:leading-14">
          Explore other Solutions
        </h2>

        <div className="grid grid-cols-1 divide-y lg:grid-cols-2 lg:divide-y-0">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="space-y-6 px-4 py-7.5 md:px-7.5 lg:first:border-e lg:first:border-b lg:last:border-s lg:last:border-t"
            >
              <div className="flex items-center gap-3 text-xl font-medium">
                <span className="">{feature.id}</span>
                <h3 className="">{feature.title}</h3>
              </div>
              <p className="">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
