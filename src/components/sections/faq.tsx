'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'What types of hardware solutions does Nordic Charge offer?',
    answer:
      'We offer a comprehensive portfolio including AC chargers, DC chargers, BHPC (High-Power) chargers, and additional accessories—tailored for applications across energy companies, car dealerships, housing associations, and public institutions',
  },
  {
    question:
      'How does Nordic Charge ensure reliability in harsh Nordic conditions?',
    answer:
      'Their solutions are designed for extreme weather, with robust hardware and smart software that adapts to local conditions.',
  },
  {
    question:
      'What industries does Nordic Charge serve with its E-Mobility solutions?',
    answer:
      'Nordic Charge stands at the intersection of energy, greentech, IT/SaaS, IoT, transportation, and e-commerce. Its B2B model targets enterprises, energy companies, and organizations aiming to transition to net-neutral infrastructure with digital solutions',
  },
  {
    question: 'Can we integrate our CPMS?',
    answer: 'We support common CPMS platforms and can work with custom APIs.',
  },
  {
    question: 'Do you offer maintenance?',
    answer: 'Yes, SLAs and ongoing support are available.',
  },
  {
    question:
      'How can I contact Nordic Charge, and what is their response time?',
    answer:
      'You can reach out via email at info@nordiccharge.com, or by phone at +45 31 43 59 50, available weekdays from 09:00 to 16:00 (Central European Time). Nordic Charge aims to respond to all emails within 24 hours.',
  },
];

export default function FAQ() {
  return (
    <section className="section-padding container flex flex-col gap-8 md:flex-row md:gap-16">
      <div className="flex w-full max-w-md flex-shrink-0 flex-col gap-6 md:gap-16">
        <h2 className="text-3xl">FAQ</h2>
        <h3 className="text-2xl leading-8 md:text-3xl md:leading-14 lg:text-4xl 2xl:text-5xl">
          Everything You Need to Know About Nordic Charge
        </h3>
      </div>

      <Accordion
        defaultValue="item-0"
        type="single"
        className="w-full space-y-8"
      >
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="px-4">
            <AccordionTrigger className="cursor-pointer text-xl font-normal hover:no-underline md:pb-6 md:text-3xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base md:pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
