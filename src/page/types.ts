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
