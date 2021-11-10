import React from 'react';

import { Box } from '.';

export default {
    title: 'containers/Box',
    component: Box,
  };

const BoxTemplate = (args) => <Box {...args} />;

export const SampleBox = BoxTemplate.bind({});

SampleBox.args = {
  children: <div style={{minHeight: '500px'}}>sample text</div>
};

