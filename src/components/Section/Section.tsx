import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  position: relative;
  padding-left: var(--theme-gutter);
  padding-right: var(--theme-gutter);
`

const MarginWrapper = styled.div`
  position: relative;
  margin-top: var(--theme-section-margin);
`

interface SectionProps {
  children: React.ReactNode,
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
  className,
  ...props
}: SectionProps) => {

  return (
    <MarginWrapper {...props} className={className}>
      {children}
    </MarginWrapper>
  )
}

export { Margin };
