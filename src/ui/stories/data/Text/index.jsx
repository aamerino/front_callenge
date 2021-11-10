import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  font-size: ${(props) =>
    props.title ? props.theme.fontSizes.large : props.theme.fontSizes.small};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-family: ${(props) => props.theme.fontFamily};
  margin-left: ${(props) => props.theme.space.small};
  margin-right: ${(props) => props.theme.space.small};
`

const Text = ({ children, ...restProps }) => (
  <StyledSpan {...restProps}>{children}</StyledSpan>
)

export default Text
