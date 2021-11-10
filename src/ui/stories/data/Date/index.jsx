import React from 'react'
import Text from '../Text'

const DateTime = ({ dateTime }) => {
    return (
  <>
    <Text>{dateTime?.toLocaleDateString()}</Text>
    <Text>{dateTime?.toLocaleTimeString()}</Text>
  </>
)}
export default DateTime
