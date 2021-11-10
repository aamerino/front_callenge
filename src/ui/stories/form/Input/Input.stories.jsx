import React from 'react';

import { Input } from '.';

export default {
    title: 'form/Input',
    component: Input,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

const InputTemplate = (args) => <Input {...args} />;

export const Primary = InputTemplate.bind({});
Primary.args = {
  value: 'PMI',
};


