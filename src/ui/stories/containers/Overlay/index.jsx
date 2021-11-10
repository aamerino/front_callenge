import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: fixed;
  display: ${({isOpen}) => isOpen ? 'block': 'none'};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Overlay = ({children, ...props}) => {
    return <StyledDiv {...props}>{children}</StyledDiv>
}
