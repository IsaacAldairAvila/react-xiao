import React from 'react';
import { Card } from './Card';
export default {
  title: 'Card/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
};
