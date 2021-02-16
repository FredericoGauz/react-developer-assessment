import { PostDetailPage, IPostDetailPageProps } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Pages/PostDetail',
  component: PostDetailPage,
} as Meta;

const Template: Story<IPostDetailPageProps> = (args) => (
  <PostDetailPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
