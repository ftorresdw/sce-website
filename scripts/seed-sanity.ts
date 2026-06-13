import { createClient } from '@sanity/client'
import { aboutPage, awardGroups } from '../src/content/about.ts'
import { newsroom } from '../src/content/newsroom.ts'
import { site } from '../src/content/site.ts'

const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.VITE_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production'
const token = process.env.SANITY_AUTH_TOKEN
const apiVersion = '2024-06-01'

if (!projectId) {
  console.error('Set VITE_SANITY_PROJECT_ID before seeding.')
  process.exit(1)
}

if (!token) {
  console.error('Set SANITY_AUTH_TOKEN with Editor permissions before seeding.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

async function seed() {
  console.log(`Seeding Sanity project ${projectId} (${dataset})...`)

  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    hero: site.hero,
    nav: site.nav,
    contact: site.contact,
    portfolio: site.portfolio,
    footer: site.footer,
  })

  await client.createOrReplace({
    _id: 'aboutPageSettings',
    _type: 'aboutPageSettings',
    meta: aboutPage.meta,
    intro: aboutPage.intro,
    recognitionBar: aboutPage.recognitionBar.map((item) => ({
      _type: 'statItem',
      value: item.label,
      label: item.sublabel,
      description: item.sublabel,
    })),
    awards: aboutPage.awards,
    leadership: { title: aboutPage.leadership.title, intro: aboutPage.leadership.intro },
    mission: aboutPage.mission,
    credentials: aboutPage.credentials,
    cta: aboutPage.cta,
  })

  await client.createOrReplace({
    _id: 'newsroomSettings',
    _type: 'newsroomSettings',
    title: newsroom.title,
    intro: newsroom.intro,
    tags: [...newsroom.tags],
    about: newsroom.about,
    mediaContact: newsroom.mediaContact,
  })

  for (const post of newsroom.posts) {
    await client.createOrReplace({
      _id: `blogPost-${post.slug}`,
      _type: 'blogPost',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      date: post.date,
      excerpt: post.excerpt,
      tags: [...post.tags],
      body: post.body.map((block) =>
        block.type === 'list'
          ? { _type: 'blogPostBlock', type: 'list', items: block.content }
          : { _type: 'blogPostBlock', type: 'paragraph', content: block.content },
      ),
    })
    console.log(`  blog post: ${post.title}`)
  }

  for (const [index, group] of awardGroups.entries()) {
    await client.createOrReplace({
      _id: `awardGroup-${group.id}`,
      _type: 'awardGroup',
      id: { _type: 'slug', current: group.id },
      title: group.title,
      order: index,
      instances: group.instances.map((instance) => ({
        _type: 'awardInstance',
        year: instance.year,
        description: instance.description,
      })),
    })
    console.log(`  award group: ${group.title}`)
  }

  for (const [index, member] of aboutPage.leadership.members.entries()) {
    await client.createOrReplace({
      _id: `teamMember-${member.id}`,
      _type: 'teamMember',
      id: { _type: 'slug', current: member.id },
      name: member.name,
      role: member.role,
      bio: member.bio,
      imageUrl: member.image,
      order: index,
    })
    console.log(`  team member: ${member.name}`)
  }

  console.log('Seed complete. Run npm run cms:sync to pull content into the site build.')
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
