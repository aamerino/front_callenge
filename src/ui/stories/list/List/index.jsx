import React from 'react'
import { Box } from '../../..'

const List = ({ data, itemRenderer }) => (
  <Box>
    {(data?.length > 0 && data.map(itemRenderer)) || 'No results found'}
  </Box>
)

export default List
