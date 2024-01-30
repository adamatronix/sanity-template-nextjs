import {defineType} from 'sanity'

export const featuredImageType = defineType({
  type: 'object',
  name: "featuredImage",
  title: 'Featured Image',
  fields: [
   {
      name: 'desktopFeatured',
      title: 'Desktop',
      type: 'mainImage'
    },
    {
      name: 'mobileFeatured',
      title: 'Mobile',
      type: 'mainImage'
    },
  ]
})
