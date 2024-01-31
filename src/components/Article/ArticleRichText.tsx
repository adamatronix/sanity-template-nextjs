import React from "react";
import styled from "styled-components";
import { fontstack } from "utils/fontstack";
import { media } from 'utils/mediaQuery';
import { type } from "utils/type";


const ParagraphWrapper = styled.p`
  ${fontstack.default}
  ${type("body01MB")}
  color: var(--theme-black);
  margin: 0;

  ${media.large`
    ${type("body01DT")}
  `}

  &:not(:last-child) {
    margin: 0 0 20px;
  }
`;

interface ParagraphProps {
  children: any
}

export const Paragraph = ({
  children,
  ...props
}: ParagraphProps) => {

  return <ParagraphWrapper {...props}>{children}</ParagraphWrapper>;
};

const StatementWrapper = styled.div`
  ${fontstack.default}
  ${type("heading05")}
  color: var(--theme-black);
  margin: 0;

  ${media.large`
    ${type("heading04")}
  `}

  &:not(:last-child) {
    margin: 0 0 20px;
  }
`;

interface StatementProps {
  children: any
}

export const Statement = ({
  children,
  ...props
}: StatementProps) => {

  return <StatementWrapper {...props}>{children}</StatementWrapper>;
};


const HeadingWrapper = styled.h2`
  ${fontstack.default}
  ${type("heading05")}
  color: var(--theme-black);
  margin: 0;

  ${media.large`
    ${type("heading04")}
  `}

  &:not(:last-child) {
    margin: 0 0 20px;
  }
`;

interface StatementProps {
  children: any
}

export const Heading = ({
  children,
  ...props
}: StatementProps) => {

  return <HeadingWrapper {...props}>{children}</HeadingWrapper>;
};

const QuoteWrapper = styled.blockquote`
  ${fontstack.default}
  ${type("heading05")}
  color: var(--theme-black);
  margin: 0;

  ${media.large`
    ${type("heading04")}
  `}

  &:not(:last-child) {
    margin: 0 0 20px;
  }
`;

interface StatementProps {
  children: any
}

export const Quote = ({
  children,
  ...props
}: StatementProps) => {

  return <QuoteWrapper {...props}>{children}</QuoteWrapper>;
};

export const articleComponents = {
  block: {
    paragraph: Paragraph,
    normal: Paragraph,
    h2: Heading,
    statement: Statement,
    blockquote: Quote
  },
};
