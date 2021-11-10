import React from 'react'
import { Flex } from '../../..'

const Pagination = ({ current, next,hasNext, back, hasBack }) => (
  <Flex justifyContent="center">
    {hasBack && <div onClick={back}>⬅️</div>}
    {current}
    {hasNext && <div onClick={next}>➡️</div>}
  </Flex>
)
export default Pagination
