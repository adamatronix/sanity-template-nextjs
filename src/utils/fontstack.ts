import { css } from "styled-components";

const stacks = {
  // ns = not small
  default: () =>
    css`
      font-family: var(--theme-font-default);
    `,
  icon: () =>
    css` 
      font-family: var(--theme-font-icon);
    `
};

export const fontstack = stacks;
