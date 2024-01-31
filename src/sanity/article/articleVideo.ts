import {DocumentVideoIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const articleVideo = defineType({
  name: "articleVideo",
  type: "object",
  title: "Article Video",
  fields: [
    {
      title: 'Stack',
      name: 'stack',
      type: 'boolean',
      description: 'Removes bottom margin allowing it to be stacked on top of the next module.'
    },
    {
     name: "video",
     type: "url",
     title: "Video url",
    },
    {
      title: 'Controls',
      name: 'controls',
      type: 'boolean'
    },
  ],
  initialValue: {
    controls: false,
    stack: false
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Video',
        icon: DocumentVideoIcon
      }
    }
  },
})
