import {ArticleData} from './types'
import { articleBuilder } from 'components/Article/Article'

export function ArticlePage(props: {data: ArticleData | null}) {
  const {data} = props

  console.log(data);
  return (
    <>
      { articleBuilder(data?.articleModules) }
    </>
    
  )
}
