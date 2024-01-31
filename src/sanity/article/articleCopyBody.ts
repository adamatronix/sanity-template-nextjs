import {DocumentTextIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const articleCopyBody = defineType({
  type: 'object',
  name: "articleCopyBody",
  title: 'Article Copy Body',
  fields: [
  {
    name: 'content',
    title: 'Content',
    type: 'array',
    of: [
      {
        type: "block",
        title: "Block",
        styles: [
          { title: "Paragraph", value: "paragraph" },
        ]
      }
    ],
  },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Copy Body',
        icon: DocumentTextIcon
      }
    }
  },
})
