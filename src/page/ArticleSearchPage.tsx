import { ArticleSummary } from 'components/Article/ArticleSummary'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import styled from 'styled-components';
import {client} from '../sanity/client'
import { ARTICLE_SEARCH_DATA_QUERY } from './query';

import {ArticleSummaryData} from './types'


const Grid = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2,1fr);
  gap: var(--theme-gutter);
`
export function ArticleSearchPage() {

  return (  
    <Grid>
      <Suspense>
        <SearchResults />
      </Suspense>
    </Grid>
  )
}


const SearchResults = () => {
  const [ results, setResults ] = useState<ArticleSummaryData[] | null>([]);
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch<ArticleSummaryData[] | null>(ARTICLE_SEARCH_DATA_QUERY, { searchQuery: search })
      setResults(data);
    }

    if(search) {
      fetchData()
      // make sure to catch any error
      .catch(console.error); 
    }
  },[search])
  
  return (
    <>
      { results && results.map((summary:ArticleSummaryData,i:number) => {
        return <ArticleSummary key={i} data={summary}/>
      }) }
    </>
  )
}