import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../breakpoints'

const StyledDiv = styled.div`
  padding: ${({ theme }) => theme.space.medium};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ direction }) =>
    direction === 'column' ? 'column' : 'row'};
  @media only screen and ${breakpoints.device.sm} {
    flex-direction: ${() => 'column'};
  };
`

export const ResponsiveFlex = ({ children, ...props }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>
}
