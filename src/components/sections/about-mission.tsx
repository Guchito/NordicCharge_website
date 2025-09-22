const missions = [
  /*{
    title: 'Our Mission',
    description:
      'Design, integrate, and operate dependable charging systems that unify hardware, software, and field operations. Delivering seamless experiences and measurable uptime for drivers, sites, and installers.',
  },
  {
    title: 'Our Vision',
    description:
      'Make e-mobility simple, powerful, and accessible, so charging fades into the background of everyday life.',
  },*/
  {
    title: 'Our Story',
    description: [
      'At Nordic Charge, we believe the green transition should be simple. Since our launch in March 2023, we’ve been dedicated to providing complete solutions that make the shift to a CO₂-neutral infrastructure faster, smoother, and more efficient.',
      'We handle the logistics and planning so organizations can focus on what they do best. By removing complexity, we make it easier to embrace the future of mobility with confidence.',
      'With a digital-first approach and an innovative mindset, we go beyond infrastructure, delivering the data and transparency needed to drive real progress and meet the EU’s sustainability goals.',
      'Because for us, it’s not just about infrastructure. It’s about building the foundation for a cleaner, smarter, and more sustainable tomorrow.',
    ],
  },
];

const AboutMission = () => {
  return (
    <section className="section-padding container flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
      <div className="relative h-[340px] w-full sm:h-[600px] sm:min-w-[440px] lg:w-[569px] lg:shrink-0">
        <img
          src="/images/about/charge-cafe.png"
          alt="Our Team"
          className="size-full rounded-3xl object-cover object-top"
        />
      </div>
      <div className="space-y-6 md:space-y-8 lg:space-y-10.5">
        {missions.map((mission, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-2xl font-medium md:text-3xl lg:text-4xl">
              {mission.title}
            </h3>
            {Array.isArray(mission.description) ? (
              mission.description.map((paragraph, i) => (
                <p key={i} className="text-xl leading-8">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-xl leading-8">{mission.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMission;
