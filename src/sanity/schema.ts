import {SchemaTypeDefinition} from 'sanity'

import {articleCarousel, articleCopyBody, articleImage50, articleImage100, articleImage5050, articleImageInline, articleType, articleVideo} from './article'
import { 
  featuredImageType,
  mainImageType,
  videoType } from './objects'
import {pageElementType, pageType} from './page'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [articleType, articleCarousel, articleCopyBody, articleImage50, articleImage5050, articleImageInline, articleImage100, articleVideo, pageElementType, pageType, mainImageType, featuredImageType, videoType],
}
