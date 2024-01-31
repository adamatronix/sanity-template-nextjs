import {ImageIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const articleImageInline = defineType({
  name: "articleImageInline",
  type: "object",
  title: "Article Image Inline",
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
        title: 'Image Inline',
        icon: ImageIcon
      }
    }
  },
})
