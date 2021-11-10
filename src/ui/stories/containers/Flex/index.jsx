import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  padding: ${({ theme }) => theme.space.medium};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ direction }) =>
    direction === 'column' ? 'column' : 'row'};
`

export const Flex = ({ children, ...props }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>
}
