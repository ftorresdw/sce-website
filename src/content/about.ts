export type AwardInstance = {
  year: number
  description: string
}

export type AwardGroup = {
  id: string
  title: string
  instances: AwardInstance[]
}

export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

/** Awards listed at sceflorida.com/awards-and-recognition (2014–2020). */
export const awardGroups: AwardGroup[] = [
  {
    id: 'abc-eagle',
    title: 'ABC Excellence in Construction Eagle Award',
    instances: [
      { year: 2020, description: 'Awarded for electrical work done on Bigfire at Universal CityWalk' },
      { year: 2020, description: 'Awarded for electrical work done on the Disney Skyliner at Walt Disney World Resort' },
      { year: 2019, description: 'Awarded for electrical work done on Old Port Royal at Disney’s Caribbean Beach Resort' },
      { year: 2018, description: 'Awarded for electrical work done on Universal Orlando’s Fast & Furious: Supercharged' },
      {
        year: 2017,
        description: 'Awarded for electrical work done on Universal Orlando’s Race Through New York Starring Jimmy Fallon',
      },
      { year: 2016, description: 'Awarded for electrical work done on Cinepolis IP and IMAX' },
      {
        year: 2016,
        description: 'Awarded for electrical work done on King Kong Skull Island at Universal Orlando’s Islands of Adventure',
      },
      { year: 2014, description: 'Awarded for electrical work done on Universal Orlando’s Transformers: The Ride 3D' },
    ],
  },
  {
    id: 'step-platinum',
    title: 'Safety Training Evaluation Process (STEP) Platinum Award',
    instances: [
      {
        year: 2020,
        description:
          'In recognition of the company’s platinum level of achievement and its ongoing efforts in the development of a quality safety program',
      },
      {
        year: 2018,
        description:
          'In recognition of the company’s platinum level of achievement and its ongoing efforts in the development of a quality safety program',
      },
      {
        year: 2017,
        description:
          'In recognition of the company’s platinum level of achievement and its ongoing efforts in the development of a quality safety program',
      },
      {
        year: 2015,
        description:
          'In recognition of the company’s platinum level of achievement and its ongoing efforts in the development of a quality safety program',
      },
    ],
  },
  {
    id: 'step-gold',
    title: 'Safety Training Evaluation Process (STEP) Gold Award',
    instances: [
      {
        year: 2016,
        description:
          'In recognition of the company’s gold level of achievement and its ongoing efforts in the development of a quality safety program',
      },
    ],
  },
  {
    id: 'ffva-safety',
    title: 'FFVA Mutual Commitment to Safety Award',
    instances: [
      {
        year: 2016,
        description:
          'This award recognizes outstanding achievements and ongoing support of an effective and comprehensive workplace and safety program',
      },
    ],
  },
]

export function getAwardYears(group: AwardGroup) {
  return [...new Set(group.instances.map((instance) => instance.year))].sort((a, b) => b - a)
}

export const aboutPage = {
  meta: {
    title: 'About Us | Service Complete Electric',
    description:
      'Learn about Service Complete Electric — Central Florida’s premier electrical contractor for hospitality, entertainment, and commercial projects since 1995.',
  },
  intro: {
    headline: "Central Florida's Premier Electrical Contractor",
    mission:
      'Since 1995, Service Complete Electric has powered the region’s most iconic hospitality and entertainment destinations — from Universal Studios and Disney to premier resorts and commercial facilities. We deliver safe, creative, and exceptional electrical solutions from design through completion.',
  },
  recognitionBar: [
    { label: 'STEP Platinum', sublabel: 'Safety Excellence' },
    { label: 'ABC Eagle Awards', sublabel: 'Excellence in Construction' },
    { label: 'Since 1995', sublabel: '30 years of service' },
    { label: 'Industry Active', sublabel: 'Central Florida' },
  ],
  awards: {
    title: 'Awards & Recognition',
    intro:
      'Service Complete Electric is devoted to being exceptional. Since our inception in 1995, we’ve received a number of accolades and accomplishments.',
    hint: 'Select an award to see the years and projects recognized.',
  },
  leadership: {
    title: 'Leadership',
    intro:
      'Experienced leaders with decades of combined expertise in hospitality, entertainment, and commercial electrical contracting.',
    members: [
      {
        id: 'tony-scruggs',
        name: 'Tony Scruggs',
        role: 'President',
        bio: 'Guides company strategy and client partnerships across Central Florida’s largest hospitality and entertainment projects.',
        image: '/images/leadership/tony-scruggs.png',
      },
      {
        id: 'eric-diller',
        name: 'Eric Diller',
        role: 'Vice President',
        bio: 'Oversees field operations and project delivery, ensuring complex installations are completed safely and on schedule.',
        image: '/images/leadership/eric-diller.png',
      },
      {
        id: 'dylan-scruggs',
        name: 'Dylan Scruggs',
        role: 'Finance Manager',
        bio: 'Manages financial operations and supports the growth of SCE’s full-service electrical capabilities.',
        image: '/images/leadership/dylan-scruggs.png',
      },
    ] satisfies TeamMember[],
  },
  mission: {
    title: 'Mission & Values',
    body: 'We deliver safe, creative, and exceptional electrical solutions while building lasting partnerships in our community and industry.',
  },
  credentials: {
    title: 'Industry Credentials',
    intro:
      'SCE maintains active memberships and certifications that reinforce our commitment to safety, quality, and professional standards.',
    certifications: [
      {
        title: 'FASA/BASA',
        description: 'Our team is certified to install fire and security systems',
      },
    ],
    associations: [
      { name: 'Associated Builders and Contractors' },
      { name: 'Florida Electrical Apprenticeship & Training' },
      { name: 'Electrical Council of Florida' },
      { name: 'National Association of Women in Construction' },
    ],
  },
  cta: {
    title: 'Ready to Power Your Next Project?',
    intro:
      'Partner with a contractor trusted on Universal, Disney, and Central Florida’s most demanding builds.',
    primary: { label: 'Get In Touch', href: '/contact' },
    secondary: { label: 'View Our Projects', href: '/#portfolio' },
    tertiary: { label: 'Read the Newsroom', href: '/newsroom' },
  },
} as const
