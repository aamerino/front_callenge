import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { Box } from '../../..'

const StyledOptionContainer = styled.div`
  padding: ${({ theme }) => theme.space.large};
  border-bottom: 1px dotted #cbcbcb;
`
const StyledWrapper = styled.div`
  position: absolute;
  z-index: 2;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 40%);
`
const StyledOption = styled.span``

export const Select = ({
  onSelect,
  options,
  value,
  placeholder,
  isNotValid,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Input
        value={value}
        onClick={() => {
          setIsOpen(true)
        }}
        onChange={onSelect}
        placeholder={placeholder}
        isNotValid={isNotValid}
      ></Input>

      {isOpen && (
        <StyledWrapper>
          <Box>
            {(options &&
              options.length > 0 &&
              options.map((option, key) => (
                <StyledOptionContainer
                  key={key}
                  onClick={() => {
                    setIsOpen(false)
                    onSelect(option)
                  }}
                >
                  <StyledOption>{option}</StyledOption>
                </StyledOptionContainer>
              ))) || (
              <StyledOptionContainer>
                <StyledOption>No results found</StyledOption>
              </StyledOptionContainer>
            )}
          </Box>
        </StyledWrapper>
      )}
    </div>
  )
}
