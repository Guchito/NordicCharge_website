import { ChevronRight, BatteryCharging } from 'lucide-react';

import LottiePlayer from '../ui/LottiePlayer';

import AnimatedBorderButton from '@/components/elements/animated-border-button';

const feature = {
  icon: <BatteryCharging />,
  label: 'CPMS',
  title: 'Seamless Integration with CPMS',
  description:
    'At Nordic Charge, we connect every part of the charging ecosystem through our Charge Point Management System (CPMS). By unifying hardware, software, and field operations in one platform, we eliminate the everyday pain points customers face, from installation delays and unreliable uptime to scattered support. The result is a dependable, transparent, and simple charging experience for drivers, site owners, and installers alike.',
  image: '/images/system/hardware.webp',
  link: {
    text: 'Contact us',
    href: '/contact',
  },
};

const Hardware = () => {
  return (
    <section className="section-padding container flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
      <div className="">
        <div className="space-y-6 md:space-y-8 lg:space-y-10.5">
          <div className="flex items-center gap-3">
            {feature.icon}
            <p className="text-xl leading-8 md:leading-10">{feature.label}</p>
          </div>
          <h3 className="text-2xl font-medium md:text-3xl lg:text-4xl">
            {feature.title}
          </h3>
          <p className="text-xl leading-8">{feature.description}</p>
        </div>
        <AnimatedBorderButton
          asChild
          wrapperClassName="w-fit mt-4"
          className="[&_svg]:transition-transform hover:[&_svg]:translate-x-0.5"
        >
          <a href={feature.link.href}>
            {feature.link.text} <ChevronRight />
          </a>
        </AnimatedBorderButton>
      </div>
      <div className="relative flex h-[340px] w-full items-center justify-center sm:h-[600px] sm:min-w-[440px] lg:w-[569px] lg:shrink-0">
        <LottiePlayer
          src="/animations/charger-car.json"
          loop
          autoplay
          className="h-auto w-full"
        />
      </div>
    </section>
  );
};

export default Hardware;
