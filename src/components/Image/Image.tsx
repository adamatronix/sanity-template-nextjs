import {default as NextImage} from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';

import { client } from '../../sanity/lib/sanity';

interface ImageProps {
  image: any,
  alt: string,
  placeholder?:string,
  isContain?:boolean,
  isCover?: boolean,
  isHeight?: boolean,
  noStyle?: boolean,
  sizes?:string
}

export const Image = ({
  image,
  alt,
  placeholder = 'blur',
  isContain = false,
  isCover = false,
  isHeight = false,
  noStyle = false,
  sizes,
  ...props
}: ImageProps) => {

  const imageProps:any = useNextSanityImage(client, image);
  const styles = isCover ? {width: '100%', height: '100%', display: 'block', position: 'absolute', objectFit: 'cover'} : isContain ? {width: '100%', height: '100%', display: 'block', position: 'absolute', objectFit: 'contain'} : isHeight ? { height: '100%', width: 'auto', display: 'block'} : noStyle ? {} : {width: '100%', height: 'auto', display: 'block'};

  return (
    <NextImage 
      {...(typeof imageProps === 'object' ? imageProps : { src:""})}
      style={styles}
      alt={alt}
      placeholder={placeholder}
      blurDataURL={image.asset.metadata.lqip}
      sizes={sizes}
      {...props}
    />
  )
}

interface ResponsiveImageProps {
  image: any,
  placeholder?:string,
  isContain?:boolean,
  isCover?: boolean,
  isHeight?: boolean,
  noStyle?: boolean,
  sizes?:string
}

const ResponsiveDesktop = styled.div`
  display: none;
  ${media.small`
    display: block;
  `}
`

const ResponsiveMobile = styled.div`
  display: block;
  ${media.small`
    display: none;
  `}
`

const ResponsiveWrapper = styled.div<{$fill?:boolean}>`
  position: relative;
  width: 100%;
  height: ${props => props.$fill ? '100%' : 'auto'};


  & ${ResponsiveDesktop},
  & ${ResponsiveMobile} {
    position: relative;
    width: 100%;
    height: ${props => props.$fill ? '100%' : 'auto'};
  }
`

export const ResponsiveImage = ({
  image,
  isCover,
  isContain,
  ...props
}: ResponsiveImageProps) => {
  const mobile = image?.mobileFeatured;
  const desktop = image?.desktopFeatured;

  return (
    <ResponsiveWrapper $fill={isCover || isContain}>
      { desktop && <ResponsiveDesktop>
        <Image image={desktop} alt={desktop.alt} isCover={isCover} isContain={isContain} {...props}/>
      </ResponsiveDesktop> }
      { mobile && <ResponsiveMobile>
        <Image image={mobile} alt={mobile.alt} isCover={isCover} isContain={isContain} {...props}/>
      </ResponsiveMobile> }
    </ResponsiveWrapper>
  )
}