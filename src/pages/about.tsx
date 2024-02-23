import {GetStaticProps} from 'next'

import {AboutPage} from '../page/AboutPage'
import {PAGE_DATA_QUERY} from '../page/query'
import {PageData} from '../page/types'
import {client} from '../sanity/client'

interface PageProps {
  data: PageData | null
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
  const { preview = false} = ctx
  const params = {slug: 'about'}

  const data = await client.fetch<PageData | null>(PAGE_DATA_QUERY, params)

  return {
    props: {
      data,
      preview,
      slug: params?.slug || null,
      token: null,
    },
  }
}

export default function Page(props: PageProps) {
  const {data} = props

  return <AboutPage data={data} />
}
