import React from 'react';

import { Overlay } from '.';

export default {
    title: 'containers/Overlay',
    component: Overlay,
  };

const OverlayTemplate = (args) => <Overlay {...args} />;

export const Primary = OverlayTemplate.bind({});

Primary.args = {
  isOpen: true,
  children: <div>sample text</div>
};


