export interface PageElement {
  _key: string
  _type: 'article'
  supertitle?: string
  title?: string
  subtitle?: string
}

export interface PageData {
  title?: string
  slug?: {current?: string}
  image: any
  content?: PageElement[]
}

export interface ArticleData {
  publishedAt?: string
  slug?: {current?: string}
  title: string
  subtitle?: string
  summary?: any
  hero?: any
  articleModules?: any[]
}

export interface ArticleSummaryData {
  publishedAt?: string
  slug?: {current?: string}
  title: string
  subtitle?: string
  summary?: any
}
