import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType,isRecord,isString} from 'sanity'
import { ArticlePreview } from './ArticlePreview'
import {previewSecretId} from '../constants'
import {apiVersion} from '../env'
import {getSecret} from '../secret'

export const articleType = defineType({
  type: 'document',
  name: 'article',
  title: 'Article',
  icon: DocumentTextIcon,
  options: {
    views(S) {
      return [S.view.form().title('Content'), S.view.component(ArticlePreview).title('Preview')]
    },
    async url(ctx) {
      const {_id: id, _type: type, slug} = ctx.document
      const currentSlug = isRecord(slug) && isString(slug.current) ? slug.current : undefined

      if (!currentSlug) return undefined

      const client = ctx.getClient({apiVersion})
      const secret = await getSecret({
        client,
        id: previewSecretId,
        createIfNotExists: true,
      })

      if (!secret) return undefined

      return `/api/sanity/preview?type=${type}&id=${id}&slug=${currentSlug}&secret=${secret}`
    },
  },
  fields: [
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    }),
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}]
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}]
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'tags',
      options: {
        includeFromRelated: 'tags'
      }
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
        { type: 'articleImage100' },
        { type: 'articleImageInline' },
        { type: 'articleImage50' },
        { type: 'articleImage5050' }
      ]
    }),
  ],
})
