import React from 'react'
import { ResponsiveFlex } from '../../../containers/ResponsiveFlex'
import styled from 'styled-components'
import Text from '../../../data/Text'
import DateTime from '../../../data/Date'
import PriceCarrier from '../../../data/PriceCarrier'
import breakpoints from '../../../breakpoints'

const WrapperDiv = styled.div`
  padding: ${({ theme }) => theme.space.medium};
  margin-top: ${({ theme }) => theme.space.large};
  margin-bottom: ${({ theme }) => theme.space.large};
  box-shadow: ${({ theme }) => theme.containers.boxShadow};
  border-top: ${({ theme }) => theme.containers.listItemBorder};
`
const FlightInfoDiv = styled.div`
  width: 45%;
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
    box-sizing: border-box;
  } ;
`
const LocationDiv = styled.div`
  padding-bottom: ${({ theme }) => theme.space.small};
`
const FlightsRenderer = ({
  arrivalDate,
  departureDate,
  arrivalLocation,
  departureLocation,
  carrier,
  price,
}) => (
  <WrapperDiv>
    <ResponsiveFlex>
      <FlightInfoDiv>
        <LocationDiv>
          <Text bold>Departure:</Text>
          <Text>{departureLocation}</Text>
        </LocationDiv>
        <DateTime dateTime={departureDate}></DateTime>
      </FlightInfoDiv>
      <FlightInfoDiv justifyContent="end">
        <LocationDiv>
          <Text bold>Arrival:</Text>
          <Text>{arrivalLocation}</Text>
        </LocationDiv>
        <DateTime dateTime={arrivalDate}></DateTime>
      </FlightInfoDiv>
      <PriceCarrier carrier={carrier} price={price}></PriceCarrier>
    </ResponsiveFlex>
  </WrapperDiv>
)

export default FlightsRenderer
