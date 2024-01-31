import {ImagesIcon} from '@sanity/icons'
import {defineType} from 'sanity'
export const articleImage5050 = defineType({
  name: "articleImage5050",
  type: "object",
  title: "Article Image 50 50",
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
          title: "Image",
          type: "featuredImage"
        },
        {
          name: "video",
          type: "video",
          title: "Video",
          description: 'A video which autoplays'
        }
      ]
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
        title: 'Image 50/50',
        icon: ImagesIcon
      }
    }
  },
})
