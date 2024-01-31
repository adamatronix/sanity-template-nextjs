import { ResponsiveImage } from 'components/Image/Image';
import { SanityPortable } from 'components/SanityPortableText/SanityPortableText';
import { Margin } from 'components/Section/Section';
import { VideoPlayer } from 'components/VideoPlayer/VideoPlayer';
import React from 'react';
import styled from 'styled-components';
import { fontstack } from 'utils/fontstack';
import { media } from 'utils/mediaQuery';
import { type } from 'utils/type';

import { articleComponents } from './ArticleRichText';


const moduleSelector = {
  articleCopyBody: (data:any) => {
    if(data.content)
      return (
        <ArticleBodyText content={data.content}/>
      );
    
    return null;
  },
  articlePullQuote: (data:any) => {
    if(data.quote)
      return (
        <ArticlePullQuote tagline={data.tagline}>{data.quote}</ArticlePullQuote>
      );
    
    return null;
  },
  articleImage5050: (data:any) => {
    if(data.images)
      return (
        <ArticleImage5050 images={data.images} bottomMargin={!data.stack}/>
      );
    
    return null;
  },
  articleImage50: (data:any) => {

    if(data.video.video)
      return (
        <ArticleImage50 videosrc={data.video?.video} bottomMargin={!data.stack} sanityImage={data?.image}/>
      );

    if(data.image)
      return (
        <ArticleImage50 sanityImage={data.image.desktopFeatured} bottomMargin={!data.stack}/>
      );
    
    return null;
  },
  articleImageInline: (data:any) => {
    if(data.video.video)
      return (
        <ArticleImageInline videosrc={data.video?.video} bottomMargin={!data.stack} sanityImage={data?.image}/>
      );
    if(data.image)
      return (
        <ArticleImageInline sanityImage={data.image} bottomMargin={!data.stack}/>
      );
    
    return null;
  },
  articleImage100: (data:any) => {
    if(data.video.video)
      return (
        <ArticleImage100 videosrc={data.video?.video} bottomMargin={!data.stack} sanityImage={data?.image}/>
      );
    if(data.image)
      return (
        <ArticleImage100 sanityImage={data.image} bottomMargin={!data.stack}/>
      );
    
    return null;
  },
};


export const articleBuilder = (modules:any) => {

  let components:any = [];
  if(!modules || modules.length === 0)
    return components;
  
  modules.forEach((module:any) => {
    if (module && moduleSelector[module._type as keyof typeof moduleSelector]) {
      components.push(moduleSelector[module._type as keyof typeof moduleSelector](module));
    }
  });

  return components;
};

interface ArticleVideoThumbProps {
  sanityImage: any,
}

const VideoImageWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 1;
`

export const ArticleVideoThumb = ({
  sanityImage,
  ...props
}: ArticleVideoThumbProps) => {

  
  return (
    <VideoImageWrapper {...props}>
      <ResponsiveImage image={sanityImage} />
    </VideoImageWrapper>
  )
}



interface ArticleImage100Props {
  src?: any,
  sanityImage?: any,
  videosrc?: string,
  alt?: string,
  bottomMargin?: boolean|null
}


const Wrapper = styled(Margin)`
  
`

const ContainSection = styled(Margin)`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
`

export const ArticleImage100 = ({
  src,
  sanityImage,
  alt,
  videosrc,
  bottomMargin,
  ...props
}: ArticleImage100Props) => {
  return (
    <Wrapper
      noBottom={bottomMargin ? false : true}
      {...props}
    >
      { videosrc ?
        <VideoPlayer videosrc={videosrc} thumbnail={sanityImage}/>
      : sanityImage ?
        <ResponsiveImage image={sanityImage}/>
      : null}
    </Wrapper>
  );
};

export const ArticleImageInline = ({
  src,
  sanityImage,
  alt,
  videosrc,
  bottomMargin,
  ...props
}: ArticleImage100Props) => {
  return (
    <ContainSection
      noBottom={bottomMargin ? false : true}
      {...props}
    >
      { videosrc ?
        <VideoPlayer videosrc={videosrc} thumbnail={sanityImage}/>
      : sanityImage ?
        <ResponsiveImage image={sanityImage}/>
      : null}
    </ContainSection>
  );
};


interface ArticleImage5050Props {
  images: any,
  bottomMargin?: boolean
}

const DualGrid = styled.div`
  position: relative;
  width: 100%;
  grid-template-columns: repeat(1,1fr);
  gap: var(--theme-gutter);
  display: grid;

  ${media.large`
    grid-template-columns: repeat(2,1fr);
  `}
`

export const ArticleImage5050 = ({
  images,
  bottomMargin,
  ...props
}: ArticleImage5050Props) => {

	
  
  return (
    <Wrapper
      noBottom={bottomMargin ? false : true}
      {...props}
    >
      <DualGrid>
        { images && images.map((image:any,i:number) => {
          return (
            <ResponsiveImage key={i} image={image} />
          )
        })}
      </DualGrid>
    </Wrapper>
  );
};


interface ArticleImage50Props {
  sanityImage?: any,
  videosrc?: string,
  alt?: string,
  bottomMargin?: boolean
}

const FullGrid = styled.div`
  position: relative;
  width: 100%;
  grid-template-columns: repeat(6,1fr);
  gap: var(--theme-gutter);
  display: grid;

  ${media.large`
    grid-template-columns: repeat(12,1fr);
  `}
`

const Column50 = styled.div`
  grid-column: span 6;

  ${media.large`
    grid-column: 4 / span 6;
  `}
`

export const ArticleImage50 = ({
  sanityImage,
  videosrc,
  alt,
  bottomMargin,
  ...props
}: ArticleImage50Props) => {


  return (
    <Wrapper
      noBottom={bottomMargin ? false : true}
      {...props}
    >
      <FullGrid>
        <Column50>
         { videosrc ?
          <VideoPlayer videosrc={videosrc} thumbnail={sanityImage}/> : sanityImage &&
          <ResponsiveImage image={sanityImage} /> }
        </Column50>
      </FullGrid>
    </Wrapper>
  );
};


const PullQuoteTagline = styled.div`
  ${fontstack.default}
  ${type('body02')}
  color: rgb(var(--theme-black));
  text-align: center;
  grid-column: span 6;
  row-gap: 24px;

  ${media.large`
    grid-column: 2 / span 10;
  `}
`

const PullQuoteText = styled.div`
  ${fontstack.default}
  ${type('heading04')}
  color: rgb(var(--theme-black));
  text-align: center;
  grid-column: span 6;

  ${media.large`
    grid-column: 2 / span 10;
    ${type('heading02')}
  `}
`

interface PullQuoteProps {
  tagline?: string,
  children: React.ReactNode,
}

export const ArticlePullQuote = ({
  tagline,
  children,
  ...props
}: PullQuoteProps) => {
  return (
    <Wrapper {...props}>
      <FullGrid>
        {tagline && <PullQuoteTagline>{tagline}</PullQuoteTagline>}
        <PullQuoteText>{children}</PullQuoteText>
      </FullGrid>
    </Wrapper>
  )
}

interface ArticleBodyTextProps {
  content: any,
}

export const ArticleBodyText = ({
  content,
  ...props
}: ArticleBodyTextProps) => {
  return (
    <ContainSection {...props}>
      <SanityPortable blocks={content} components={articleComponents}/>
    </ContainSection>
  )
}
