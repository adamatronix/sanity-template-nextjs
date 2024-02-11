import { ResponsiveImage } from 'components/Image/Image';
import { Link } from 'components/Link/Link';
import { ArticleSummaryData } from 'page/types';
import React from 'react';
import styled from 'styled-components';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';

 
interface ArticleSummaryProps {
  data: ArticleSummaryData
}

const Wrapper = styled(Link)`
  ${fontstack.default}
  ${type('body01')}
  display: block;
`

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  margin: 0 0 20px;
`

const Title = styled.h2`
  margin: 0 0 20px;
`

const Short = styled.div`
  margin: 0 0 20px;
`

export const ArticleSummary = ({
  data,
  ...props
}: ArticleSummaryProps) => {
  let date;
  if(data.publishedAt){
    date = new Date(data.publishedAt).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <Wrapper href={`/article/${data.slug}`} {...props}>
      <ImageWrapper>
        <ResponsiveImage image={data.summary} isCover/>
      </ImageWrapper>
      { date || null}
      <Title>{data.title}</Title>
      <Short>{data.subtitle}</Short>
      Read More
    </Wrapper>
  );
};
