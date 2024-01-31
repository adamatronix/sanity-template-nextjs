import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  type: 'document',
  name: 'article',
  title: 'Article',
  icon: DocumentTextIcon,

  fields: [
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
      }
    }),
    defineField({
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
    }),
    defineField({
      name: "summary",
      type: "featuredImage",
      title: "Summary",
    }),
    defineField({
      name: "hero",
      type: "featuredImage",
      title: "Hero",
    }),
    defineField({
      name: 'articleModules',
      type: 'array',
      title: 'Article modules',
      of: [
        { type: 'articleCarousel' },
        { type: 'articleCopyBody' },
        { type: 'articleVideo' },
        { type: 'articleImage90' },
        { type: 'articleImage50' },
        { type: 'articleImage5050' }
      ]
    }),
  ],
})
