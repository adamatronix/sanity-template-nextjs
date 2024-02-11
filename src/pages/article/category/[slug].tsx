import {GetStaticProps} from 'next'
import {PreviewSuspense} from 'next-sanity/preview'
import {AllArticlePage} from 'page/AllArticlePage'
import {LazyPreviewPage} from 'page/LazyPreviewPage'
import {LoadingScreen} from 'page/LoadingScreen'
import {ARTICLE_CATEGORY_DATA_QUERY, ARTICLE_CATEGORY_PATHS_QUERY, COUNT_CATEGORY_ARTICLE_QUERY} from 'page/query'
import {ArticleSummaryData} from 'page/types'

import {client} from '../../../sanity/client'

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
  const {params = {}, preview = false, previewData = {}} = ctx

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

  const data = await client.fetch<ArticleSummaryData[] | null>(ARTICLE_CATEGORY_DATA_QUERY, params)
  const total = await client.fetch<number | null>(COUNT_CATEGORY_ARTICLE_QUERY, params)

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

export const getStaticPaths = async () => {
  const data = await client.fetch<{slug: string}[] | null>(ARTICLE_CATEGORY_PATHS_QUERY)

  return {paths: data?.map((d) => `/article/category/${d.slug}`) || [], fallback: false}
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

  return <AllArticlePage data={data} total={total || 0} slug={slug} type='category'/>
}
