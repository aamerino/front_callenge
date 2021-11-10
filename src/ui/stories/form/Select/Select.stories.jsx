import React from 'react'

import { Select } from '.'

export default {
  title: 'form/Select',
  component: Select,
}

const SelectTemplate = (args) => <Select {...args} />

export const Primary = SelectTemplate.bind({})
Primary.args = {
  value: 'PMI',
  options: ['Madrid', 'Barcelona', 'Roma', 'London'],
}
