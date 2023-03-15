import type {Preview} from '@storybook/react'
import { GlobalStyle } from '../src/utils/global';
import React from 'react';
import "../src/fonts.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
     (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    )
  ]
}

export default preview
