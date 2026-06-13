import { createClient } from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const outPath = path.join(rootDir, 'src/content/generated/content.json')

const projectId = process.env.VITE_SANITY_PROJECT_ID
const dataset = process.env.VITE_SANITY_DATASET || 'production'
const apiVersion = '2024-06-01'

const emptyPayload = {
  site: null,
  aboutPage: null,
  newsroom: null,
  awardGroups: null,
  teamMembers: null,
}

function writePayload(payload) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)
}

if (!projectId) {
  console.log('[cms] No VITE_SANITY_PROJECT_ID set — using static content only.')
  writePayload(emptyPayload)
  process.exit(0)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

const query = `{
  "site": *[_type == "siteSettings"][0]{
    hero,
    nav,
    contact,
    portfolio,
    footer
  },
  "aboutPage": *[_type == "aboutPageSettings"][0]{
    meta,
    intro,
    recognitionBar,
    awards,
    leadership,
    mission,
    credentials,
    cta
  },
  "newsroom": *[_type == "newsroomSettings"][0]{
    title,
    intro,
    tags,
    about,
    mediaContact,
    "posts": *[_type == "blogPost"] | order(date desc) {
      "slug": slug.current,
      title,
      "date": date,
      excerpt,
      tags,
      body
    }
  },
  "awardGroups": *[_type == "awardGroup"] | order(order asc) {
    "id": id.current,
    title,
    instances[]{year, description}
  },
  "teamMembers": *[_type == "teamMember"] | order(order asc) {
    "id": id.current,
    name,
    role,
    bio,
    imageUrl
  }
}`

try {
  const data = await client.fetch(query)

  const payload = {
    site: data.site ?? null,
    aboutPage: data.aboutPage ?? null,
    newsroom: data.newsroom?.posts?.length
      ? {
          title: data.newsroom.title,
          intro: data.newsroom.intro,
          tags: data.newsroom.tags,
          about: data.newsroom.about,
          mediaContact: data.newsroom.mediaContact,
          posts: data.newsroom.posts.map((post) => ({
            ...post,
            date: post.date?.slice(0, 10),
            body: (post.body ?? []).map((block) =>
              block.type === 'list'
                ? { type: 'list', content: block.items ?? [] }
                : { type: 'paragraph', content: block.content ?? '' },
            ),
          })),
        }
      : data.newsroom
        ? {
            title: data.newsroom.title,
            intro: data.newsroom.intro,
            tags: data.newsroom.tags,
            about: data.newsroom.about,
            mediaContact: data.newsroom.mediaContact,
            posts: null,
          }
        : null,
    awardGroups:
      data.awardGroups?.length > 0
        ? data.awardGroups.map(({ id, title, instances }) => ({ id, title, instances }))
        : null,
    teamMembers:
      data.teamMembers?.length > 0
        ? data.teamMembers.map(({ id, name, role, bio, imageUrl }) => ({
            id,
            name,
            role,
            bio: bio ?? '',
            image: imageUrl ?? '',
          }))
        : null,
  }

  writePayload(payload)
  console.log(`[cms] Synced content from Sanity (${dataset}) → src/content/generated/content.json`)
} catch (error) {
  console.error('[cms] Failed to fetch Sanity content:', error)
  process.exit(1)
}
