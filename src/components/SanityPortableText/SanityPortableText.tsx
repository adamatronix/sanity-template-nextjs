import { PortableText } from "@portabletext/react";
import { Paragraph } from "components/RichText/RichText";
import React from 'react';

const defaultComponents = {
  block: {
    paragraph: Paragraph,
    normal: Paragraph,
  }
};

interface SanityPortableProps {
  blocks: any,
  components?: any
}

export const SanityPortable = ({
  blocks,
  components,
  ...props
}: SanityPortableProps) => {

  return (
    <PortableText
      value={blocks}
      //@ts-ignore
      components={components || defaultComponents}
      {...props}
    />
  );
}