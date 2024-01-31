import {SchemaTypeDefinition} from 'sanity'

import {articleCarousel, articleCopyBody, articleImage50, articleImage90, articleImage5050, articleType, articleVideo} from './article'
import { 
  featuredImageType,
  mainImageType,
  videoType } from './objects'
import {pageElementType, pageType} from './page'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [articleType, articleCarousel, articleCopyBody, articleImage50, articleImage5050, articleImage90, articleVideo, pageElementType, pageType, mainImageType, featuredImageType, videoType],
}
