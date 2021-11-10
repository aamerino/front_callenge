import React from 'react';

import { Button } from '.';

export default {
    title: 'controls/Button',
    component: Button,
    argTypes: {
      primary: { control: 'boolean' },
      label: { control: 'text' },

    },
  };

const ButtonTemplate = (args) => <Button {...args} />;

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  primary: true,
  label: 'Primary button',
};
export const Secondary = ButtonTemplate.bind({});

Secondary.args = {
  primary: false,
  label: 'Secondary button',
};

