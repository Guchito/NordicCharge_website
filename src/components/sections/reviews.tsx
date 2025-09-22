'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    title:
      'Nordic Charge has made running our charging network so much easier.',
    review:
      'They took care of the whole process from logistics to support, and now everything is gathered in one platform. Our residents are very satisfied, and so are we.',
    reviewer: 'Anne M., Property Manager',
  },
  {
    title: 'From installation to ongoing support, it just works.',
    review:
      'The switch to Nordic Charge was seamless. They coordinated the installers, ensured the hardware arrived on time, and their support team is always quick to respond.',
    reviewer: 'Jonas L., Fleet Operations Manager',
  },
  {
    title: 'The perfect partner for scaling our charging business.',
    review:
      'As a CPO we needed a partner who understood both the technical side and the day-to-day operations of EV charging. Nordic Charge all-in-one setup saves us countless hours every month and allows us to focus on growth instead of admin.',
    reviewer: 'Sofia R., CEO',
  },
];

export default function Reviews() {
  return (
    <section className="section-padding container flex flex-col gap-8 md:flex-row md:gap-16">
      <div className="flex w-full max-w-md flex-shrink-0 flex-col gap-6 md:w-1/2 md:gap-16 md:pr-8">
        <h3 className="text-left text-2xl leading-8 md:text-3xl md:leading-14 lg:text-4xl 2xl:text-5xl">
          What Our Customers Say About Us
        </h3>
      </div>
      <div className="flex w-full flex-col gap-8 md:w-1/2">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-3xl border bg-white/90 p-8 shadow-md"
          >
            <h4 className="text-primary text-xl font-semibold">{item.title}</h4>
            <p className="text-muted-foreground text-lg">{item.review}</p>
            <span className="text-foreground mt-2 block text-right text-base font-medium">
              {item.reviewer}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
