import {ImagesIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const articleCarousel = defineType({
  name: "articleCarousel",
  type: "object",
  title: "Article Carousel",
  fields: [
    {
      title: 'Stack',
      name: 'stack',
      type: 'boolean',
      description: 'Removes bottom margin allowing it to be stacked on top of the next module.'
    },
    {
     name: "images",
     type: "array",
     title: "Images",
     of: [
      {
        type: 'mainImage'
      }
     ]
   },
  ],
  initialValue: {
    stack: false
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Carousel',
        icon: ImagesIcon
      }
    }
  },
})
