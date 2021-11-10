import React from 'react'
import List from '.'
import FlightsRenderer from '../itemRenderers/FlightsRenderer'

export default {
  title: 'list/List',
  component: List,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const ListTemplate = (args) => <List {...args} />

export const BaseList = ListTemplate.bind({})
BaseList.args = {
  data: [
    {
        "arrivalDate": new Date(),
        "departureDate": new Date(),
        "arrivalLocation": "Roma",
        "departureLocation": "Toronto",
        "carrier": "Spanair",
        "price": 17.49
      },
      {
        "arrivalDate": new Date(),
        "departureDate": new Date(),
        "arrivalLocation": "Moscú",
        "departureLocation": "Barcelona",
        "carrier": "KLM",
        "price": 22.94
      },
  ],
  itemRenderer: FlightsRenderer,
}
