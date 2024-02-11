import {GetStaticProps} from 'next'
import {PreviewSuspense} from 'next-sanity/preview'
import {AllArticlePage} from 'page/AllArticlePage'
import {LazyPreviewPage} from 'page/LazyPreviewPage'
import {LoadingScreen} from 'page/LoadingScreen'
import {ALL_ARTICLE_DATA_QUERY,COUNT_ALL_ARTICLE_QUERY} from 'page/query'
import {ArticleSummaryData} from 'page/types'

import {client} from '../../sanity/client'

interface PageProps {
  data: ArticleSummaryData[] | null
  total: number | null
  preview: boolean
  slug: string | null
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const {preview = false, previewData = {}} = ctx

  const params = {slug: 'home'}

  if (preview && previewData.token) {
    return {
      props: {
        data: null,
        total: null,
        preview,
        slug: params?.slug || null,
        token: previewData.token,
      },
    }
  }

  const data = await client.fetch<ArticleSummaryData[] | null>(ALL_ARTICLE_DATA_QUERY, params)
  const total = await client.fetch<number | null>(COUNT_ALL_ARTICLE_QUERY)

  return {
    props: {
      data,
      total,
      preview,
      slug: params?.slug || null,
      token: null,
    },
  }
}

export default function Page(props: PageProps) {
  const {data, total, preview, slug, token} = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<LoadingScreen>Loading preview…</LoadingScreen>}>
        <LazyPreviewPage slug={slug} token={token} />
      </PreviewSuspense>
    )
  }

  return <AllArticlePage data={data} total={total || 0} />
}
