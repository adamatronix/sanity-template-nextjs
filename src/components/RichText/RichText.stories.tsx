import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import { Paragraph } from './RichText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/RichText',
  component: Paragraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Paragraph>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const P = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
P.args = {
  children: "In et tortor ac arcu pulvinar gravida. Phasellus in odio convallis, maximus elit a, scelerisque ante. Praesent nibh turpis, viverra a tristique ut, pharetra eu odio. Donec vel enim non mauris scelerisque rutrum. Pellentesque cursus dignissim odio eu accumsan. Mauris scelerisque enim eget lacus maximus dapibus. Sed ornare, velit id suscipit porttitor, ante felis iaculis urna, facilisis pretium lacus ipsum vel turpis. Cras rhoncus sit amet odio id viverra. Nullam feugiat dolor nec libero hendrerit vestibulum."
};

