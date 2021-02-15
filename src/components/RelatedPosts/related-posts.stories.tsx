import { Meta, Story } from '@storybook/react';
import { RelatedPosts } from '.';

export default {
  title: 'Components/Posts/Related Posts',
  component: RelatedPosts,
} as Meta;

const Template: Story<{}> = (args: any) => <RelatedPosts {...args} />;

export const Default = Template.bind({});

Default.args = {};
