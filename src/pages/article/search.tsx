import {GetStaticProps} from 'next'
import {PreviewSuspense} from 'next-sanity/preview'
import { ArticleSearchPage } from 'page/ArticleSearchPage'
import {LazyPreviewPage} from 'page/LazyPreviewPage'
import {LoadingScreen} from 'page/LoadingScreen'
import {ArticleSummaryData} from 'page/types'


interface PageProps {
  data: ArticleSummaryData[] | null
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

  if (preview && previewData.token) {
    return {
      props: {
        data: null,
        preview,
        slug: null,
        token: previewData.token,
      },
    }
  }

  return {
    props: {
      data: null,
      preview,
      slug: null,
      token: null,
    },
  }
}

export default function Page(props: PageProps) {
  const { preview, slug, token} = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<LoadingScreen>Loading preview…</LoadingScreen>}>
        <LazyPreviewPage slug={slug} token={token} />
      </PreviewSuspense>
    )
  }

  return <ArticleSearchPage />
}