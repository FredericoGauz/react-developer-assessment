import { Meta, Story } from '@storybook/react';
import { Author, IAuthorProps } from '.';
import { post } from '../../mock/post';

export default {
  title: 'Components/Author',
  component: Author,
} as Meta;

const Template: Story<IAuthorProps> = (args) => <Author {...args} />;

export const Default = Template.bind({});
Default.args = { author: post.author, date: post.publishDate };

export const Reverse = Template.bind({});
Reverse.args = { author: post.author, date: post.publishDate, reverse: true };
