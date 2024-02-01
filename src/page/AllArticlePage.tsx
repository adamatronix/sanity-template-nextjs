import { ArticleSummary } from 'components/Article/ArticleSummary'
import styled from 'styled-components';
import { ArticleSearchBar } from 'components/Article/ArticleSearchBar';

import {ArticleSummaryData} from './types'


const Grid = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2,1fr);
  gap: var(--theme-gutter);
`
export function AllArticlePage(props: {data: ArticleSummaryData[] | null}) {
  const {data} = props

  console.log(data);
  return (
    <>
      <ArticleSearchBar />
      <Grid>
        { data && data.map((summary:ArticleSummaryData,i:number) => {
          return <ArticleSummary key={i} data={summary}/>
        }) }
      </Grid>
    </>
  )
}
