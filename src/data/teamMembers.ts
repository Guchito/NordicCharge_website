// Team member data for Nordic Charge
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  link: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Jhon Hyttel Angel',
    role: 'CEO & Founder',
    image: '/images/about/jhon.jpeg',
    description:
      'Leading the charge in Nordic e-mobility innovation with over 15 years in clean energy.',
    link: 'https://www.linkedin.com/in/jhon-angel/',
  },
  {
    name: 'Linus Johan Boesen',
    role: 'COO',
    image: '/images/about/linus.jpeg',
    description:
      'Expert in charging infrastructure and smart grid technology, driving our technical vision.',
    link: 'https://www.linkedin.com/in/linus-johan-boesen-61a1a2253/',
  },
  {
    name: 'Agustin Gaggero',
    role: 'Full-Stack Developer',
    image: '/images/about/agustin.png',
    description:
      'Building strategic relationships with key players in the e-mobility ecosystem.',
    link: 'https://www.linkedin.com/in/agustingaggero/',
  },
  {
    name: 'Valentina Arboit',
    role: 'Marketing & Communications',
    image: '/images/about/valentina.jpeg',
    description:
      'Building strategic relationships with key players in the e-mobility ecosystem.',
    link: 'https://www.linkedin.com/in/valentina-arboit-5a128a263/',
  },
];
