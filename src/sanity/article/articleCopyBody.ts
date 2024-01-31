import {DocumentTextIcon} from '@sanity/icons'
import { Heading, Paragraph, Quote,Statement } from 'components/Article/ArticleRichText'
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
          { title: "Statement", value: "statement", component: Statement },
          { title: "Paragraph", value: "paragraph", component: Paragraph },
          { title: "H2", value: "h2", component: Heading },
          { title: "Quote", value: "blockquote", component: Quote },
        ],
        lists: [
          { title: "Bullet", value: "bullet" },
          { title: "Number", value: "number" },
        ],
        marks: {
          // Decorators usually describe a single property – e.g. a typographic
          // preference or highlighting by editors.
          decorators: [
            { title: "Strong", value: "strong" },
            { title: "Emphasis", value: "em" },
          ],
          // Annotations can be any object structure – e.g. a link or a footnote.
          annotations: [
            {
              name: "link",
              type: "object",
              title: "URL",
              fields: [
                {
                  title: "URL",
                  name: "href",
                  type: "url",
                },
              ],
            },
          ],
        }
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
