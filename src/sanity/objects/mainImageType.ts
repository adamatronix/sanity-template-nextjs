import {defineField, defineType} from 'sanity'

export const mainImageType = defineType({
  type: 'image',
  name: "mainImage",
  title: 'Main Image',
  fields: [
    defineField({
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity.",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
    })
  ]
})
