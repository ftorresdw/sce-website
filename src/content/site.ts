export type NavItem = { label: string; href: string }

export type Stat = { label: string; value: string; description: string }

export type PortfolioItem = {
  title: string
  category: string
  description: string
  cta: string
}

export type ValuePillar = {
  title: string
  description: string
  bullets: string[]
}

export type Service = {
  id: string
  title: string
  summary: string
  description: string
  bullets: string[]
  details: string[]
}

export const site = {
  brand: {
    name: 'Service Complete Electric',
    shortName: 'SCE',
    logos: {
      white: '/images/logo-white.png',
      full: '/images/logo-full.png',
    },
  },
  nav: {
    main: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Newsroom', href: '#portfolio' },
      { label: 'Contact Us', href: '/contact' },
    ] satisfies NavItem[],
    hiringBanner: {
      label: "We're Hiring",
      href: '/careers',
    },
  },
  hero: {
    eyebrow: "Electrifying the World's Most Iconic Entertainment Destinations",
    headline: "Electrifying the World's Most Iconic Entertainment Destinations",
    subhead:
      "From Universal Studios' Epic Universe to the most exclusive hospitality venues, Service Complete Electric delivers cutting-edge electrical solutions for the entertainment industry's biggest projects.",
    primaryCta: { label: 'View Our Projects', href: '#portfolio' },
    secondaryCta: { label: 'Work With Us', href: '#contact' },
    highlightPhrase: "World's Most",
    image: '/images/hero-epic-universe.png',
  },
  about: {
    title: "Central Florida's Premier Electrical Contractor",
    body: [
      "Since 1995, Service Complete Electric has been the trusted electrical contractor for Central Florida's most prestigious projects. We specialize in high-end hospitality and entertainment electrical work, delivering exceptional results for clients like Universal Studios.",
      "Our team combines technical expertise with creative problem-solving to tackle the industry's most complex challenges. From the magical world of Harry Potter to the groundbreaking Epic Universe, we bring visions to life with safe, reliable electrical systems.",
    ],
    stats: [
      { value: 'Since 1995', label: 'Nearly 30 years of excellence', description: 'Nearly 30 years of excellence' },
      { value: 'Expert Team', label: 'Licensed professionals', description: 'Licensed professionals' },
      { value: 'Award Winning', label: 'Industry recognized', description: 'Industry recognized' },
      { value: 'Full Service', label: 'Design to maintenance', description: 'Design to maintenance' },
    ] satisfies Stat[],
    gallery: [
      {
        src: '/images/about/transformers.png',
        alt: 'Transformers: The Ride-3D at Universal Orlando Resort',
      },
      {
        src: '/images/about/classroom.png',
        alt: 'Students in a classroom raising their hands',
      },
      {
        src: '/images/about/construction.png',
        alt: 'Construction site with excavator and concrete pipe installation',
      },
      {
        src: '/images/about/simpsons.png',
        alt: 'The Simpsons Ride entrance at Universal Studios',
      },
    ],
  },
  portfolio: {
    title: 'Powering Iconic Projects',
    intro:
      "We’ve had the privilege of working on some of the world’s most recognized entertainment and hospitality destinations.",
    items: [
      {
        title: 'Universal Epic Universe',
        category: 'Theme Park Development',
        description:
          "Complete electrical infrastructure for Universal’s newest and most ambitious theme park.",
        cta: 'View Project Details',
      },
      {
        title: 'Harry Potter Wizarding World',
        category: 'Theme Park Attraction',
        description:
          'Advanced electrical systems and show lighting for the magical world of Harry Potter.',
        cta: 'Learn More',
      },
      {
        title: 'Men in Black Experience',
        category: 'Interactive Attraction',
        description: 'Complex electrical and control systems for interactive ride experiences.',
        cta: 'Learn More',
      },
      {
        title: 'Luxury Resort Properties',
        category: 'Hospitality',
        description: 'High-end electrical solutions for premier resort destinations throughout Central Florida.',
        cta: 'Learn More',
      },
    ] satisfies PortfolioItem[],
  },
  values: {
    title: 'Built on Excellence',
    intro:
      "Our core values guide every decision we make and every project we undertake. They’re not just words—they’re the principles that define who we are.",
    pillars: [
      {
        title: 'Safe',
        description:
          'Safety is our top priority and the foundation of every project. We follow industry-leading safety practices to protect our team, clients, and the public.',
        bullets: ['Comprehensive safety training', 'Regular safety audits', 'Zero-incident goal', 'OSHA compliance'],
        theme: 'blue',
      },
      {
        title: 'Creative',
        description:
          'Innovation drives our approach to problem-solving. We leverage decades of experience to develop creative solutions for even the most challenging electrical projects.',
        bullets: ['Innovative design solutions', 'Value engineering', 'Custom problem-solving', 'Cutting-edge technology'],
        theme: 'orange',
      },
      {
        title: 'Exceptional',
        description:
          'Excellence is our standard. We’re committed to delivering exceptional work on every project and being valued partners in our community and industry.',
        bullets: ['Award-winning service', 'Industry recognition', 'Community involvement', 'Professional excellence'],
        theme: 'purple',
      },
    ] satisfies (ValuePillar & { theme: 'blue' | 'orange' | 'purple' })[],
    highlights: [
      { value: '30+', label: 'Years Experience' },
      { value: '100%', label: 'Safety Focused' },
    ],
  },
  services: {
    title: 'Comprehensive Electrical Solutions',
    intro:
      'From initial design to final installation and ongoing maintenance, we provide full-service electrical contracting for projects of all sizes and complexity.',
    items: [
      {
        id: 'design-engineering',
        title: 'Design & Engineering',
        summary: 'Innovative electrical design and engineering for complex, mission-critical projects.',
        description:
          'Our in-house engineering team creates innovative, cost-effective designs that ensure safety and reliability while meeting aggressive timelines.',
        bullets: ['Electrical Design', 'Load Calculations', '3D Modeling', 'Value Engineering'],
        details: [
          'From concept through construction documents, we partner with owners, architects, and contractors to deliver coordinated electrical systems.',
          'We specialize in value engineering without compromising safety, code compliance, or long-term performance.',
        ],
      },
      {
        id: 'hospitality-entertainment',
        title: 'Hospitality & Entertainment',
        summary: 'Electrical solutions for theme parks, resorts, and world-class entertainment venues.',
        description:
          'Specialized electrical solutions for theme parks, resorts, hotels, and entertainment venues—including show lighting, ride systems, and complex control networks.',
        bullets: ['Theme Park Attractions', 'Resort Properties', 'Entertainment Venues', 'Interactive Systems'],
        details: [
          'We have supported some of Central Florida’s most iconic hospitality and entertainment destinations, from attraction builds to resort expansions.',
          'Our team understands the unique coordination, scheduling, and safety demands of live guest environments.',
        ],
      },
      {
        id: 'commercial-electrical',
        title: 'Commercial Electrical',
        summary: 'Full-service commercial electrical contracting from design through installation.',
        description:
          'Comprehensive electrical services for commercial buildings and corporate facilities. From design to installation, we deliver reliable and efficient solutions.',
        bullets: ['Office Buildings', 'Retail Spaces', 'Corporate Campuses', 'Mixed-Use Developments'],
        details: [
          'Whether new construction or tenant improvement, we scale our crews and project management to match your schedule and budget.',
          'We maintain clear communication with all stakeholders to keep projects on track and code-compliant.',
        ],
      },
      {
        id: 'industrial-electrical',
        title: 'Industrial Electrical',
        summary: 'Robust power distribution and controls for manufacturing and industrial facilities.',
        description:
          'Heavy-duty electrical systems for manufacturing, processing, and industrial facilities requiring robust power distribution and control systems.',
        bullets: ['Power Distribution', 'Motor Controls', 'Process Automation', 'Maintenance Services'],
        details: [
          'We design and install systems built for demanding operational environments and continuous uptime requirements.',
          'Our maintenance and support capabilities help facilities keep critical equipment running safely and efficiently.',
        ],
      },
    ] satisfies Service[],
  },
  contact: {
    title: "Let's Discuss Your Project",
    intro:
      'Ready to bring your vision to life? Contact us for a consultation and see how we can power your next project.',
    cta: { label: 'Get In Touch', href: 'mailto:info@sceflorida.com' },
    note: 'This is a placeholder contact method for the first pass.',
  },
  footer: {
    tagline: 'Central Florida Electrical Contractor',
    safety: {
      title: 'Safety',
      headline: 'Safety is our top priority',
      description:
        'Safety is the foundation of every project. We follow industry-leading safety practices to protect our team, clients, and the public.',
      items: [
        'Comprehensive safety training',
        'Regular safety audits',
        'Zero-incident goal',
        'OSHA compliance',
      ],
      highlights: [
        { value: 'STEP Platinum', label: 'Safety Excellence' },
        { value: '100%', label: 'Safety Focused' },
      ],
    },
  },
} as const

