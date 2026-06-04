export type BlogTag =
  | 'Awards'
  | 'Company News'
  | 'Services'
  | 'Theme Parks'
  | 'Hospitality'

export type BlogPostBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'list'; content: string[] }

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: BlogTag[]
  body: BlogPostBlock[]
}

export const newsroom = {
  title: 'Newsroom',
  intro:
    'Press releases, project highlights, and company news from Service Complete Electric.',
  tags: ['Awards', 'Company News', 'Services', 'Theme Parks', 'Hospitality'] as const satisfies readonly BlogTag[],
  posts: [
    {
      slug: 'service-complete-electric-earns-7-industry-awards-including-2-top-honors',
      title: 'Service Complete Electric earns 7 industry awards, including 2 top honors',
      date: '2025-11-18',
      excerpt:
        'Leading electrical contractor recognized for Excellence in Construction with two Eagle Awards and five additional honors from ABC Central Florida.',
      tags: ['Awards', 'Theme Parks'],
      body: [
        {
          type: 'paragraph',
          content:
            'OVIEDO, Fla. (Oct. 20, 2025) — Service Complete Electric (SCE) has been delivering safe, creative and exceptional projects for clients for three decades. The leading electrical firm was recently recognized in the industry for doing just that, seven times over.',
        },
        {
          type: 'paragraph',
          content:
            'The Associated Builders and Contractors of Central Florida honored SCE’s work with seven recognitions at its annual Excellence in Construction awards, including with two of the top Eagle Awards.',
        },
        {
          type: 'paragraph',
          content:
            'SCE won for its work on the Universal Restaurant Facade and Show Lighting project and the Universal Studios - DreamWorks Land project. This is the 16th time SCE has been honored with the award and the 10th consecutive year.',
        },
        {
          type: 'paragraph',
          content:
            'In addition to the Eagle Awards, SCE was further recognized with multiple Awards of Merit for its work on the Universal Data Center, Universal Accent and Pedestrian Lighting, Super Nintendo World and Universal Main Gate. The company also received an Honorable Mention for work on the Universal Bistro.',
        },
        {
          type: 'paragraph',
          content:
            '“Our team works hard every day to live up to our values of excellence,” said Tony Scruggs, president of SCE. “It’s nice to see that work recognized by such an important industry partner. The Eagle Awards are a yearly badge of honor in SCE’s long history.”',
        },
        {
          type: 'paragraph',
          content:
            'The DreamWorks project took SCE back to familiar ground, as they had previously worked on the area in the 1990s. The work required full electrical demolition and buildout to support newly designed areas themed around popular DreamWorks characters.',
        },
        {
          type: 'paragraph',
          content:
            'SCE worked within an active park and compact footprint, coordinating with multiple trades, the GC, and others to complete the project with strong attention to detail and schedule tracking.',
        },
        {
          type: 'paragraph',
          content:
            'For the Universal Restaurant Facade and Show Lighting project, SCE was tasked with creating the illusion of a fully operational building on the new Epic Universe campus while integrating complex systems to surrounding areas. The job required seamless communication with others with detailed preconstruction planning, extensive tracking and collaboration.',
        },
        {
          type: 'paragraph',
          content:
            'Representatives from SCE accepted the awards at a ceremony on Saturday, Oct. 18, at the Hilton Orlando.',
        },
        {
          type: 'paragraph',
          content:
            'For more information about the Eagle Awards, visit https://abccentralflorida.com/. For more information about SCE, visit https://www.sceflorida.com/.',
        },
      ],
    },
    {
      slug: 'blog-post-title-one-8k46x',
      title: 'Service Complete Electric announces new service department',
      date: '2024-11-15',
      excerpt:
        'SCE today announced its new service department, offering commercial customers repairs, troubleshooting, diagnostics, preventative work, and more.',
      tags: ['Company News', 'Services'],
      body: [
        {
          type: 'paragraph',
          content:
            'OVIEDO, Fla. (Nov. 15, 2024) — As Central Florida’s premier electrical firm, Service Complete Electric has built a sterling reputation in the hospitality, industrial and commercial areas. The company has now introduced a new way to continue its relationships and stellar service.',
        },
        {
          type: 'paragraph',
          content:
            'SCE today announced its new service department, which will allow its commercial customers access to repairs, troubleshooting, diagnostics, preventative work and more.',
        },
        {
          type: 'paragraph',
          content: 'Service areas and capabilities include:',
        },
        {
          type: 'list',
          content: [
            'Motor control, relay logic, and PLC control panels and systems',
            'Lighting systems, including energy-saving control systems and retrofit to LED',
            'Parking lot lighting',
            'Classified/explosion-proof systems',
            'Short circuit coordination studies and arc flash studies',
            'Stand-by (UPS) and generator design and installation',
            'Healthcare specialty wiring',
            'Technology systems, including voice, data, CCTV, fiber optic, and ethernet',
            'Infrared inspections of electrical and mechanical systems. IC Certified Inspector.',
            'Engineering and design department',
          ],
        },
        {
          type: 'paragraph',
          content:
            '“This expansion is a direct response to the demand for high-quality, reliable electrical support,” said Tony Scruggs, President of SCE. “We have built a strong reputation for exceptional work since 1995, as well as offering a wide range of capabilities in-house for our customers. I am proud that this will be an expansion of that.”',
        },
        {
          type: 'paragraph',
          content:
            'SCE has been serving Central Florida since 1995. The company strives to always live up to its standards of safety, creativity, and exceptional work. SCE has extensive experience in the hospitality industry, working on some of the largest theme park projects in the area. In addition, the company has been honored numerous times for its work in the industrial and commercial sectors.',
        },
        {
          type: 'paragraph',
          content: 'For more information about SCE, visit https://www.sceflorida.com/.',
        },
      ],
    },
    {
      slug: 'blog-post-title-two-4szmh',
      title: 'SCE earns two Eagle Awards for Minion Café and Disney Project Moana',
      date: '2024-10-28',
      excerpt:
        'The electrical firm received two Eagle Awards for Excellence in Construction for work on Illumination’s Minion Café at Universal Studios and the Disney Project Moana Office Building.',
      tags: ['Awards', 'Theme Parks', 'Hospitality'],
      body: [
        {
          type: 'paragraph',
          content:
            'OVIEDO, Fla. (Oct. 28, 2024) — Delivering exceptional work has always been part of the mission at Service Complete Electric, a leading electrical contractor. Now, SCE has added to that reputation.',
        },
        {
          type: 'paragraph',
          content:
            'The electrical firm received two Eagle Awards for Excellence in Construction from the Associated Builders and Contractors of Central Florida. SCE took home the awards for its work on the Illumination’s Minion Café at Universal Studios and the Disney Project Moana Office Building.',
        },
        {
          type: 'paragraph',
          content:
            'The awards are given by the local trade organization to represent the top projects of the year in the construction industry. This is the 14th time SCE has been honored with the award and the ninth consecutive year.',
        },
        {
          type: 'paragraph',
          content:
            '“Regardless of recognition, we’ve worked hard at SCE to instill a culture of excellence,” said Tony Scruggs, president of SCE. “Our team is proud to deliver quality work on time, on budget, and safely. It’s an honor to be recognized for that yet again with the Eagle Award and to be in such strong company within our industry.”',
        },
        {
          type: 'paragraph',
          content:
            'On the Minion Café project, SCE handled demolition of electrical aspects of the existing Monsters Café, as well as completion of electrical for the new Universal Studios eatery. This included work on millwork lighting, as well as the custom light fixtures on the front of the building, which required SCE’s expertise because of how complicated and delicate the job was.',
        },
        {
          type: 'paragraph',
          content:
            'The Disney Project Moana Office Building was an expansion project for the cruise terminal offices. The project included installation of electrical systems, including lighting, power distribution and energy management solutions, all with occupied floors in the building.',
        },
        {
          type: 'paragraph',
          content:
            'SCE drew on nearly 30 years of experience in the field, with deep expertise in the attraction and commercial spaces to deliver the jobs.',
        },
        {
          type: 'paragraph',
          content:
            'Representatives from SCE accepted the awards at a ceremony on Saturday, Oct. 26, at the Hilton Orlando.',
        },
        {
          type: 'paragraph',
          content:
            'For more information about the Eagle Awards, visit https://abccentralflorida.com/. For more information about SCE, visit https://www.sceflorida.com/.',
        },
      ],
    },
    {
      slug: 'blog-post-title-three-by96h',
      title: 'Service Complete Electric receives Eagle Award for Aquatica Orlando project',
      date: '2023-10-31',
      excerpt:
        'SCE received an Eagle Award and two merit awards for electrical work on a new eight-acre parking lot at Aquatica Orlando, completed ahead of schedule and under budget.',
      tags: ['Awards', 'Theme Parks'],
      body: [
        {
          type: 'paragraph',
          content:
            'OVIEDO, Fla. (Oct. 31, 2023) – Service Complete Electric, a local leading electrical contractor, has been recognized for Excellence in Construction by the Central Florida chapter of Associated Builders and Contractors.',
        },
        {
          type: 'paragraph',
          content:
            'SCE received an Eagle Award and two merit awards for its work on a new parking lot at Aquatica Orlando, performing the electrical work for the project under general contractor Austin Commercial.',
        },
        {
          type: 'paragraph',
          content:
            'SCE’s scope of work on the eight-acre parking lot project included furnishing and installing a new lighting panel controller, feeders from existing switchboard to new lighting panel, underground conduit, branch wire, pull boxes, terminations, concrete light poles and light pole fixtures. The firm also had to furnish and install directionally-bored conduit from a back-of-house building to an easement adjacent to the new parking lot. The work began in January 2022 and was completed in August 2022 – both ahead of schedule and under budget.',
        },
        {
          type: 'paragraph',
          content:
            '“We were able to finish our part of the Aquatica parking lot project without incident, under budget and earlier than anticipated,” said Tony Scruggs, president of SCE. “This project was overall a huge success for everyone involved and we’re thankful to our employees and partners for making it possible. Thank you to ABC of Central Florida for this honorable recognition.”',
        },
        {
          type: 'paragraph',
          content:
            'Throughout the project, SCE came up with creative solutions to problems like finding the opportunity to relocate the new lighting panel to a building much closer than originally planned. When SCE was a week and half away from the deadline, Aquatica asked if the project could be finished a week early to accommodate an event. SCE was able to meet the request and finish the project early and under budget.',
        },
        {
          type: 'paragraph',
          content:
            'Each year, Associated Builders and Contractors honors the best contractors in the business with its highly coveted Eagle Awards. This is the tenth Eagle Award the company has won.',
        },
        {
          type: 'paragraph',
          content:
            'Prior to being contracted for this job, SCE had successfully completed work on many attractions projects for other theme parks including Disney, Universal Orlando Resort and LEGOLAND.',
        },
        {
          type: 'paragraph',
          content:
            'Service Complete Electric has been serving the Greater Orlando community for over 25 years. The company is known for its extensive work on hospitality, entertainment, and commercial projects. SCE’s team of experts are devoted to clients from the very beginning of the construction process through completion and are always on the lookout for ways to cut unnecessary cost and save time.',
        },
        {
          type: 'paragraph',
          content: 'For more information about Service Complete Electric, visit https://www.sceflorida.com.',
        },
      ],
    },
  ] as BlogPost[],
  about: {
    title: 'About Service Complete Electric',
    body: 'Founded August 1995, Service Complete Electric has been serving the Central Florida community for nearly 30 years. The company has a diverse electrical background with extensive experience on hospitality, entertainment and commercial projects. SCE’s experienced staff takes projects from conception and initial budgets through construction to final completion. The company strives to complete its work based on three key pillars: safe, creative and exceptional. To learn more, visit https://www.sceflorida.com or call 407-679-3500.',
  },
  mediaContact: {
    title: 'Media Contact',
    name: 'Will Wellons',
    company: 'Wellons Communications',
    email: 'will@wellonscommunications.com',
    phone: '407-339-0879',
  },
} as const

export function formatPostDate(isoDate: string) {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function getPostBySlug(slug: string) {
  return newsroom.posts.find((post) => post.slug === slug)
}

export function getPostsByTag(tag: BlogTag | null) {
  const sorted = [...newsroom.posts].sort((a, b) => b.date.localeCompare(a.date))
  if (!tag) return sorted
  return sorted.filter((post) => post.tags.includes(tag))
}

export function getAllTags() {
  return [...newsroom.tags]
}
