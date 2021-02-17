import { PostDetailPage, IPostDetailPageProps } from '.';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { MemoryRouter, Route } from 'react-router'

export default {
  title: 'Pages/PostDetail',
  component: PostDetailPage,
  decorators:[(Story) => <MemoryRouter initialEntries={['/posts/35657ee5-be2b-4522-bf34-005537039d8d']}>
  <Route
    component={(routerProps:any) => <Story {...routerProps} />}
    path='/posts/:id'
  />
</MemoryRouter>]
} as Meta;

const Template: Story<IPostDetailPageProps> = (args) => (
  <PostDetailPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
