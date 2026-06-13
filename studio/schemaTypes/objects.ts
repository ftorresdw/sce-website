import { defineField, defineType } from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'href', type: 'string', validation: (rule) => rule.required() }),
  ],
})

export const statItem = defineType({
  name: 'statItem',
  title: 'Stat',
  type: 'object',
  fields: [
    defineField({ name: 'value', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'string' }),
  ],
})

export const navItem = defineType({
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'href', type: 'string', validation: (rule) => rule.required() }),
  ],
})

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'category', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text', rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: 'cta', type: 'string' }),
    defineField({ name: 'image', type: 'string', description: 'Path under /public, e.g. /images/portfolio-epic-universe.png' }),
  ],
})

export const blogPostBlock = defineType({
  name: 'blogPostBlock',
  title: 'Content Block',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      options: { list: ['paragraph', 'list'] },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'content', type: 'text', rows: 4, hidden: ({ parent }) => parent?.type !== 'paragraph' }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ parent }) => parent?.type !== 'list',
    }),
  ],
})

export const awardInstance = defineType({
  name: 'awardInstance',
  title: 'Award Instance',
  type: 'object',
  fields: [
    defineField({ name: 'year', type: 'number', validation: (rule) => rule.required().integer().min(1995) }),
    defineField({ name: 'description', type: 'text', rows: 2, validation: (rule) => rule.required() }),
  ],
})
