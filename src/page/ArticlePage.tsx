import { articleBuilder } from 'components/Article/Article'

import {ArticleData} from './types'

export function ArticlePage(props: {data: ArticleData | null}) {
  const {data} = props
  return (
    <>
      { articleBuilder(data?.articleModules) }
    </>
    
  )
}
