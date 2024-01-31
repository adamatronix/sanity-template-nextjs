import {ImageIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const articleImage100 = defineType({
  name: "articleImage100",
  type: "object",
  title: "Article Image 100",
  fields: [
    {
      title: 'Stack',
      name: 'stack',
      type: 'boolean',
      description: 'Removes bottom margin allowing it to be stacked on top of the next module.'
    },
    {
     name: "image",
     type: "featuredImage",
     title: "Image",
   },
   {
    name: "video",
    type: "video",
    title: "Video",
    description: 'A video which autoplays'
    }
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
        title: 'Image 100',
        icon: ImageIcon
      }
    }
  },
})
