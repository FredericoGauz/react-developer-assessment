import { Meta, Story } from '@storybook/react';
import { ILayoutProps, Layout } from '.';

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta;

const Template: Story<ILayoutProps> = (args) => <Layout {...args} />;

const Box = () => (
  <div
    style={{ width: '200px', height: '200px', backgroundColor: 'wheat' }}
  ></div>
);
export const Default = Template.bind({});
Default.args = { children: [Box()] };

export const WithVerticalAlign = Template.bind({});
WithVerticalAlign.args = { children: [Box()], verticalCenter: true };

export const withNoPadding = Template.bind({});
withNoPadding.args = { children: [Box()], noPadding: true };
