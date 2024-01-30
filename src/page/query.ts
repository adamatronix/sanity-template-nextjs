import {groq} from 'next-sanity'

export const PAGE_DATA_QUERY = groq`
  *[_type == 'page' && slug.current == $slug][0]{
    title,
    slug,
    image {
      mobileFeatured {
        alt,
        asset->{
          ...,
          metadata
        }
      },
      desktopFeatured {
        alt,
        asset->{
          ...,
          metadata
        }
      }
    },
    content[]{
      _key,
      _type == 'pageElement' => {
        ...article->{
          _type,
          supertitle,
          title,
          subtitle
        }
      }
    }
  }
`

export const PAGE_PATHS_QUERY = groq`
  *[_type == 'page' && defined(slug.current)]{
    'slug': slug.current
  }
`
