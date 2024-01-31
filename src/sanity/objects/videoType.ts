import {defineType} from 'sanity'

export const videoType = defineType({
  type: 'object',
  name: "video",
  title: 'Video',
  fields: [
   {
      name: 'video',
      title: 'Video',
      type: 'url'
    },
    {
      title: 'Controls',
      name: 'controls',
      type: 'boolean',
    }
  ],
  initialValue: {
    controls: false
  }
})
