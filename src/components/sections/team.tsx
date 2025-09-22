import { Box, Shield, Leaf } from 'lucide-react';

import SectionHeader from '@/components/elements/section-header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/data/teamMembers';

export default function Team() {
  return (
    <section className="section-padding container space-y-10.5">
      <SectionHeader
        icon={<Box />}
        category="Meet the Team"
        title="The People Powering E-Mobility"
        description="We design reliable charging systems that deliver seamless experiences and measurable uptime. Our vision is making E-Mobility simple, accessible, and effortless for all."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {teamMembers.map((person, index) => (
          <a
            key={index}
            href={person.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group focus:ring-primary/60 block h-full rounded-2xl focus:ring-2 focus:outline-none"
            tabIndex={0}
            aria-label={`View ${person.name}'s LinkedIn profile`}
          >
            <Card className="hover:bg-muted/40 flex h-full flex-col items-center border-none p-8 text-center shadow-none transition-all duration-200 group-hover:scale-[1.025] group-focus:scale-[1.025] hover:shadow-xl">
              <img
                src={person.image}
                alt={person.name}
                className="border-background mb-4 h-48 w-48 rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
              <CardHeader className="flex flex-col items-center p-0">
                <h3 className="mt-2 min-w-[200px] text-center text-xl font-bold">
                  {person.name}
                </h3>
                <span className="text-primary mb-2 min-w-[200px] text-center text-lg font-medium">
                  {person.role}
                </span>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
