import {EditIcon} from '@sanity/icons'
import { Paragraph } from 'components/Article/ArticleRichText'
import {defineField, defineType} from 'sanity'

export const articleCategoryType = defineType({
  type: 'document',
  name: 'category',
  title: 'Category',
  icon: EditIcon,

  fields: [
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: "block",
          title: "Block",
          styles: [
            { title: "Paragraph", value: "paragraph", component: Paragraph },
          ]
        }
      ],
    },)
  ],
})
