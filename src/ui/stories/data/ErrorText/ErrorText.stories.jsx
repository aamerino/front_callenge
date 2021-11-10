import React from 'react'
import ErrorText from '.'

export default {
  title: 'data/ErrorText',
  component: ErrorText,
  argTypes: {
    children: { control: 'text' },
  },
}

const ErrorTextTemplate = (args) => <ErrorText {...args} />

export const BaseErrorText = ErrorTextTemplate.bind({})
BaseErrorText.args = {
  children: "Error Text",
}
