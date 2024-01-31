
import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { VideoPlayer } from './VideoPlayer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/VideoPlayer',
  component: VideoPlayer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof VideoPlayer>;

const Wrapper = styled.div`
  position: relative;
`

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoPlayer> = (args) => <Wrapper><VideoPlayer {...args} /></Wrapper>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.parameters = {
  backgrounds: { default: 'grey'}
}

Default.args = {
  videosrc: 'https://seensounds.cdn.prismic.io/seensounds/517b43d4-d556-4819-bf56-8b89222c6543_RosaliaSaoko_0.mp4',
};

