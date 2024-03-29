import {ImageIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const articleImage50 = defineType({
  name: "articleImage50",
  type: "object",
  title: "Article Image 50",
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
        title: 'Image 50',
        icon: ImageIcon
      }
    }
  },
})
