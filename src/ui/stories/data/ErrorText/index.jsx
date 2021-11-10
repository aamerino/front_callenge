import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.negative};
  font-family: ${(props) => props.theme.fontFamily};
`
const ErrorText = ({ children }) => <StyledSpan>{children}</StyledSpan>

export default ErrorText
