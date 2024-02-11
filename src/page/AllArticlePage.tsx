import { ArticleSearchBar } from 'components/Article/ArticleSearchBar';
import { ArticleSummary } from 'components/Article/ArticleSummary'
import { useCallback,useState,   } from 'react'
import styled from 'styled-components';

import {client} from '../sanity/client'
import { MORE_ARTICLE_DATA_QUERY, MORE_CATEGORY_ARTICLE_DATA_QUERY } from './query';
import {ArticleSummaryData} from './types'

const Grid = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2,1fr);
  gap: var(--theme-gutter);
`
export function AllArticlePage(props: {data: ArticleSummaryData[] | null, total: number, type?: string, slug?:string|null}) {
  const {data, total, slug, type = 'all'} = props;
  const [ results, setResults] = useState(data);

  const loadMore = useCallback(() => {
    const fetchData = async (lastPublishedAt:any,lastId:any) => {
      const data = await client.fetch<ArticleSummaryData[] | null>( type === 'category' ? MORE_CATEGORY_ARTICLE_DATA_QUERY : MORE_ARTICLE_DATA_QUERY, { lastPublishedAt: lastPublishedAt, lastId: lastId, slug: slug || '' })
      console.log(data);

      if(data && data.length > 0) {
        setResults(oldResults => {
          if(oldResults && oldResults.length > 0) {
            return [...oldResults,...data];
          } else {
            return data;
          }
        });
      }
    }

    if(results) {
      const lastResult = results[results.length - 1];
      const lastPublishedAt = lastResult.publishedAt;
      const lastId = lastResult._id;

      if(total !== results.length) {
        fetchData(lastPublishedAt, lastId)
      }
      
    }
  },[results, total, slug, type])

  return (
    <>
      <ArticleSearchBar />
      <Grid>
        { results && results.map((summary:ArticleSummaryData,i:number) => {
          return <ArticleSummary key={i} data={summary}/>
        }) }
      </Grid>
      {results?.length !== total && <div onClick={loadMore}>Load More</div>}
    </>
  )
}
