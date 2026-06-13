import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'headline', type: 'string' }),
        defineField({ name: 'subhead', type: 'text', rows: 3 }),
        defineField({ name: 'highlightPhrase', type: 'string' }),
        defineField({ name: 'primaryCta', type: 'cta' }),
        defineField({ name: 'secondaryCta', type: 'cta' }),
        defineField({ name: 'image', type: 'string', description: 'Hero image path, e.g. /images/hero-epic-universe.png' }),
      ],
    }),
    defineField({
      name: 'nav',
      type: 'object',
      fields: [
        defineField({ name: 'main', type: 'array', of: [{ type: 'navItem' }] }),
        defineField({
          name: 'hiringBanner',
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'href', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contact',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 3 }),
        defineField({ name: 'cta', type: 'cta' }),
        defineField({ name: 'note', type: 'text', rows: 2 }),
      ],
    }),
    defineField({
      name: 'portfolio',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 3 }),
        defineField({ name: 'items', type: 'array', of: [{ type: 'portfolioItem' }] }),
      ],
    }),
    defineField({
      name: 'footer',
      type: 'object',
      fields: [
        defineField({ name: 'tagline', type: 'string' }),
        defineField({
          name: 'safety',
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'headline', type: 'string' }),
            defineField({ name: 'description', type: 'text', rows: 3 }),
            defineField({ name: 'items', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'highlights', type: 'array', of: [{ type: 'statItem' }] }),
          ],
        }),
      ],
    }),
  ],
})

export const aboutPageSettings = defineType({
  name: 'aboutPageSettings',
  title: 'About Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'meta',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 2 }),
      ],
    }),
    defineField({
      name: 'intro',
      type: 'object',
      fields: [
        defineField({ name: 'headline', type: 'string' }),
        defineField({ name: 'mission', type: 'text', rows: 4 }),
      ],
    }),
    defineField({ name: 'recognitionBar', type: 'array', of: [{ type: 'statItem' }] }),
    defineField({
      name: 'awards',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 3 }),
        defineField({ name: 'hint', type: 'string' }),
      ],
    }),
    defineField({
      name: 'leadership',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'mission',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'body', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'credentials',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 3 }),
        defineField({
          name: 'certifications',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'text', rows: 2 }),
              ],
            },
          ],
        }),
        defineField({
          name: 'associations',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [defineField({ name: 'name', type: 'string' })],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 3 }),
        defineField({ name: 'primary', type: 'cta' }),
        defineField({ name: 'secondary', type: 'cta' }),
        defineField({ name: 'tertiary', type: 'cta' }),
      ],
    }),
  ],
})

export const newsroomSettings = defineType({
  name: 'newsroomSettings',
  title: 'Newsroom Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'intro', type: 'text', rows: 3 }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available blog tags for filtering',
    }),
    defineField({
      name: 'about',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'body', type: 'text', rows: 5 }),
      ],
    }),
    defineField({
      name: 'mediaContact',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'name', type: 'string' }),
        defineField({ name: 'company', type: 'string' }),
        defineField({ name: 'email', type: 'string' }),
        defineField({ name: 'phone', type: 'string' }),
      ],
    }),
  ],
})

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'date', type: 'date', validation: (rule) => rule.required() }),
    defineField({ name: 'excerpt', type: 'text', rows: 3, validation: (rule) => rule.required() }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Awards', value: 'Awards' },
          { title: 'Company News', value: 'Company News' },
          { title: 'Services', value: 'Services' },
          { title: 'Theme Parks', value: 'Theme Parks' },
          { title: 'Hospitality', value: 'Hospitality' },
        ],
      },
    }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'blogPostBlock' }] }),
  ],
  orderings: [
    {
      title: 'Date, newest first',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
})

export const awardGroup = defineType({
  name: 'awardGroup',
  title: 'Award Group',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'slug',
      title: 'ID',
      description: 'Stable identifier, e.g. abc-eagle',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'order', type: 'number', initialValue: 0 }),
    defineField({ name: 'instances', type: 'array', of: [{ type: 'awardInstance' }] }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'id.current' },
  },
})

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'slug',
      title: 'ID',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'bio', type: 'text', rows: 3 }),
    defineField({
      name: 'imageUrl',
      type: 'string',
      description: 'Path under /public, e.g. /images/leadership/tony-scruggs.png',
    }),
    defineField({ name: 'order', type: 'number', initialValue: 0 }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
})
