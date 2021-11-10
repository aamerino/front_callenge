import React from 'react'
import Text from '../Text'
import { Flex } from '../../..'
import styled from 'styled-components'
import breakpoints from '../../breakpoints'

const StyledDiv = styled.div`
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
    box-sizing: border-box;
  } ;
`
const PriceCarrier = ({ price, carrier }) => (
  <StyledDiv>
    <Flex direction="column">
      <Text>{carrier}</Text>
      <Text>{price} €</Text>
    </Flex>
  </StyledDiv>
)

export default PriceCarrier
