import { Diamond, Layers2, Award, Leaf } from 'lucide-react';

import SectionHeader from '@/components/elements/section-header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
/*
const stats = [
  {
    icon: <Layers2 className="size-6" />,
    value: 'Complete End-to-End Solutions',
    description:
      'From hardware to installation and support, we provide a fully integrated EV charging ecosystem, no hassle, just seamless operations.',
  },
  {
    icon: <Award className="size-6" />,
    value: 'Trusted Expertise & Partnerships',
    description:
      'We deliver proven technology backed by years of industry know-how.',
  },
  {
    icon: <Leaf className="size-6" />,
    value: 'Sustainable & Future-Ready',
    description:
      'Our solutions are built with scalability and sustainability in mind, helping you grow while staying net-neutral and prepared for tomorrow’s demands.',
  },
];*/

export default function WhyUs() {
  return (
    <section className="section-padding container space-y-10.5">
      <SectionHeader
        icon={<Diamond />}
        category="Why us?"
        title="Chosen by Professionals, Driven by Reliability"
        description="Our dedication to seamless performance and lasting partnerships makes us the preferred choice. Built for efficiency, our solutions are designed to power the future."
      />
      {/* 
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {stats.map((stat, index) => (
          <Card key={index} className="gap-20 border-none p-8 shadow-none">
            <CardHeader className="p-0">
              <div className="border-input text-muted-foreground flex size-12 items-center justify-center rounded-full border">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-xl leading-8">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      */}
    </section>
  );
}
