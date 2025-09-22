import {
  AudioLines,
  BatteryCharging,
  ChevronRight,
  Smartphone,
} from 'lucide-react';

import AnimatedBorderButton from '@/components/elements/animated-border-button';

type Feature = {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  image: string;
  link: {
    text: string;
    href: string;
    target?: string;
  };
};

const features: Feature[] = [
  /*{
    icon: <BatteryCharging />,
    label: 'Designed for our partners',
    title:
      'Simple system to optimize your journey through your emobility path.',
    description:
      "Our smart speaker is designed to fill your space with rich, high-fidelity sound—whether you're at home or on the go.",
    image: '/images/products/Integrations.png',
    link: {
      text: 'Learn more',
      href: '/product',
    },
  },*/
  {
    icon: <Smartphone />,
    label: 'Designed for our partners',
    title:
      'Manage all your data and journey from our portal. Created to be the easiest way to integrate the net.',
    description:
      'Designed for modern living life-upward stands premium sound with intuitive controls.',
    image: '/images/products/Dashboard+app.png',
    link: {
      text: 'Portal',
      href: 'https://portal.nordiccharge.com/',
      target: '_blank',
    },
  },
];

const Features = () => {
  return (
    <section className="bg-green-background m-4 rounded-3xl pb-8 text-slate-50 md:pb-0">
      <div className="container">
        <div className="[&>*:nth-child(even)]:md:flex-row-reverse">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between gap-8 last:!pb-0 md:flex-row md:gap-16"
            >
              <div className="relative h-[340px] w-full sm:h-[600px] sm:min-w-[440px] lg:w-[569px] lg:shrink-0">
                <img
                  src={feature.image}
                  alt={feature.label}
                  className="size-full rounded-3xl object-cover object-[70%_30%] md:object-contain"
                />
              </div>
              <div className="">
                <div className="space-y-6 md:space-y-8 lg:space-y-10.5">
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <p className="text-xl leading-8 md:leading-10">
                      {feature.label}
                    </p>
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
                  <a
                    href={feature.link.href}
                    target={feature.link.target ? feature.link.target : '_self'}
                    rel="noopener noreferrer"
                  >
                    {feature.link.text} <ChevronRight />
                  </a>
                </AnimatedBorderButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
