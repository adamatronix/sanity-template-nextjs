import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';

const SectionWrapper = styled.div`
  position: relative;
  padding-left: var(--theme-gutter);
  padding-right: var(--theme-gutter);
`

const MarginWrapper = styled(SectionWrapper)<{noBottom?:boolean}>`
  position: relative;

  ${media.large`
    margin-bottom: var(--theme-section-margin);
  `}
  
  ${(props:any) => props.noBottom && ` 
    margin-bottom: var(--theme-gutter);
  `}

  ${media.large`
    ${(props:any) => props.noBottom && ` 
      margin-bottom: var(--theme-gutter);
    `}
  `}
`

interface SectionProps {
  children: React.ReactNode,
  noBottom?:boolean,
  className?: string
}

const Section = ({
  children,
  className,
  ...props
}: SectionProps) => {

  return (
    <SectionWrapper {...props} className={className}>
      {children}
    </SectionWrapper>
  )
}

export { Section };

const Margin = ({
  children,
  noBottom,
  className,
  ...props
}: SectionProps) => {

  return (
    <MarginWrapper {...props} noBottom={noBottom} className={className}>
      {children}
    </MarginWrapper>
  )
}

export { Margin };
