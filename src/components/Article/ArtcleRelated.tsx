import { ArticleSummary } from 'components/Article/ArticleSummary'
import { ArticleSummaryData } from 'page/types';
import React from 'react';
import styled from 'styled-components';

 
interface ArticleRelatedProps {
  related: ArticleSummaryData[]
}

const Wrapper = styled.form`
  display: block;
`

const Grid = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2,1fr);
  gap: var(--theme-gutter);
`

export const ArticleRelated = ({
  related,
  ...props
}: ArticleRelatedProps) => {
  return (
    <Wrapper {...props}>
      <Grid>
        { related && related.map((summary:ArticleSummaryData,i:number) => {
          return <ArticleSummary key={i} data={summary}/>
        }) }
      </Grid>
      
    </Wrapper>
  );
};
