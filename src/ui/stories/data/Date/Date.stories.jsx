import React from 'react'
import DateTime from '.'

export default {
  title: 'data/DateTime',
  component: DateTime,
  argTypes: {
    dateTime: { control: 'date' },
  },
}

const DateTimeTemplate = (args) => <DateTime {...args} />

const todayDate = new Date()
export const BaseDateTime = DateTimeTemplate.bind({})
BaseDateTime.args = {
  dateTime: todayDate,
}
