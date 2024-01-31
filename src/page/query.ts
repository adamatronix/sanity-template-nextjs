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

export const ARTICLE_PATHS_QUERY = groq`
  *[_type == 'article' && defined(slug.current)]{
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
       _type == 'articleImage90' => {
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