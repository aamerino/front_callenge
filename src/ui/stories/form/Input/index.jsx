import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../breakpoints'

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  cursor: pointer;
  font-weight: 400;
  padding: 11.5px 16px;
  border-width: 1px;
  border-color: ${({ theme, isNotValid }) =>
    isNotValid ? theme.colors.negative : ''};
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
    box-sizing: border-box;
  } ;
`

export const Input = ({
  onChange,
  placeholder,
  onClick,
  ...restProps
}) => {
  return (
    <StyledInput
      {...restProps}
      onChange={(e) => {
        onChange(e.target.value)
      }}
      placeholder={placeholder}
      onClick={onClick}
    ></StyledInput>
  )
}
