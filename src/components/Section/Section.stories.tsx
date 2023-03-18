import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { Margin,Section } from './Section';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Section',
  component: Section,
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Section>;


const Dummy = styled.div`
  background: rgb(var(--theme-lightgrey));
  width: 100%;
  height: 600px;
  border-radius: var(--theme-container-radius);
`

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Section> = (args) => <Margin {...args}><Section><Dummy /></Section></Margin>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};