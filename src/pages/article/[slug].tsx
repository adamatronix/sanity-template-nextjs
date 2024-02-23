import {GetStaticProps} from 'next'
import {PreviewSuspense} from 'next-sanity/preview'
import {ArticlePage} from 'page/ArticlePage'
import { LazyPreviewArticle } from 'page/LazyPreviewArticle'
import {LoadingScreen} from 'page/LoadingScreen'
import {ARTICLE_DATA_QUERY, ARTICLE_PATHS_QUERY} from 'page/query'
import {ArticleData} from 'page/types'

import {client} from '../../sanity/client'

interface PageProps {
  data: ArticleData | null
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
        preview,
        slug: params?.slug || null,
        token: previewData.token,
      },
    }
  }

  const data = await client.fetch<ArticleData | null>(ARTICLE_DATA_QUERY, params)

  return {
    props: {
      data,
      preview,
      slug: params?.slug || null,
      token: null,
    },
    revalidate: 3600
  }
}

export const getStaticPaths = async () => {
  const data = await client.fetch<{slug: string}[] | null>(ARTICLE_PATHS_QUERY)

  return {paths: data?.map((d) => `/article/${d.slug}`) || [], fallback: false}
}

export default function Page(props: PageProps) {
  const {data, preview, slug, token} = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<LoadingScreen>Loading preview…</LoadingScreen>}>
        <LazyPreviewArticle slug={slug} token={token} />
      </PreviewSuspense>
    )
  }

  return <ArticlePage data={data} />
}
