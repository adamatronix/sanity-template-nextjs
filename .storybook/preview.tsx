import type {Preview} from '@storybook/react'
import { GlobalStyle } from '../src/utils/global';
import React from 'react';
import "../src/fonts-sb.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'grey',
          value: '#FAFAFA',
        },
        {
          name: 'dark',
          value: '#383838',
        },
        {
          name: 'green',
          value: '#5D6456',
        },
        {
          name: 'offwhite',
          value: '#F4E9D9',
        }
      ],
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
