import {usePreview} from '../sanity/preview'
import { ArticlePage } from './ArticlePage';
import {ARTICLE_DATA_QUERY} from './query'

export default function PreviewPage(props: {slug: string | null; token: string | null}) {
  const {slug, token} = props

  return <ArticlePage data={usePreview(token, ARTICLE_DATA_QUERY, {slug})} />
}
