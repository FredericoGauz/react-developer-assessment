import { Meta, Story } from '@storybook/react';
import { IPostListProps, PostList } from '.';
import { post } from '../../mock/post';

export default {
  title: 'Components/Posts/PostList',
  component: PostList,
} as Meta;

const Template: Story<IPostListProps> = (args) => <PostList {...args} />;

export const Default = Template.bind({});

Default.args = {
  posts: [post, post, post],
};
export const Carousel = Template.bind({});

Carousel.args = {
  posts: [post, post, post],
  carousel: true,
};
