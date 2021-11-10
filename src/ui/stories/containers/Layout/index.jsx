import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  padding: ${({ theme }) => theme.space.medium};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.containers.boxShadow};
  background: ${({ theme }) => theme.colors.layout};
  max-width: ${({ page }) => page === 'home' && '600px'};
  margin: auto;
`

export const Layout = ({ children, ...props }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>
}
