import { createGlobalStyle } from "styled-components";

import { media } from './mediaQuery';

export const GlobalStyle = createGlobalStyle`

  :root {
    --theme-black: 34, 34, 34;
    --theme-background: 246, 246, 246;
    --theme-white: 255, 255, 255;
    --theme-grey: 221, 221, 221;
    --theme-lightgrey: 238, 238, 238;
    --theme-brand: 253, 89, 61;
    --theme-negative: 253, 92, 99;
    --theme-positive: 4, 167, 125;

    --theme-primary: var(--theme-black);
    --theme-secondary: var(--theme-white);

    --theme-container-radius: 8px;
    --theme-gutter: 16px;
    --theme-section-margin: 120px;

    --theme-font-default: "Neue Montreal",Arial,Helvetica Neue,Helvetica,sans-serif;
    --theme-font-icon: 'Inter';

    --article-primary: var(--theme-black);
    --article-secondary: var(--theme-white);

    ${media.small`
      --theme-gutter: 20px;
      --theme-container-radius: 16px;
    `}
  }

  ::selection {
    background: rgb(var(--theme-black));
    color: rgb(var(--theme-white));
  }

  * {
    box-sizing: border-box;
  }

  html, 
  body {
    overscroll-behavior: none;
    height: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--theme-font-default);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;
