export type Award = {
  title: string
  description?: string
}

export type AwardYear = {
  year: number
  awards: Award[]
}

export type TeamMember = {
  id: string
  name: string
  role: string
  image: string
}

export const aboutPage = {
  meta: {
    title: 'About Us | Service Complete Electric',
    description:
      'Learn about Service Complete Electric — our mission, leadership, awards, certifications, and industry associations since 1995.',
  },
  intro: {
    headline: 'Awards & Recognition',
    mission:
      'Service Complete Electric is devoted to being exceptional. Since our inception in 1995, we’ve received a number of accolades and accomplishments. We’re very active in the Central Florida construction community and are involved in a number of associations.',
  },
  recognitionBar: [
    { label: 'STEP Platinum', sublabel: 'Safety Excellence' },
    { label: 'ABC Eagle Awards', sublabel: 'Excellence in Construction' },
    { label: 'Since 1995', sublabel: 'Nearly 30 Years' },
    { label: 'Industry Active', sublabel: 'Central Florida' },
  ],
  awardsByYear: [
    {
      year: 2020,
      awards: [
        {
          title: 'Safety Training Evaluation Process (STEP) Platinum Award',
          description:
            'In recognition of the company’s platinum level of achievement and its ongoing efforts in the development of a quality safety program',
        },
        {
          title: 'ABC Excellence in Construction Eagle Award',
          description: 'Awarded for electrical work done on Bigfire at Universal CityWalk',
        },
        {
          title: 'ABC Excellence in Construction Eagle Award',
          description: 'Awarded for electrical work done on the Disney Skyliner at Walt Disney World Resort',
        },
      ],
    },
    {
      year: 2019,
      awards: [
        {
          title: 'ABC Excellence in Construction Eagle Award',
          description: 'Awarded for electrical work done on Old Port Royal at Disney’s Caribbean Beach Resort',
        },
      ],
    },
    {
      year: 2018,
      awards: [
        {
          title: 'ABC Excellence in Construction Eagle Award',
          description: 'Awarded for electrical work done on Universal Orlando’s Fast & Furious: Supercharged',
        },
        {
          title: 'Safety Training Evaluation Process (STEP) Platinum Award',
          description:
            'In recognition of the company’s platinum level of achievement and its ongoing efforts in the development of a quality safety program',
        },
      ],
    },
    {
      year: 2017,
      awards: [
        {
          title: 'ABC Excellence in Construction Eagle Award',
          description: 'Awarded for electrical work done on Universal Orlando’s Race Through New York Starring Jimmy Fallon',
        },
        {
          title: 'Safety Training Evaluation Process (STEP) Platinum Award',
          description:
            'In recognition of the company’s platinum level of achievement and its ongoing efforts in the development of a quality safety program',
        },
      ],
    },
    {
      year: 2016,
      awards: [
        {
          title: 'ABC Excellence in Construction Eagle Award',
          description: 'Awarded for electrical work done on Cinepolis IP and IMAX',
        },
        {
          title: 'ABC Excellence in Construction Eagle Award',
          description: 'Awarded for electrical work done on King Kong Skull Island at Universal Orlando’s Islands of Adventure',
        },
        {
          title: 'FFVA Mutual Commitment to Safety Award',
          description:
            'This award recognizes outstanding achievements and ongoing support of an effective and comprehensive workplace and safety program',
        },
        {
          title: 'Safety Training Evaluation Process (STEP) Gold Award',
          description:
            'In recognition of the company’s gold level of achievement and its ongoing efforts in the development of a quality safety program',
        },
      ],
    },
    {
      year: 2015,
      awards: [
        {
          title: 'Safety Training Evaluation Process STEP Platinum Award',
          description:
            'In recognition of the company’s platinum level of achievement and its ongoing efforts in the development of a quality safety program',
        },
      ],
    },
    {
      year: 2014,
      awards: [
        {
          title: 'ABC Excellence in Construction Eagle Award',
          description: 'Awarded for electrical work done on Universal Orlando’s Transformers: The Ride 3D',
        },
      ],
    },
  ] satisfies AwardYear[],
  leadership: {
    title: 'Leadership',
    intro: 'Meet the team guiding Service Complete Electric’s commitment to safety, quality, and exceptional service.',
    members: [
      {
        id: 'tony-scruggs',
        name: 'Tony Scruggs',
        role: 'President',
        image: '/images/leadership/tony-scruggs.png',
      },
      {
        id: 'eric-diller',
        name: 'Eric Diller',
        role: 'Vice President',
        image: '/images/leadership/eric-diller.png',
      },
      {
        id: 'dylan-scruggs',
        name: 'Dylan Scruggs',
        role: 'Finance Manager',
        image: '/images/leadership/dylan-scruggs.png',
      },
    ] satisfies TeamMember[],
  },
  mission: {
    title: 'Mission & Values',
    body: 'Service Complete Electric is devoted to being exceptional. Our mission is to deliver safe, creative, and exceptional electrical solutions while building lasting partnerships in our community and industry.',
  },
  certifications: {
    title: 'Certifications',
    items: [
      {
        title: 'FASA/BASA',
        description: 'Our team is certified to install fire and security systems',
      },
    ],
  },
  associations: {
    title: 'Associations',
    items: [
      'Associated Builders and Contractors',
      'Florida Electrical Apprenticeship & Training',
      'Electrical Council of Florida',
      'National Association of Women in Construction',
    ],
  },
}
