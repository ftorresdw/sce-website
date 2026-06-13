import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || ''
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'sce-website',
  title: 'Service Complete Electric',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('About Page')
              .child(S.document().schemaType('aboutPageSettings').documentId('aboutPageSettings')),
            S.listItem()
              .title('Newsroom Settings')
              .child(S.document().schemaType('newsroomSettings').documentId('newsroomSettings')),
            S.divider(),
            S.documentTypeListItem('blogPost').title('Blog Posts'),
            S.documentTypeListItem('awardGroup').title('Award Groups'),
            S.documentTypeListItem('teamMember').title('Leadership Team'),
          ]),
    }),
    visionTool({ defaultApiVersion: '2024-06-01' }),
  ],
  schema: {
    types: schemaTypes,
  },
})
