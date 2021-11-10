import React from 'react'
import { DayPicker } from '../DayPicker'


export default {
  title: 'form/DayPicker',
  component: DayPicker,
}

const DayPickerTemplate = (args) => <DayPicker {...args} />

export const BaseDayPicker = DayPickerTemplate.bind({})
BaseDayPicker.args = {
    minDate: new Date()
}
