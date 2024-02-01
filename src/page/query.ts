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

export const ARTICLE_SEARCH_DATA_QUERY = groq`
*[_type == "article" && _score > 0]
| score(
  title match $searchQuery
  || title match $searchQuery + "*"
  || title match "*" + $searchQuery
  || subtitle match $searchQuery
  || subtitle match $searchQuery + "*"
  || subtitle match "*" + $searchQuery
  || pt::text(pageBuilder[].articleCopyBody) match $searchQuery
  || pt::text(pageBuilder[].articleCopyBody) match $searchQuery + "*"
  || pt::text(pageBuilder[].articleCopyBody) match "*" + $searchQuery
) 
| order(_score desc) [0...5] 
{
    publishedAt,
    title,
    subtitle,
    'slug': slug.current,
    summary {
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
  }
`

export const ALL_ARTICLE_DATA_QUERY = groq`
  *[_type == 'article' && defined(slug.current) && dateTime(now()) > dateTime(publishedAt)]{
    publishedAt,
    title,
    subtitle,
    'slug': slug.current,
    summary {
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
  }
`

export const ARTICLE_CATEGORY_DATA_QUERY = groq`
  *[_type == 'article' && defined(slug.current) && dateTime(now()) > dateTime(publishedAt) && category._ref in *[_type == 'category' && slug.current == $slug]._id]{
    publishedAt,
    title,
    subtitle,
    'slug': slug.current,
    summary {
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
  }
`

export const ARTICLE_CATEGORY_PATHS_QUERY = groq`
  *[_type == 'category' && defined(slug.current)]{
    'slug': slug.current
  }
`


export const ARTICLE_PATHS_QUERY = groq`
  *[_type == 'article' && defined(slug.current) && dateTime(now()) > dateTime(publishedAt)]{
    'slug': slug.current
  }
`


export const ARTICLE_DATA_QUERY = groq`
  *[_type == 'article' && slug.current == $slug][0]{
    ...,
    hero {
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
    articleModules[] {
      _type == 'articleCarousel' => {
         _key,
         _type,
         stack,
         images[] {
           alt,
           asset->{
             ...,
             metadata
           }
         }
       }, 
       _type == 'articleCopyBody' => {
        ...
       },
       _type == 'articleImage50' => {
         ...,
         image {
           desktopFeatured {
             alt,
             asset->{
               ...,
               metadata
             }
           },
           mobileFeatured {
             alt,
             asset->{
               ...,
               metadata
             }
           }
         }
       },
       _type == 'articleImage5050' => {
         ...,
         images[] {
           ...,
           desktopFeatured {
             alt,
             asset->{
               ...,
               metadata
             }
           },
           mobileFeatured {
             alt,
             asset->{
               ...,
               metadata
             }
           }
         }
       },
       _type == 'articleImageInline' => {
        ...,
        image {
          desktopFeatured {
            alt,
            asset->{
              ...,
              metadata
            }
          },
          mobileFeatured {
            alt,
            asset->{
              ...,
              metadata
            }
          }
        }
      },
       _type == 'articleImage100' => {
         ...,
         image {
           desktopFeatured {
             alt,
             asset->{
               ...,
               metadata
             }
           },
           mobileFeatured {
             alt,
             asset->{
               ...,
               metadata
             }
           }
         }
       },
       _type == 'articleVideo' => {
         ...
       },
    }
  }
`