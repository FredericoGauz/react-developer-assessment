import { Meta, Story } from '@storybook/react';
import React from 'react';
import { LinkProps } from 'react-router-dom';
import { Link } from '.';

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  to: '/',
  children:['Link']
};
