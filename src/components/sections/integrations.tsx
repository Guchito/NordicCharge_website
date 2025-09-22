import { BatteryCharging, Smartphone, ChevronRight } from 'lucide-react';

import LottiePlayer from '../ui/LottiePlayer';

import AnimatedBorderButton from '@/components/elements/animated-border-button';

const Integrations = () => {
  return (
    <section className="w-full pt-0">
      <div className="flex flex-col py-16">
        <div className="flex max-h-screen w-full justify-center overflow-hidden rounded-3xl">
          <LottiePlayer
            src="/animations/integration.json"
            loop
            autoplay
            className="h-auto w-full"
          />
        </div>

        <h3 className="mt-16 text-center text-2xl font-medium md:text-3xl lg:text-4xl">
          Simple system to optimize your journey through your emobility path.
        </h3>

        <div className="mt-16 flex w-full justify-center">
          <AnimatedBorderButton
            asChild
            wrapperClassName="w-fit"
            className="[&_svg]:transition-transform hover:[&_svg]:translate-x-0.5"
          >
            <a href="/product">
              Our System <ChevronRight />
            </a>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
