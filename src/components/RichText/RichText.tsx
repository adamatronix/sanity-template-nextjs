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

