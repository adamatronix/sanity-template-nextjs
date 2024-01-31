import {EditIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const articleAuthorType = defineType({
  type: 'document',
  name: 'author',
  title: 'Author',
  icon: EditIcon,

  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
    })
  ],
})
