import NextLink from 'next/link';
import React from 'react';
 
interface LinkProps {
  href:string,
  children: React.ReactNode
}


export const Link = ({
  href,
  children,
  ...props
}: LinkProps) => {

  return (
    <NextLink href={href} scroll={false} {...props}>
      {children}
    </NextLink>
  );
};
